import { getExecOutput } from '@actions/exec';
import { which } from '@actions/io';
import type { Platform } from '@expo/config';
import semver from 'semver';
import { URL } from 'url';

export interface EasUpdate {
  /** The unique ID of the platform specific update */
  id: string;
  /** When the update was created */
  createdAt: string;
  /** The unique ID of the update for both platforms */
  group: string;
  /** The branch name where this update was created */
  branch: string;
  /** The message used to describe this update */
  message: string;
  /** The runtime version for which this update is compatible */
  runtimeVersion: string;
  /** Which platform this update belongs to */
  platform: Platform;
  /** The permanent link that refers the platform specific update */
  manifestPermalink: string;
  /** The git commit hash that was recognizable when creating this update */
  gitCommitHash: string;
}

/** We can only run the `preview` sub-action with newer versions of EAS CLI */
export async function assertEasVersion(versionRange: string) {
  let stdout = '';

  try {
    ({ stdout } = await getExecOutput('pnpm eas', ['--version']));
  } catch {
    throw new Error(`Could not verify the EAS CLI version, reason:\nCommand failed 'pnpm eas --version'`);
  }

  const version = stdout.match(/eas-cli\/([^\s]+)/i);
  if (!version || !version[1]) {
    throw new Error(`Could not verify the EAS CLI version, reason:\nUnexpected output received.`);
  }

  if (!semver.satisfies(version[1], versionRange)) {
    throw new Error(
      `The EAS CLI version (${version[1]}) is not supported, reason:\nExpected version range: ${versionRange}`
    );
  }
}

const startMarker = `--non-interactive`;
const endMarker = 'NX   Successfully ran target';

export const parseEasUpdateOutput = (stdout: string): EasUpdate[] => {
  console.log(`***** looking for markers *********`);
  console.log(stdout);
  // Locate the start of the JSON data by finding start marker.
  const startMarkerIndex = stdout.lastIndexOf(startMarker);
  if (startMarkerIndex === -1) {
    console.error(`could not find Starting marker (${startMarker}) in stdout.`);
    throw new Error(`Starting marker not found.`);
  }
  // Find the end of the JSON data using the "> NX" marker.
  const endMarkerIndex = stdout.indexOf(endMarker, startMarkerIndex);
  if (endMarkerIndex === -1) {
    console.error(`could not find ending marker (${endMarker}) in stdout.`);
    throw new Error('ending marker not found.');
  }

  // Extract the substring that contains the JSON data.
  const jsonString = stdout
    .substring(startMarkerIndex + startMarker.length, endMarkerIndex)
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .replace(/\t/g, '')
    .trim();

  return JSON.parse(jsonString);
};

/**
 * Create a new EAS Update using the user-provided command.
 * The command should be anything after `eas ...`.
 */
export async function createUpdate(cwd: string, command: string): Promise<EasUpdate[]> {
  let stdout = '';

  try {
    ({ stdout } = await getExecOutput(command, undefined, {
      cwd,
    }));
    return parseEasUpdateOutput(stdout);
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`Could not create a new EAS Update`, { cause: error });
  }
}

/**
 * Create a QR code link for an EAS Update.
 */
export function getUpdateGroupQr({
  projectId,
  updateGroupId,
  appSlug,
  qrTarget,
}: {
  projectId: string;
  updateGroupId: string;
  appSlug: string;
  qrTarget: 'expo-go' | 'dev-build';
}): string {
  const url = new URL('https://qr.expo.dev/eas-update');

  if (qrTarget === 'dev-build') {
    // While the parameter is called `appScheme`, it's actually the app's slug
    // This should only be added when using dev clients as target
    // See: https://github.com/expo/expo/blob/8ae75dde393e5d2393d446227a1fe2482c75eec3/packages/expo-dev-client/plugin/src/getDefaultScheme.ts#L17
    url.searchParams.append('appScheme', appSlug.replace(/[^A-Za-z0-9+\-.]/g, ''));
  }

  url.searchParams.append('projectId', projectId);
  url.searchParams.append('groupId', updateGroupId);

  return url.toString();
}

/** Create the absolute link to the update group on expo.dev */
export function getUpdateGroupWebsite({
  projectId,
  updateGroupId,
}: {
  projectId: string;
  updateGroupId: string;
}): string {
  return `https://expo.dev/projects/${projectId}/updates/${updateGroupId}`;
}

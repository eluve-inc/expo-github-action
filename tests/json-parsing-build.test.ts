import { extractBuildInfo, parseEasBuildInfo } from '../src/expo';

const testOutput = `

>  NX   Running target build-native for project mobile-expo and 1 task it depends on:
   
> nx run mobile-expo:sync-deps
info Dependencies for 'mobile-expo' are up to date! No changes made.
> nx run mobile-expo:build-native --platform=all --non-interactive --json --wait=false --profile=preview --message build: no wait
[
  {
    "id": "251f917b-eeee-4df7-98c8-e5db1c7eda1f",
    "status": "NEW",
    "platform": "ANDROID",
    "artifacts": {},
    "initiatingActor": {
      "id": "58ac3c98-389e-4461-97ee-ab4ebc90eb88",
      "displayName": "Github"
    },
    "project": {
      "id": "a491794b-fb8f-41ef-9446-d6fe4d0a9264",
      "name": "mobile-expo",
      "slug": "mobile-expo",
      "ownerAccount": {
        "id": "7e171799-c709-4060-b87d-2916acfb578c",
        "name": "eluve"
      }
    },
    "channel": "preview",
    "distribution": "INTERNAL",
    "buildProfile": "preview",
    "sdkVersion": "50.0.0",
    "appVersion": "0.0.7",
    "appBuildVersion": "7",
    "runtimeVersion": "0.0.7",
    "gitCommitHash": "e18d3a319eecbe31d97f0da38e110476fbd92289",
    "gitCommitMessage": "Merge a9a14b3e5d68fa054af8272898b69f3bb51f3550 into 4f60b6ae16bc541b858f6adcbaf457e5fefe02a8",
    "priority": "NORMAL",
    "createdAt": "2024-05-14T00:26:54.869Z",
    "updatedAt": "2024-05-14T00:26:54.869Z",
    "message": "build: no wait",
    "expirationDate": "2024-05-28T00:26:54.384Z",
    "isForIosSimulator": false
  },
  {
    "id": "9a8238a2-640e-453b-b729-79da9d68bdee",
    "status": "NEW",
    "platform": "IOS",
    "artifacts": {},
    "initiatingActor": {
      "id": "58ac3c98-389e-4461-97ee-ab4ebc90eb88",
      "displayName": "Github"
    },
    "project": {
      "id": "a491794b-fb8f-41ef-9446-d6fe4d0a9264",
      "name": "mobile-expo",
      "slug": "mobile-expo",
      "ownerAccount": {
        "id": "7e171799-c709-4060-b87d-2916acfb578c",
        "name": "eluve"
      }
    },
    "channel": "preview",
    "distribution": "INTERNAL",
    "buildProfile": "preview",
    "sdkVersion": "50.0.0",
    "appVersion": "0.0.7",
    "appBuildVersion": "7",
    "runtimeVersion": "0.0.7",
    "gitCommitHash": "e18d3a319eecbe31d97f0da38e110476fbd92289",
    "gitCommitMessage": "Merge a9a14b3e5d68fa054af8272898b69f3bb51f3550 into 4f60b6ae16bc541b858f6adcbaf457e5fefe02a8",
    "priority": "NORMAL",
    "createdAt": "2024-05-14T00:27:02.181Z",
    "updatedAt": "2024-05-14T00:27:02.181Z",
    "message": "build: no wait",
    "expirationDate": "2024-05-28T00:27:01.647Z",
    "isForIosSimulator": false
  }
]
 
 >  NX   Successfully ran target build-native for project mobile-expo and 1 task it depends on


    `;

const singleBuildOutput = `

> nx run mobile-expo:eas build:view --json

★ eas-cli@9.0.6 is now available.
To upgrade, run npm install -g eas-cli.
Proceeding with outdated version.

Found eas-cli in your project dependencies.
It's recommended to use the "cli.version" field in eas.json to enforce the eas-cli version for your project.
Learn more

Found eas-cli in your project dependencies.
It's recommended to use the "cli.version" field in eas.json to enforce the eas-cli version for your project.
Learn more

✔ Showing the last build for the project @eluve/mobile-expo
{
  "id": "72b92292-3513-4b36-814e-9d6006d9fcec",
  "status": "CANCELED",
  "platform": "IOS",
  "artifacts": {},
  "initiatingActor": {
    "id": "58ac3c98-389e-4461-97ee-ab4ebc90eb88",
    "displayName": "Github"
  },
  "project": {
    "id": "a491794b-fb8f-41ef-9446-d6fe4d0a9264",
    "name": "mobile-expo",
    "slug": "mobile-expo",
    "ownerAccount": {
      "id": "7e171799-c709-4060-b87d-2916acfb578c",
      "name": "eluve"
    }
  },
  "channel": "preview",
  "distribution": "INTERNAL",
  "buildProfile": "preview",
  "sdkVersion": "50.0.0",
  "appVersion": "0.0.7",
  "appBuildVersion": "7",
  "runtimeVersion": "0.0.7",
  "gitCommitHash": "df017721e29fd1fc3de22c2c4ab466787940fce4",
  "gitCommitMessage": "Merge 8a304254e7a14ca97271ab6ccd9ea9141f9ef955 into a59cdba5d300a85b48ff8e6acd24c114cf8504d5",
  "priority": "NORMAL",
  "createdAt": "2024-05-16T17:13:45.878Z",
  "updatedAt": "2024-05-16T17:14:29.264Z",
  "message": "main-26 #26",
  "completedAt": "2024-05-16T17:14:18.092Z",
  "expirationDate": "2024-05-30T17:13:45.481Z",
  "isForIosSimulator": false
}

 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target eas for project mobile-expo (1s)
 
         With additional flags:
           build:view
           --json=true
 
    `;

const complexTestOutput = `

>  NX   Running target build-native for project mobile-expo and 1 task it depends on:
   
> nx run mobile-expo:sync-deps
info Dependencies for 'mobile-expo' are up to date! No changes made.
> nx run mobile-expo:build-native --platform=all --non-interactive --json --wait=false --profile=preview --message [eluv-243]-(testing regex)\n\nwith chars [and more brackets]
[
  {
    "id": "251f917b-eeee-4df7-98c8-e5db1c7eda1f",
    "status": "NEW",
    "platform": "ANDROID",
    "artifacts": {},
    "initiatingActor": {
      "id": "58ac3c98-389e-4461-97ee-ab4ebc90eb88",
      "displayName": "Github"
    },
    "project": {
      "id": "a491794b-fb8f-41ef-9446-d6fe4d0a9264",
      "name": "mobile-expo",
      "slug": "mobile-expo",
      "ownerAccount": {
        "id": "7e171799-c709-4060-b87d-2916acfb578c",
        "name": "eluve"
      }
    },
    "channel": "preview",
    "distribution": "INTERNAL",
    "buildProfile": "preview",
    "sdkVersion": "50.0.0",
    "appVersion": "0.0.7",
    "appBuildVersion": "7",
    "runtimeVersion": "0.0.7",
    "gitCommitHash": "e18d3a319eecbe31d97f0da38e110476fbd92289",
    "gitCommitMessage": "Merge a9a14b3e5d68fa054af8272898b69f3bb51f3550 into 4f60b6ae16bc541b858f6adcbaf457e5fefe02a8",
    "priority": "NORMAL",
    "createdAt": "2024-05-14T00:26:54.869Z",
    "updatedAt": "2024-05-14T00:26:54.869Z",
    "message": "build: no wait",
    "expirationDate": "2024-05-28T00:26:54.384Z",
    "isForIosSimulator": false
  },
  {
    "id": "9a8238a2-640e-453b-b729-79da9d68bdee",
    "status": "NEW",
    "platform": "IOS",
    "artifacts": {},
    "initiatingActor": {
      "id": "58ac3c98-389e-4461-97ee-ab4ebc90eb88",
      "displayName": "Github"
    },
    "project": {
      "id": "a491794b-fb8f-41ef-9446-d6fe4d0a9264",
      "name": "mobile-expo",
      "slug": "mobile-expo",
      "ownerAccount": {
        "id": "7e171799-c709-4060-b87d-2916acfb578c",
        "name": "eluve"
      }
    },
    "channel": "preview",
    "distribution": "INTERNAL",
    "buildProfile": "preview",
    "sdkVersion": "50.0.0",
    "appVersion": "0.0.7",
    "appBuildVersion": "7",
    "runtimeVersion": "0.0.7",
    "gitCommitHash": "e18d3a319eecbe31d97f0da38e110476fbd92289",
    "gitCommitMessage": "Merge a9a14b3e5d68fa054af8272898b69f3bb51f3550 into 4f60b6ae16bc541b858f6adcbaf457e5fefe02a8",
    "priority": "NORMAL",
    "createdAt": "2024-05-14T00:27:02.181Z",
    "updatedAt": "2024-05-14T00:27:02.181Z",
    "message": "build: no wait",
    "expirationDate": "2024-05-28T00:27:01.647Z",
    "isForIosSimulator": false
  }
]
 
 >  NX   Successfully ran target build-native for project mobile-expo and 1 task it depends on


    `;

const expected = [
  {
    id: '251f917b-eeee-4df7-98c8-e5db1c7eda1f',
    status: 'NEW',
    platform: 'ANDROID',
    artifacts: {},
    initiatingActor: {
      id: '58ac3c98-389e-4461-97ee-ab4ebc90eb88',
      displayName: 'Github',
    },
    project: {
      id: 'a491794b-fb8f-41ef-9446-d6fe4d0a9264',
      name: 'mobile-expo',
      slug: 'mobile-expo',
      ownerAccount: {
        id: '7e171799-c709-4060-b87d-2916acfb578c',
        name: 'eluve',
      },
    },
    channel: 'preview',
    distribution: 'INTERNAL',
    buildProfile: 'preview',
    sdkVersion: '50.0.0',
    appVersion: '0.0.7',
    appBuildVersion: '7',
    runtimeVersion: '0.0.7',
    gitCommitHash: 'e18d3a319eecbe31d97f0da38e110476fbd92289',
    gitCommitMessage: 'Merge a9a14b3e5d68fa054af8272898b69f3bb51f3550 into 4f60b6ae16bc541b858f6adcbaf457e5fefe02a8',
    priority: 'NORMAL',
    createdAt: '2024-05-14T00:26:54.869Z',
    updatedAt: '2024-05-14T00:26:54.869Z',
    message: 'build: no wait',
    expirationDate: '2024-05-28T00:26:54.384Z',
    isForIosSimulator: false,
  },
  {
    id: '9a8238a2-640e-453b-b729-79da9d68bdee',
    status: 'NEW',
    platform: 'IOS',
    artifacts: {},
    initiatingActor: {
      id: '58ac3c98-389e-4461-97ee-ab4ebc90eb88',
      displayName: 'Github',
    },
    project: {
      id: 'a491794b-fb8f-41ef-9446-d6fe4d0a9264',
      name: 'mobile-expo',
      slug: 'mobile-expo',
      ownerAccount: {
        id: '7e171799-c709-4060-b87d-2916acfb578c',
        name: 'eluve',
      },
    },
    channel: 'preview',
    distribution: 'INTERNAL',
    buildProfile: 'preview',
    sdkVersion: '50.0.0',
    appVersion: '0.0.7',
    appBuildVersion: '7',
    runtimeVersion: '0.0.7',
    gitCommitHash: 'e18d3a319eecbe31d97f0da38e110476fbd92289',
    gitCommitMessage: 'Merge a9a14b3e5d68fa054af8272898b69f3bb51f3550 into 4f60b6ae16bc541b858f6adcbaf457e5fefe02a8',
    priority: 'NORMAL',
    createdAt: '2024-05-14T00:27:02.181Z',
    updatedAt: '2024-05-14T00:27:02.181Z',
    message: 'build: no wait',
    expirationDate: '2024-05-28T00:27:01.647Z',
    isForIosSimulator: false,
  },
];

describe('parseEasBuildInfo', () => {
  it('parses EAS build info', () => {
    expect(parseEasBuildInfo(testOutput)).toEqual(expected);
  });
  it('parses build info with complex git message', () => {
    expect(parseEasBuildInfo(complexTestOutput)).toEqual(expected);
  });
  it('parses single build info', () => {
    expect(extractBuildInfo(singleBuildOutput)).toEqual({
      id: '72b92292-3513-4b36-814e-9d6006d9fcec',
      status: 'CANCELED',
      platform: 'IOS',
      artifacts: {},
      initiatingActor: {
        id: '58ac3c98-389e-4461-97ee-ab4ebc90eb88',
        displayName: 'Github',
      },
      project: {
        id: 'a491794b-fb8f-41ef-9446-d6fe4d0a9264',
        name: 'mobile-expo',
        slug: 'mobile-expo',
        ownerAccount: {
          id: '7e171799-c709-4060-b87d-2916acfb578c',
          name: 'eluve',
        },
      },
      channel: 'preview',
      distribution: 'INTERNAL',
      buildProfile: 'preview',
      sdkVersion: '50.0.0',
      appVersion: '0.0.7',
      appBuildVersion: '7',
      runtimeVersion: '0.0.7',
      gitCommitHash: 'df017721e29fd1fc3de22c2c4ab466787940fce4',
      gitCommitMessage: 'Merge 8a304254e7a14ca97271ab6ccd9ea9141f9ef955 into a59cdba5d300a85b48ff8e6acd24c114cf8504d5',
      priority: 'NORMAL',
      createdAt: '2024-05-16T17:13:45.878Z',
      updatedAt: '2024-05-16T17:14:29.264Z',
      message: 'main-26 #26',
      completedAt: '2024-05-16T17:14:18.092Z',
      expirationDate: '2024-05-30T17:13:45.481Z',
      isForIosSimulator: false,
    });
  });
});

const { parseEasUpdateOutput } = require('../src/eas');

const testOutput = `
>  NX   Running target update for project mobile-expo and 1 task it depends on:
   
> nx run mobile-expo:sync-deps
info Added entries to 'package.json' for 'mobile-expo' (for autolink):
  "stream-chain": "*"
  "stream-json": "*"
  "@storybook/addon-viewport": "*"
  "@types/stream-chain": "*"
  "@types/stream-json": "*"
> nx run mobile-expo:update --auto --json --non-interactive
› Installing 1 SDK 50.0.0 compatible native module using pnpm
> pnpm add expo-updates@~0.24.12
Progress: resolved 0, reused 1, downloaded 0, added 0
 WARN  deprecated @types/react-native@0.73.0: This is a stub types definition. react-native provides its own type definitions, so you do not need this installed.
Progress: resolved 243, reused 243, downloaded 0, added 0
 WARN  deprecated text-encoding@0.7.0: no longer maintained
Progress: resolved 368, reused 368, downloaded 0, added 0
Progress: resolved 447, reused 435, downloaded 0, added 0
Progress: resolved 667, reused 606, downloaded 0, added 0
Progress: resolved 897, reused 817, downloaded 0, added 0
Progress: resolved 1138, reused 1058, downloaded 0, added 0
Progress: resolved 1336, reused 1236, downloaded 0, added 0
Progress: resolved 1521, reused 1420, downloaded 0, added 0
Progress: resolved 1767, reused 1666, downloaded 0, added 0
Progress: resolved 1953, reused 1855, downloaded 0, added 0
Progress: resolved 2106, reused 2015, downloaded 0, added 0
Progress: resolved 2270, reused 2187, downloaded 0, added 0
Progress: resolved 2476, reused 2372, downloaded 0, added 0
Progress: resolved 2678, reused 2576, downloaded 0, added 0
Progress: resolved 2889, reused 2760, downloaded 0, added 0
Progress: resolved 2994, reused 2864, downloaded 0, added 0
Progress: resolved 3114, reused 2984, downloaded 0, added 0
Progress: resolved 3297, reused 3169, downloaded 0, added 0
Progress: resolved 3489, reused 3364, downloaded 0, added 0
Progress: resolved 3661, reused 3536, downloaded 0, added 0
Progress: resolved 3797, reused 3672, downloaded 0, added 0
Progress: resolved 3970, reused 3847, downloaded 0, added 0
Progress: resolved 4047, reused 3924, downloaded 0, added 0
Progress: resolved 4110, reused 3987, downloaded 0, added 0
 WARN  18 deprecated subdependencies found: @azure/msal-browser@2.38.2, @azure/msal-node@1.18.3, @babel/plugin-proposal-async-generator-functions@7.20.7, @babel/plugin-proposal-class-properties@7.18.6, @babel/plugin-proposal-logical-assignment-operators@7.20.7, @babel/plugin-proposal-nullish-coalescing-operator@7.18.6, @babel/plugin-proposal-numeric-separator@7.18.6, @babel/plugin-proposal-object-rest-spread@7.20.7, @babel/plugin-proposal-optional-catch-binding@7.18.6, @babel/plugin-proposal-optional-chaining@7.21.0, @npmcli/move-file@1.1.2, @oclif/screen@3.0.8, @opentelemetry/api-metrics@0.32.0, debuglog@1.0.1, loupe@2.3.6, read-package-tree@5.3.1, readdir-scoped-modules@1.1.0, sourcemap-codec@1.4.8
Progress: resolved 4114, reused 3991, downloaded 0, added 0
Already up to date
Progress: resolved 4114, reused 3991, downloaded 0, added 0, done
 WARN  Issues with peer dependencies found
.
├─┬ @storybook/react-vite 7.6.12
│ └─┬ @vitejs/plugin-react 3.1.0
│   └── ✕ unmet peer vite@^4.1.0-beta.0: found 5.0.13
├─┬ @boxyhq/saml-jackson 1.21.3
│ └─┬ typeorm 0.3.20
│   └── ✕ unmet peer mongodb@^5.8.0: found 6.5.0 in @boxyhq/saml-jackson
├─┬ @level.up/hasura-permissions 0.0.7
│ ├── ✕ unmet peer ts-morph@^17.0.1: found 20.0.0
│ └── ✕ unmet peer type-fest@^3.5.3: found 4.6.0
├─┬ @tamagui-extras/core 1.12.2
│ ├── ✕ unmet peer react-native@0.72.6: found 0.73.6
│ ├── ✕ unmet peer react-native-svg@^13.9.0: found 14.1.0
│ └── ✕ unmet peer tamagui@1.29.3: found 1.94.3
├─┬ @tamagui-extras/form 1.17.2
│ ├── ✕ unmet peer react-native@0.72.6: found 0.73.6
│ └── ✕ unmet peer tamagui@1.29.3: found 1.94.3
├─┬ @tamagui/babel-plugin 1.94.3
│ └─┬ @tamagui/static 1.94.3
│   └─┬ @tamagui/build 1.94.3
│     └─┬ esbuild-plugin-es5 2.1.0
│       └── ✕ unmet peer esbuild@^0.19.0: found 0.20.2 in @tamagui/build
├─┬ apollo-link 1.2.14
│ ├── ✕ unmet peer graphql@"^0.11.3 || ^0.12.3 || ^0.13.0 || ^14.0.0 || ^15.0.0": found 16.8.1
│ └─┬ apollo-utilities 1.3.4
│   └── ✕ unmet peer graphql@"^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0": found 16.8.1
├─┬ langchain 0.0.175
│ └── ✕ unmet peer @google-cloud/storage@^6.10.1: found 7.11.0
└─┬ react-diff-viewer 3.1.1
  ├── ✕ unmet peer react@"^15.3.0 || ^16.0.0": found 18.2.0
  └── ✕ unmet peer react-dom@"^15.3.0 || ^16.0.0": found 18.2.0
Done in 29.2s
info Dependencies for 'mobile-expo' are up to date! No changes made.
[
  {
    "id": "80ee8c1e-4fc5-4461-ab69-9ba14d83ceb7",
    "createdAt": "2024-05-13T00:41:04.668Z",
    "group": "98eaa3d4-5daa-48f3-94d8-e6f5edbe48d7",
    "branch": "main",
    "message": "feat: add feature flag for live transcription v2 [ELU-1415] (#763)\n\n#### Features\n- Feature flag for live transcription V2",
    "runtimeVersion": "0.0.6",
    "platform": "android",
    "manifestPermalink": "https://u.expo.dev/update/80ee8c1e-4fc5-4461-ab69-9ba14d83ceb7",
    "isRollBackToEmbedded": false,
    "gitCommitHash": "60052629c9b92578d29fa32b45dd38c8f2c59736"
  },
  {
    "id": "3393c38f-5c14-47c8-a147-7b6fce02db84",
    "createdAt": "2024-05-13T00:41:04.668Z",
    "group": "98eaa3d4-5daa-48f3-94d8-e6f5edbe48d7",
    "branch": "main",
    "message": "feat: add feature flag for live transcription v2 [ELU-1415] (#763)\n\n#### Features\n- Feature flag for live transcription V2",
    "runtimeVersion": "0.0.6",
    "platform": "ios",
    "manifestPermalink": "https://u.expo.dev/update/3393c38f-5c14-47c8-a147-7b6fce02db84",
    "isRollBackToEmbedded": false,
    "gitCommitHash": "60052629c9b92578d29fa32b45dd38c8f2c59736"
  }
]
 
 >  NX   Successfully ran target update for project mobile-expo and 1 task it depends on


   `;

const testMultipleMarkersOutput = `
 >  NX   Running target update for project mobile-expo and 1 task it depends on:
  
   
  
  > nx run mobile-expo:sync-deps
  
  info Dependencies for 'mobile-expo' are up to date! No changes made.
  SyntaxError: Unexpected token '>', "> nx run m"... is not valid JSON
      at JSON.parse (<anonymous>)
      at parseEasUpdateOutput (/home/runner/work/_actions/eluve-inc/expo-github-action/main/build/preview/index.js:42154:17)
  
      at createUpdate (/home/runner/work/_actions/eluve-inc/expo-github-action/main/build/preview/index.js:42167:49)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
  > nx run mobile-expo:update --branch=main --message=fix: disable Datadog for local React Native build [ELU-1835] (#1062) --json --non-interactive
  
  › Installing 1 SDK 51.0.0 compatible native module using pnpm
  > pnpm add expo-updates@~0.25.18
  Progress: resolved 0, reused 1, downloaded 0, added 0
  Progress: resolved 200, reused 200, downloaded 0, added 0
  Progress: resolved 358, reused 358, downloaded 0, added 0
   WARN  deprecated text-encoding@0.7.0: no longer maintained
  Progress: resolved 452, reused 440, downloaded 0, added 0
  Progress: resolved 737, reused 674, downloaded 0, added 0
  Progress: resolved 1406, reused 1305, downloaded 0, added 0
  Progress: resolved 1913, reused 1817, downloaded 0, added 0
  Progress: resolved 2679, reused 2597, downloaded 0, added 0
  Progress: resolved 3114, reused 3006, downloaded 0, added 0
  Progress: resolved 3934, reused 3832, downloaded 0, added 0
  Progress: resolved 4019, reused 3917, downloaded 0, added 0
   WARN  27 deprecated subdependencies found: @azure/msal-browser@2.38.2, @azure/msal-node@1.18.3, @babel/plugin-proposal-async-generator-functions@7.20.7, @babel/plugin-proposal-class-properties@7.18.6, @babel/plugin-proposal-logical-assignment-operators@7.20.7, @babel/plugin-proposal-nullish-coalescing-operator@7.18.6, @babel/plugin-proposal-numeric-separator@7.18.6, @babel/plugin-proposal-object-rest-spread@7.20.7, @babel/plugin-proposal-optional-catch-binding@7.18.6, @babel/plugin-proposal-optional-chaining@7.21.0, @oclif/screen@3.0.8, @opentelemetry/api-metrics@0.32.0, @storybook/expect@28.1.3-5, debuglog@1.0.1, glob@6.0.4, glob@7.1.6, glob@7.2.3, inflight@1.0.6, osenv@0.1.5, querystring@0.2.1, read-package-tree@5.3.1, readdir-scoped-modules@1.1.0, rimraf@2.4.5, rimraf@2.6.3, rimraf@2.7.1, sourcemap-codec@1.4.8, trim@0.0.1
  Progress: resolved 4098, reused 3996, downloaded 0, added 0
  Already up to date
  Progress: resolved 4098, reused 3996, downloaded 0, added 0, done
   WARN  Issues with peer dependencies found
  .
  ├─┬ @boxyhq/saml-jackson 1.21.3
  │ └─┬ typeorm 0.3.20
  │   └── ✕ unmet peer mongodb@^5.8.0: found 6.5.0 in @boxyhq/saml-jackson
  ├─┬ @level.up/hasura-permissions 0.0.7
  │ ├── ✕ unmet peer ts-morph@^17.0.1: found 20.0.0
  │ └── ✕ unmet peer type-fest@^3.5.3: found 4.6.0
  ├─┬ @tamagui-extras/core 1.12.2
  │ ├── ✕ unmet peer react-native@0.72.6: found 0.74.3
  │ ├── ✕ unmet peer react-native-svg@^13.9.0: found 15.2.0
  │ └── ✕ unmet peer tamagui@1.29.3: found 1.94.3
  ├─┬ @tamagui-extras/form 1.17.2
  │ ├── ✕ unmet peer react-native@0.72.6: found 0.74.3
  │ └── ✕ unmet peer tamagui@1.29.3: found 1.94.3
  ├─┬ @tamagui/babel-plugin 1.94.3
  │ └─┬ @tamagui/static 1.94.3
  │   └─┬ @tamagui/build 1.94.3
  │     └─┬ esbuild-plugin-es5 2.1.0
  │       └── ✕ unmet peer esbuild@^0.19.0: found 0.20.2 in @tamagui/build
  ├─┬ apollo-link 1.2.14
  │ ├── ✕ unmet peer graphql@"^0.11.3 || ^0.12.3 || ^0.13.0 || ^14.0.0 || ^15.0.0": found 16.8.1
  │ └─┬ apollo-utilities 1.3.4
  │   └── ✕ unmet peer graphql@"^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0": found 16.8.1
  ├─┬ langchain 0.0.175
  │ └── ✕ unmet peer @google-cloud/storage@^6.10.1: found 7.11.0
  └─┬ react-diff-viewer 3.1.1
    ├── ✕ unmet peer react@"^15.3.0 || ^16.0.0": found 18.2.0
    └── ✕ unmet peer react-dom@"^15.3.0 || ^16.0.0": found 18.2.0
  Done in 14.1s
  info Dependencies for 'mobile-expo' are up to date! No changes made.
  [
    {
      "id": "ebdc4212-8100-4d3d-850d-5f5ff2368948",
      "createdAt": "2024-07-08T00:26:11.093Z",
      "group": "58414b99-3d5a-4b3a-807c-2ba705ce1c18",
      "branch": "main",
      "message": "fix: disable Datadog for local React Native build [ELU-1835] (#1062)",
      "runtimeVersion": "0.0.9",
      "platform": "android",
      "manifestPermalink": "https://u.expo.dev/update/ebdc4212-8100-4d3d-850d-5f5ff2368948",
      "isRollBackToEmbedded": false,
      "gitCommitHash": "1a886279acfac1b2da77a4bea7df4125b5142377"
    },
    {
      "id": "4c8469de-b29e-4224-b5ac-bad74050a9ff",
      "createdAt": "2024-07-08T00:26:11.093Z",
      "group": "58414b99-3d5a-4b3a-807c-2ba705ce1c18",
      "branch": "main",
      "message": "fix: disable Datadog for local React Native build [ELU-1835] (#1062)",
      "runtimeVersion": "0.0.9",
      "platform": "ios",
      "manifestPermalink": "https://u.expo.dev/update/4c8469de-b29e-4224-b5ac-bad74050a9ff",
      "isRollBackToEmbedded": false,
      "gitCommitHash": "1a886279acfac1b2da77a4bea7df4125b5142377"
    }
  ]
  
   
  
   >  NX   Successfully ran target update for project mobile-expo and 1 task it depends on

   `;

const testComplexGitMessageOutput = `
>  NX   Running target update for project mobile-expo and 1 task it depends on:
   
info Dependencies for 'mobile-expo' are up to date! No changes made.
[
  {
    "id": "80ee8c1e-4fc5-4461-ab69-9ba14d83ceb7",
    "createdAt": "2024-05-13T00:41:04.668Z",
    "group": "98eaa3d4-5daa-48f3-94d8-e6f5edbe48d7",
    "branch": "main",
    "message": "feat: add feature flag for live transcription v2 [ELU-1415] (#763)\n\n## Improvements

    - Renames existing appointment_billing_codes table to
    appointment_billing_code_recommendations since there is a ton of
    recommendation specific logic related to its columns
    - Creates a new table called appointment_billing_codes for user
    specific code selection. In a future ticket a user will have the ability
    to approve a recommendation which will also add it to the new table
    - Cleans up/removes old billing code application logic
    - Cleans up a bit more of the new Billing Codes extension and add the
    ability to attach a handler for when the user adds a billing code
    through the # mention
    - When a billing code is added inline, adds a reference in the new
    appointment_billing_codes table so that we have a schematized
    reference without having to constantly parse the string contents of the
    note",
    "runtimeVersion": "0.0.6",
    "platform": "android",
    "manifestPermalink": "https://u.expo.dev/update/80ee8c1e-4fc5-4461-ab69-9ba14d83ceb7",
    "isRollBackToEmbedded": false,
    "gitCommitHash": "60052629c9b92578d29fa32b45dd38c8f2c59736"
  },
  {
    "id": "3393c38f-5c14-47c8-a147-7b6fce02db84",
    "createdAt": "2024-05-13T00:41:04.668Z",
    "group": "98eaa3d4-5daa-48f3-94d8-e6f5edbe48d7",
    "branch": "main",
    "message": "feat: add feature flag for live transcription v2 [ELU-1415] (#763)\n\n## Improvements

    - Renames existing appointment_billing_codes table to
    appointment_billing_code_recommendations since there is a ton of
    recommendation specific logic related to its columns
    - Creates a new table called appointment_billing_codes for user
    specific code selection. In a future ticket a user will have the ability
    to approve a recommendation which will also add it to the new table
    - Cleans up/removes old billing code application logic
    - Cleans up a bit more of the new Billing Codes extension and add the
    ability to attach a handler for when the user adds a billing code
    through the # mention
    - When a billing code is added inline, adds a reference in the new
    appointment_billing_codes table so that we have a schematized
    reference without having to constantly parse the string contents of the
    note",
    "runtimeVersion": "0.0.6",
    "platform": "ios",
    "manifestPermalink": "https://u.expo.dev/update/3393c38f-5c14-47c8-a147-7b6fce02db84",
    "isRollBackToEmbedded": false,
    "gitCommitHash": "60052629c9b92578d29fa32b45dd38c8f2c59736"
  }
]
 
 >  NX   Successfully ran target update for project mobile-expo and 1 task it depends on


   `;

describe('parseEasUpdateOutput', () => {
  it('parses eas update correctly', () => {
    expect(parseEasUpdateOutput(testOutput)).toEqual([
      {
        id: '80ee8c1e-4fc5-4461-ab69-9ba14d83ceb7',
        createdAt: '2024-05-13T00:41:04.668Z',
        group: '98eaa3d4-5daa-48f3-94d8-e6f5edbe48d7',
        branch: 'main',
        message:
          'feat: add feature flag for live transcription v2 [ELU-1415] (#763)#### Features- Feature flag for live transcription V2',
        runtimeVersion: '0.0.6',
        platform: 'android',
        manifestPermalink: 'https://u.expo.dev/update/80ee8c1e-4fc5-4461-ab69-9ba14d83ceb7',
        isRollBackToEmbedded: false,
        gitCommitHash: '60052629c9b92578d29fa32b45dd38c8f2c59736',
      },
      {
        id: '3393c38f-5c14-47c8-a147-7b6fce02db84',
        createdAt: '2024-05-13T00:41:04.668Z',
        group: '98eaa3d4-5daa-48f3-94d8-e6f5edbe48d7',
        branch: 'main',
        message:
          'feat: add feature flag for live transcription v2 [ELU-1415] (#763)#### Features- Feature flag for live transcription V2',
        runtimeVersion: '0.0.6',
        platform: 'ios',
        manifestPermalink: 'https://u.expo.dev/update/3393c38f-5c14-47c8-a147-7b6fce02db84',
        isRollBackToEmbedded: false,
        gitCommitHash: '60052629c9b92578d29fa32b45dd38c8f2c59736',
      },
    ]);
  });
  it('parses multiple marker eas update correctly', () => {
    expect(parseEasUpdateOutput(testMultipleMarkersOutput)).toEqual([
      {
        id: 'ebdc4212-8100-4d3d-850d-5f5ff2368948',
        createdAt: '2024-07-08T00:26:11.093Z',
        group: '58414b99-3d5a-4b3a-807c-2ba705ce1c18',
        branch: 'main',
        message: 'fix: disable Datadog for local React Native build [ELU-1835] (#1062)',
        runtimeVersion: '0.0.9',
        platform: 'android',
        manifestPermalink: 'https://u.expo.dev/update/ebdc4212-8100-4d3d-850d-5f5ff2368948',
        isRollBackToEmbedded: false,
        gitCommitHash: '1a886279acfac1b2da77a4bea7df4125b5142377',
      },
      {
        id: '4c8469de-b29e-4224-b5ac-bad74050a9ff',
        createdAt: '2024-07-08T00:26:11.093Z',
        group: '58414b99-3d5a-4b3a-807c-2ba705ce1c18',
        branch: 'main',
        message: 'fix: disable Datadog for local React Native build [ELU-1835] (#1062)',
        runtimeVersion: '0.0.9',
        platform: 'ios',
        manifestPermalink: 'https://u.expo.dev/update/4c8469de-b29e-4224-b5ac-bad74050a9ff',
        isRollBackToEmbedded: false,
        gitCommitHash: '1a886279acfac1b2da77a4bea7df4125b5142377',
      },
    ]);
  });
  it('parses complex git message correctly', () => {
    expect(parseEasUpdateOutput(testComplexGitMessageOutput)).toBeTruthy();
  });
  it('can parse a json string', () => {
    expect(JSON.parse(jsonstring)).toEqual({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'New Native Build pipeline started as a result of a fingerprint change on branch: *main*',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Build Details:\n• *Android Build:* [<http://reddit.com|View build page>]\n• *iOS Build:* [<http://reddit.com|View build page>]',
          },
        },
      ],
    });
  });
});

const jsonstring = `
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "New Native Build pipeline started as a result of a fingerprint change on branch: *main*"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Build Details:\\n• *Android Build:* [<http://reddit.com|View build page>]\\n• *iOS Build:* [<http://reddit.com|View build page>]"
      }
    }
  ]
}`;

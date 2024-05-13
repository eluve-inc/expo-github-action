const { parseEasUpdateOutput } = require('../build/preview');
const testOutput = `
[expo-cli] debug.html (390 B)
- Exporting...
[expo-cli] metadata.json (3.52 kB)
- Exporting...
[expo-cli] 
- Exporting...
[expo-cli] App exported to: dist
- Exporting...
✔ Exported bundle(s)
- Uploading...
✔ Uploaded 2 app bundles
✔ Uploading assets skipped - no new assets found
ℹ 24 iOS assets, 30 Android assets (maximum: 2000 total per update). Learn more about asset limits: https://expo.fyi/eas-update-asset-limits
- Publishing...
✔ Published!
      [
        {
          "id": "a8ab41a7-20d9-459e-911d-048af31ab79a",
          "createdAt": "2024-05-09T00:29:12.158Z",
          "group": "774ca662-6a9f-4fb2-8770-55d385d7be12",
          "branch": "main",
          "message": "chore: update error rate alert [ELU-1389] (#749)  Applies error rate filter by environments",
          "runtimeVersion": "0.0.6",
          "platform": "android",
          "manifestPermalink": "https://u.expo.dev/update/a8ab41a7-20d9-459e-911d-048af31ab79a",
          "isRollBackToEmbedded": false,
          "gitCommitHash": "1aceed946ff23c8ce7814e1abba35f7f81112506"
        },
        {
          "id": "0a02c949-0bca-4a86-8b29-77467ecc8ac4",
          "createdAt": "2024-05-09T00:29:12.158Z",
          "group": "774ca662-6a9f-4fb2-8770-55d385d7be12",
          "branch": "main",
          "message": "chore: update error rate alert [ELU-1389] (#749) - Applies error rate filter by environments",
          "runtimeVersion": "0.0.6",
          "platform": "ios",
          "manifestPermalink": "https://u.expo.dev/update/0a02c949-0bca-4a86-8b29-77467ecc8ac4",
          "isRollBackToEmbedded": false,
          "gitCommitHash": "1aceed946ff23c8ce7814e1abba35f7f81112506"
        }
      ]
      >  NX   Successfully ran target update for project mobile-expo and 1 task it depends on
      `;

const longOutput = `
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
      Progress: resolved 245, reused 245, downloaded 0, added 0
       WARN  deprecated text-encoding@0.7.0: no longer maintained
      Progress: resolved 372, reused 372, downloaded 0, added 0
      Progress: resolved 538, reused 514, downloaded 0, added 0
      Progress: resolved 789, reused 719, downloaded 0, added 0
      Progress: resolved 1044, reused 965, downloaded 0, added 0
      Progress: resolved 1285, reused 1192, downloaded 0, added 0
      Progress: resolved 1440, reused 1339, downloaded 0, added 0
      Progress: resolved 1637, reused 1536, downloaded 0, added 0
      Progress: resolved 1859, reused 1762, downloaded 0, added 0
      Progress: resolved 2026, reused 1929, downloaded 0, added 0
      Progress: resolved 2203, reused 2116, downloaded 0, added 0
      Progress: resolved 2390, reused 2286, downloaded 0, added 0
      Progress: resolved 2553, reused 2448, downloaded 0, added 0
      Progress: resolved 2756, reused 2656, downloaded 0, added 0
      Progress: resolved 2926, reused 2796, downloaded 0, added 0
      Progress: resolved 3072, reused 2942, downloaded 0, added 0
      Progress: resolved 3214, reused 3086, downloaded 0, added 0
      Progress: resolved 3387, reused 3261, downloaded 0, added 0
      Progress: resolved 3624, reused 3500, downloaded 0, added 0
      Progress: resolved 3812, reused 3687, downloaded 0, added 0
      Progress: resolved 3950, reused 3827, downloaded 0, added 0
      Progress: resolved 4042, reused 3918, downloaded 0, added 0
      Progress: resolved 4083, reused 3959, downloaded 0, added 0
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
      Done in 28.1s
      info Dependencies for 'mobile-expo' are up to date! No changes made.
      ★ eas-cli@9.0.2 is now available.
      To upgrade, run npm install -g eas-cli.
      Proceeding with outdated version.
      Found eas-cli in your project dependencies.
      It's recommended to use the "cli.version" field in eas.json to enforce the eas-cli version for your project.
      Learn more: https://github.com/expo/eas-cli#enforcing-eas-cli-version-for-your-project
      Found eas-cli in your project dependencies.
      It's recommended to use the "cli.version" field in eas.json to enforce the eas-cli version for your project.
      Learn more: https://github.com/expo/eas-cli#enforcing-eas-cli-version-for-your-project
      Found eas-cli in your project dependencies.
      It's recommended to use the "cli.version" field in eas.json to enforce the eas-cli version for your project.
      Learn more: https://github.com/expo/eas-cli#enforcing-eas-cli-version-for-your-project
      - Exporting...
      [expo-cli] Starting Metro Bundler
      - Exporting...
      [expo-cli] Using src/app as the root directory for Expo Router.
      - Exporting...
      [expo-cli] Using src/app as the root directory for Expo Router.
      - Exporting...
      [expo-cli] native  |                   _layout   ·    2 found   ·    1 opt   ·    1 flat  1555ms
      - Exporting...
      [expo-cli] native  |                     index   ·    5 found   ·    1 opt   ·    1 flat    10ms
      - Exporting...
      [expo-cli] native  |    ActiveAppointmentLayou   ·    1 found   ·    1 opt   ·    1 flat     4ms
      - Exporting...
      [expo-cli] native  |    SessionRecordingWithPa   ·    8 found   ·    5 opt   ·    4 flat    19ms
      - Exporting...
      [expo-cli] native  |    SummarySectionMarkdown   ·    4 found   ·    3 opt   ·    2 flat     9ms
      - Exporting...
      [expo-cli] native  |      TranscriptAndSummary   ·    4 found   ·    0 opt   ·    1 flat     9ms
      - Exporting...
      [expo-cli] native  |                     index   ·    3 found   ·    1 opt   ·    1 flat     4ms
      - Exporting...
      [expo-cli] native  |               JaneWebView   ·    2 found   ·    1 opt   ·    2 flat     7ms
      - Exporting...
      [expo-cli] native  |                     index   ·   11 found   ·    1 opt   ·    3 flat    28ms
      - Exporting...
      [expo-cli] native  |                     index   ·   30 found   ·    2 opt   ·    2 flat    43ms
      - Exporting...
      [expo-cli] native  |            SessionStarter   ·    0 found   ·    0 opt   ·    0 flat     0ms
      - Exporting...
      [expo-cli] native  |                     index   ·   16 found   ·    8 opt   ·    6 flat    26ms
      - Exporting...
      [expo-cli] native  |                     index   ·    4 found   ·    3 opt   ·    3 flat    10ms
      - Exporting...
      [expo-cli] native  |                   _layout   ·    0 found   ·    0 opt   ·    0 flat     1ms
      - Exporting...
      [expo-cli] native  |                     index   ·    7 found   ·    4 opt   ·    2 flat    17ms
      - Exporting...
      [expo-cli] native  |                   regular   ·   10 found   ·    7 opt   ·    6 flat    12ms
      - Exporting...
      [expo-cli] native  |                     index   ·    2 found   ·    2 opt   ·    1 flat     3ms
      - Exporting...
      [expo-cli] native  |                     index   ·    5 found   ·    1 opt   ·    1 flat    12ms
      - Exporting...
      [expo-cli] native  |                   _layout   ·    2 found   ·    1 opt   ·    1 flat     6ms
      - Exporting...
      [expo-cli] native  |                     index   ·    5 found   ·    1 opt   ·    1 flat     6ms
      - Exporting...
      [expo-cli] native  |    ActiveAppointmentLayou   ·    1 found   ·    1 opt   ·    1 flat     3ms
      - Exporting...
      [expo-cli] native  |    SessionRecordingWithPa   ·    8 found   ·    5 opt   ·    4 flat    11ms
      - Exporting...
      [expo-cli] native  |    SummarySectionMarkdown   ·    4 found   ·    3 opt   ·    2 flat     7ms
      - Exporting...
      [expo-cli] native  |      TranscriptAndSummary   ·    4 found   ·    0 opt   ·    1 flat     7ms
      - Exporting...
      [expo-cli] native  |                     index   ·    3 found   ·    1 opt   ·    1 flat     5ms
      - Exporting...
      [expo-cli] native  |               JaneWebView   ·    2 found   ·    1 opt   ·    2 flat     4ms
      - Exporting...
      [expo-cli] native  |                     index   ·   11 found   ·    1 opt   ·    3 flat    32ms
      - Exporting...
      [expo-cli] native  |                     index   ·   30 found   ·    2 opt   ·    2 flat    41ms
      - Exporting...
      [expo-cli] native  |            SessionStarter   ·    0 found   ·    0 opt   ·    0 flat     0ms
      - Exporting...
      [expo-cli] native  |                     index   ·   16 found   ·    8 opt   ·    6 flat    15ms
      - Exporting...
      [expo-cli] native  |                     index   ·    4 found   ·    3 opt   ·    3 flat     6ms
      - Exporting...
      [expo-cli] native  |                   _layout   ·    0 found   ·    0 opt   ·    0 flat     1ms
      - Exporting...
      [expo-cli] native  |                     index   ·    7 found   ·    4 opt   ·    2 flat     8ms
      - Exporting...
      [expo-cli] native  |                   regular   ·   10 found   ·    7 opt   ·    6 flat    15ms
      - Exporting...
      [expo-cli] native  |                     index   ·    2 found   ·    2 opt   ·    1 flat     5ms
      - Exporting...
      [expo-cli] native  |                     index   ·    5 found   ·    1 opt   ·    1 flat     9ms
      - Exporting...
      [expo-cli] native  |                     check   ·    0 found   ·    0 opt   ·    0 flat     1ms
      - Exporting...
      [expo-cli] native  |              chevron-down   ·    0 found   ·    0 opt   ·    0 flat     0ms
      - Exporting...
      [expo-cli] native  |                 copy-icon   ·    0 found   ·    0 opt   ·    0 flat     1ms
      - Exporting...
      [expo-cli] native  |                  keyboard   ·    1 found   ·    0 opt   ·    1 flat     1ms
      - Exporting...
      [expo-cli] native  |                     check   ·    0 found   ·    0 opt   ·    0 flat     0ms
      - Exporting...
      [expo-cli] native  |              chevron-down   ·    0 found   ·    0 opt   ·    0 flat     1ms
      - Exporting...
      [expo-cli] native  |                 copy-icon   ·    0 found   ·    0 opt   ·    0 flat     1ms
      - Exporting...
      [expo-cli] native  |                  keyboard   ·    1 found   ·    0 opt   ·    1 flat     1ms
      - Exporting...
      [expo-cli] iOS Bundled 406930ms (index.js)
      - Exporting...
      [expo-cli] Android Bundled 432979ms (index.js)
      - Exporting...
      [expo-cli] Creating asset map
      - Exporting...
      [expo-cli] Preparing additional debugging files
      - Exporting...
      [expo-cli] 
      - Exporting...
      [expo-cli] Exporting 36 assets:
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/@expo+vector-icons@14.0.0/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf (166 kB)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/@react-navigation+elements@1.3.30_@react-navigation+native@6.1.17_react-native-safe-area-cont_gpxwk4vit45fpgbghyav4zgpla/node_modules/@react-navigation/elements/src/assets/back-icon-mask.png (913 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/@react-navigation+elements@1.3.30_@react-navigation+native@6.1.17_react-native-safe-area-cont_gpxwk4vit45fpgbghyav4zgpla/node_modules/@react-navigation/elements/src/assets/back-icon.png (10 variations | 338 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/expo-router@3.4.8_@testing-library+jest-native@5.4.3_expo-constants@15.4.6_expo-linking@6.2.2_z7tgqaphw5z5luolc4wyfwaqhq/node_modules/expo-router/assets/error.png (516 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/expo-router@3.4.8_@testing-library+jest-native@5.4.3_expo-constants@15.4.6_expo-linking@6.2.2_z7tgqaphw5z5luolc4wyfwaqhq/node_modules/expo-router/assets/file.png (158 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/expo-router@3.4.8_@testing-library+jest-native@5.4.3_expo-constants@15.4.6_expo-linking@6.2.2_z7tgqaphw5z5luolc4wyfwaqhq/node_modules/expo-router/assets/forward.png (250 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/expo-router@3.4.8_@testing-library+jest-native@5.4.3_expo-constants@15.4.6_expo-linking@6.2.2_z7tgqaphw5z5luolc4wyfwaqhq/node_modules/expo-router/assets/pkg.png (429 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/react-native-calendars@1.1304.1_react-native@0.73.6_react@18.2.0/node_modules/react-native-calendars/src/calendar/img/next.png (5 variations | 325 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/react-native-calendars@1.1304.1_react-native@0.73.6_react@18.2.0/node_modules/react-native-calendars/src/calendar/img/previous.png (5 variations | 327 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/react-native-calendars@1.1304.1_react-native@0.73.6_react@18.2.0/node_modules/react-native-calendars/src/img/down.png (5 variations | 401 B)
      - Exporting...
      [expo-cli] ../../node_modules/.pnpm/react-native-calendars@1.1304.1_react-native@0.73.6_react@18.2.0/node_modules/react-native-calendars/src/img/up.png (5 variations | 409 B)
      - Exporting...
      [expo-cli] Exporting 2 bundles for ios:
      - Exporting...
      [expo-cli] _expo/static/js/ios/index-c753f67ac1616731be981a359e576f33.hbc (15.9 MB)
      - Exporting...
      [expo-cli] _expo/static/js/ios/index-c753f67ac1616731be981a359e576f33.hbc.map (39.8 MB)
      - Exporting...
      [expo-cli] Exporting 2 bundles for android:
      - Exporting...
      [expo-cli] _expo/static/js/android/index-affce5ed6ada466d84f3921faa43f44f.hbc (15.9 MB)
      - Exporting...
      [expo-cli] _expo/static/js/android/index-affce5ed6ada466d84f3921faa43f44f.hbc.map (39.8 MB)
      - Exporting...
      [expo-cli] Exporting 3 files:
      - Exporting...
      [expo-cli] assetmap.json (17.3 kB)
      - Exporting...
      [expo-cli] debug.html (390 B)
      - Exporting...
      [expo-cli] metadata.json (3.52 kB)
      - Exporting...
      [expo-cli] 
      - Exporting...
      [expo-cli] App exported to: dist
      - Exporting...
      ✔ Exported bundle(s)
      - Uploading...
      ✔ Uploaded 2 app bundles
      ✔ Uploading assets skipped - no new assets found
      ℹ 24 iOS assets, 30 Android assets (maximum: 2000 total per update). Learn more about asset limits: https://expo.fyi/eas-update-asset-limits
      - Publishing...
      ✔ Published!
      [
        {
          "id": "7706bdd1-d4a5-4c61-b697-25f28c73c5ab",
          "createdAt": "2024-05-09T19:06:23.503Z",
          "group": "7deb7eb3-efbb-4b35-8dbd-71044cddd11b",
          "branch": "main",
          "message": "feat: ingest CPT codes into our DB schema  [ELU-1353][ELU-1120] (#735)\n\n## Improvements\r\n\r\n- Introduces new tables for storing billing codes as a source of truth.\r\nAdds initial support for enums for CPT, ICD-10 and SNOMED\r\n- Adds CLI command for processing and inserting the raw JSON dump from\r\nhttps://github.com/eluve-inc/py_med_codes/blob/main/py_med_codes/tree_jsons/cpt_tree_2024.json\r\nso that it can be exported as SQL insert statements and tracked as part\r\nof our SQL migrations\r\n\r\n---------\r\n\r\nCo-authored-by: Paul Mestemaker <PaulMest@users.noreply.github.com>",
          "runtimeVersion": "0.0.6",
          "platform": "android",
          "manifestPermalink": "https://u.expo.dev/update/7706bdd1-d4a5-4c61-b697-25f28c73c5ab",
          "isRollBackToEmbedded": false,
          "gitCommitHash": "80f018879334050a0c42ddf67666d63e02e097a6"
        },
        {
          "id": "70146a14-71da-4d7f-b05e-7df291eafe09",
          "createdAt": "2024-05-09T19:06:23.503Z",
          "group": "7deb7eb3-efbb-4b35-8dbd-71044cddd11b",
          "branch": "main",
          "message": "feat: ingest CPT codes into our DB schema  [ELU-1353][ELU-1120] (#735)\n\n## Improvements\r\n\r\n- Introduces new tables for storing billing codes as a source of truth.\r\nAdds initial support for enums for CPT, ICD-10 and SNOMED\r\n- Adds CLI command for processing and inserting the raw JSON dump from\r\nhttps://github.com/eluve-inc/py_med_codes/blob/main/py_med_codes/tree_jsons/cpt_tree_2024.json\r\nso that it can be exported as SQL insert statements and tracked as part\r\nof our SQL migrations\r\n\r\n---------\r\n\r\nCo-authored-by: Paul Mestemaker <PaulMest@users.noreply.github.com>",
          "runtimeVersion": "0.0.6",
          "platform": "ios",
          "manifestPermalink": "https://u.expo.dev/update/70146a14-71da-4d7f-b05e-7df291eafe09",
          "isRollBackToEmbedded": false,
          "gitCommitHash": "80f018879334050a0c42ddf67666d63e02e097a6"
        }
      ]
       
      >  NX   Successfully ran target update for project mobile-expo and 1 task it depends on

    `;

// This is the actual text, as the "Published!" text is not stdout
const longMessage = `
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

// Run the test
const jsonData = parseEasUpdateOutput(longMessage);
console.log('Extracted JSON Data:', JSON.stringify(jsonData, null, 2));

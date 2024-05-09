function extractValidJson(output) {
  // Find the start index right after the '✔ Published!' marker
  const startIndex = output.indexOf('✔ Published!');
  if (startIndex === -1) {
    console.error("Starting marker '✔ Published!' not found");
    return null;
  }

  // Extract everything after '✔ Published!'
  let jsonString = output.substring(startIndex + '✔ Published!'.length).trim();
  // Assume the JSON starts with a '[' or '{' and ends correspondingly
  const regex = /^\[\s*{.*}\s*\]$|^\{\s*.*\s*\}$/ms;
  const match = jsonString.match(regex);
  if (!match) {
    console.error('No properly formatted JSON string found after the marker');
    return null;
  }
  // Replace unescaped special characters
  jsonString = jsonString
    .replace(/\n/g, '') // Escapes unescaped newlines
    .replace(/\r/g, '') // Escapes unescaped carriage returns
    .replace(/\t/g, ''); // Escapes unescaped tabs

  try {
    const json = JSON.parse(jsonString);
    return json;
  } catch (error) {
    console.error('Failed to parse JSON', error);
  }

  return null;
}
function extractFormattedJson(output) {
  // Construct a regex that leverages specific indentation (e.g., four spaces)
  const regex = /^\s{4}\[\s*{\s*.*\}\s*\]\s*$/ms;
  const match = output.match(regex);

  if (!match) {
    console.error('No properly formatted JSON string found in the output');
    return null;
  }

  try {
    const json = JSON.parse(match[0]);
    return json;
  } catch (error) {
    console.error('Failed to parse JSON', error);
  }

  return null;
}
// Test input string
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
  `;

// Test input string
const testOutput1 = `
ℹ 24 iOS assets, 30 Android assets (maximum: 2000 total per update). Learn more about asset limits: https://expo.fyi/eas-update-asset-limits
- Publishing...
✔ Published!
[
  {
    "id": "2d127d99-dbc0-4b00-afd8-4c3fc1952144",
    "createdAt": "2024-05-09T05:55:46.186Z",
    "group": "021b3b6f-755c-47be-873a-c4762b0f2485",
    "branch": "main",
    "message": "chore: disable forwarding console logs to DD for web-vite [ELU-1288] (#752)\n\n- Do not forward console logs to DD. This essentially duplicates logs in\nDD",
    "runtimeVersion": "0.0.6",
    "platform": "android",
    "manifestPermalink": "https://u.expo.dev/update/2d127d99-dbc0-4b00-afd8-4c3fc1952144",
    "isRollBackToEmbedded": false,
    "gitCommitHash": "770c60f44402f7b2bee436ecf959babdb22816f3"
  },
  {
    "id": "ffa63e33-0e71-4e3e-991e-1047ac55d563",
    "createdAt": "2024-05-09T05:55:46.186Z",
    "group": "021b3b6f-755c-47be-873a-c4762b0f2485",
    "branch": "main",
    "message": "chore: disable forwarding console logs to DD for web-vite [ELU-1288] (#752)\n\n- Do not forward console logs to DD. This essentially duplicates logs in\nDD",
    "runtimeVersion": "0.0.6",
    "platform": "ios",
    "manifestPermalink": "https://u.expo.dev/update/ffa63e33-0e71-4e3e-991e-1047ac55d563",
    "isRollBackToEmbedded": false,
    "gitCommitHash": "770c60f44402f7b2bee436ecf959babdb22816f3"
  }
]
 
 >  NX   Successfully ran target update for project mobile-expo and 1 task it depends on
  `;

// Run the test
const jsonData = extractValidJson(testOutput);
console.log('Extracted JSON Data:', JSON.stringify(jsonData, null, 2));

function extractValidJson(stdout) {
  // Locate the start of the JSON data by finding the "Published!" marker.
  const startMarkerIndex = stdout.indexOf('Published!');
  if (startMarkerIndex === -1) {
    throw new Error('Starting marker Published! not found.');
  }
  // Find the end of the JSON data using the "> NX" marker.
  const endMarker = ' >  NX   Successfully ran target ';
  const endMarkerIndex = stdout.indexOf(endMarker, startMarkerIndex);
  if (endMarkerIndex === -1) {
    throw new Error('ending marker > NX Successfully not found.');
  }

  // Extract the substring that contains the JSON data.
  const jsonString = stdout
    .substring(startMarkerIndex + 'Published!'.length, endMarkerIndex)
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .replace(/\t/g, '')
    .trim();

  try {
    const json = JSON.parse(jsonString);
    return json;
  } catch (error) {
    console.error('Failed to parse JSON', error);
  }

  return null;
}

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

// Run the test
const jsonData = extractValidJson(testOutput);
console.log('Extracted JSON Data:', JSON.stringify(jsonData, null, 2));

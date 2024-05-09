function extractValidJson(output) {
  // Use a regex that attempts to capture the JSON structure more accurately
  const regex = /(\[.*\]|\{.*\})/s;
  const match = output.match(regex);

  if (!match) {
    console.error('No JSON-like string found in the output');
    return null;
  }

  // Replace unescaped special characters
  let jsonString = match[0];
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
      ✔ Published!
      [
          {
            "id": "17e43fe9-f0ce-4205-b762-ed996f1a114a",
            "createdAt": "2024-05-09T05:16:00.903Z",
            "group": "81fcf871-ee64-411d-8b95-16eeb32fdbc5",
            "branch": "main",
            "message": "chore: disable forwarding console logs to DD for web-vite [ELU-1288] (#752)- Do not forward console logs to DD. This essentially duplicates logs in\nDD",
            "runtimeVersion": "0.0.6",
            "platform": "android",
            "manifestPermalink": "https://u.expo.dev/update/17e43fe9-f0ce-4205-b762-ed996f1a114a",
            "isRollBackToEmbedded": false,
            "gitCommitHash": "770c60f44402f7b2bee436ecf959babdb22816f3"
          },
          {
            "id": "bc9af806-1d86-4951-9451-fb73604ea173",
            "createdAt": "2024-05-09T05:16:00.903Z",
            "group": "81fcf871-ee64-411d-8b95-16eeb32fdbc5",
            "branch": "main",
            "message": "chore: disable forwarding console logs to DD for web-vite [ELU-1288] (#752)- Do not forward console logs to DD. This essentially duplicates logs in\nDD",
            "runtimeVersion": "0.0.6",
            "platform": "ios",
            "manifestPermalink": "https://u.expo.dev/update/bc9af806-1d86-4951-9451-fb73604ea173",
            "isRollBackToEmbedded": false,
            "gitCommitHash": "770c60f44402f7b2bee436ecf959babdb22816f3"
          }
        ]
        some more text
  `;

// Run the test
const jsonData = extractValidJson(testOutput1);
console.log('Extracted JSON Data:', JSON.stringify(jsonData, null, 2));

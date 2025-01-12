# Chat application with DialogFlow Essentials

This project is a chat application, where the responses that the user gets are from AI. <br>
The application uses Node.js and Express.js. For the user interface, the files in the public folder are used. <br> <br>

In order to use this API is required a Google Cloud project where the DialogFlow API should be enabled. <br>
Also in IAM & Admin field at Service Account, a new service account should be created where the role should be set to Dialogflow API Admin. After creating it on keys, select JSON and the file with the credentials should be downloaded. This file is loaded on the index.js and set to process.env.GOOGLE_APPLICATION_CREDENTIALS. <br>

## Working example

![Image of the application][/images/workingExample]

The application works with learned intents, where the bot is learned how to response to specific messages.

const dialogflow = require('@google-cloud/dialogflow');
require("dotenv").config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const PROJECT_ID = CREDENTIALS.project_id;

async function generateBotResponse(languageCode, queryText, sessionId) {
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(PROJECT_ID, sessionId);

    //Making request to the API
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: queryText,                //User message
                languageCode: languageCode      //Language code "en"
            }
        },
    };

    try {
        //Getting bot response
        const [response] = await sessionClient.detectIntent(request);
        //Abstracting the response message
        const botResponse = response.queryResult.fulfillmentText;
        return botResponse;
    } catch (error) {
        console.error('Dialogflow API Error:', error);
        return "Error message!";
    }
}

module.exports = { generateBotResponse };
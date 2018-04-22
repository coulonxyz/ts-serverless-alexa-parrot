import {AlexaResponse} from "../model/alexa-reponse.model";

export function normalizeAlexaReponse(alexaResponse: AlexaResponse) {

    let formattedResponse : any = {
        version: alexaResponse.version,
        response: {
            shouldEndSession: alexaResponse.shouldEndSession,
        }
    };

    if (alexaResponse.outputSpeech) {
        formattedResponse.response.outputSpeech = {
            "type": "PlainText",
            "text": alexaResponse.outputSpeech,
            "ssml": "<speak>" + alexaResponse.outputSpeech + "</speak>"
        };
    }

    if (alexaResponse.repromptSpeech) {
        formattedResponse.response.repromptSpeech = {
            "type": "PlainText",
            "text": alexaResponse.repromptSpeech,
            "ssml": "<speak>" + alexaResponse.repromptSpeech + "</speak>"
        };
    }

    console.log("NORMALIZED: " + formattedResponse);
    return JSON.stringify(formattedResponse);
}

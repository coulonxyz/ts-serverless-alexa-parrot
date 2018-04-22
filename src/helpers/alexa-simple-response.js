"use strict";
exports.__esModule = true;
function dumpSingleReponse(text) {
    return {
        "version": "1.0",
        "response": {
            "shouldEndSession": false,
            "outputSpeech": {
                "type": "PlainText",
                "text": text,
                "ssml": "<speak>" + text + "</speak>"
            },
            "reprompt": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": "May I help you with anything else ?",
                    "ssml": "<speak>May I help you with anything else ?</speak>"
                }
            }
        }
    };
}
exports.dumpSingleReponse = dumpSingleReponse;
//# sourceMappingURL=alexa-simple-response.js.map
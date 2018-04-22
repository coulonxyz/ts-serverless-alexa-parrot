"use strict";
exports.__esModule = true;
var data_request_helper_1 = require("./src/helper/data-request.helper");
var alexa_reponse_model_1 = require("./src/model/alexa-reponse.model");
var alexa_reponse_normalizer_1 = require("./src/normalizer/alexa-reponse.normalizer");
exports.alexa = function (event, context, cb) {
    var data = JSON.parse(event.body);
    console.log("DATA IN: " + JSON.stringify(data));
    var response;
    // message: data.request.intent.slots.any.value,
    try {
        var alexaResponse = void 0;
        switch (data.request.type) {
            case "LaunchRequest":
                alexaResponse = new alexa_reponse_model_1.AlexaResponse(false, "Hello There.");
                break;
            case "IntentRequest":
                alexaResponse = new alexa_reponse_model_1.AlexaResponse(false, "You said: " + data_request_helper_1.getSlotAnyValueFromIntentRequest(data));
                break;
            default:
                alexaResponse = new alexa_reponse_model_1.AlexaResponse(true, "Something went wrong.");
        }
        console.log(JSON.stringify(alexaResponse));
        response = {
            statusCode: 200,
            headers: {},
            body: alexa_reponse_normalizer_1.normalizeAlexaReponse(alexaResponse),
            isBase64Encoded: false
        };
    }
    catch (error) {
        console.log("ERROR: " + error.message);
        response = {
            statusCode: 500,
            body: error.message
        };
    }
    console.log("DATA IN: " + response);
    cb(null, response);
};
//# sourceMappingURL=handler.js.map
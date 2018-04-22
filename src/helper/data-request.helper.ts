

export function getSlotAnyValueFromIntentRequest(data)
{
    try {
    return data.request.intent.slots.any.value;
    } catch (error) {
        console.log("Nothing was found in slots.any.value for this intent");
        return null;
    }
}
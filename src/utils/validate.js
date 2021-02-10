
function messageEmptyValue(nameKey) {
    var text = nameKey + " Is Required"
    return text
}

function messageLengthValue(nameKey, length) {
    var text = nameKey + " must be more then " + length + " character"
    return text
}

function messageEmailValue() {
    var text = "Invalid Email Format"
    return text
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function ValidateObjectDataMessage(objectData) {
    var validation = {
        message: {
            name: "",
            email: "",
            subject: "",
            text: ""
        },
        isAllFilled: true
    }

    if (objectData.name === "") {
        validation.message.name = messageEmptyValue("Name")
    } else if (objectData.name.length < 5) {
        validation.message.name = messageLengthValue("Name", "5")
    } else {
        validation.message.name = ""
    }

    if (objectData.email === "") {
        validation.message.email = messageEmptyValue("Email")
    } else if (!validateEmail(objectData.email)) {
        validation.message.email = messageEmailValue()
    } else {
        validation.message.email = ""
    }

    if (objectData.subject === "") {
        validation.message.subject = messageEmptyValue("Subject")
    } else if (objectData.subject.length < 10) {
        validation.message.subject = messageLengthValue("Subject", "10")
    } else {
        validation.message.subject = ""
    }

    if (objectData.text === "") {
        validation.message.text = messageEmptyValue("Message")
    } else if (objectData.text.length < 25) {
        validation.message.text = messageLengthValue("Message", "25")
    } else {
        validation.message.text = ""
    }

    Object.values(validation.message).some((value) => {
        if (value !== "") {
            validation.isAllFilled = false
        }
    })
    return validation
}
function loginUser(request) {

    if (!request.body) {
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "error": "Missing email or username"
            }
        }
    };

    const payload = JSON.parse(request.body);

    const isRequestPayloadValid = (requestBody) => {
        const isLengthMatching = Object.keys(requestBody).length === 2;
        const areKeysMatching = requestBody.hasOwnProperty("email") && requestBody.hasOwnProperty("password");
        return isLengthMatching && areKeysMatching;
    }

    function getErrorMessage(requestBody) {
        if (!requestBody.hasOwnProperty("email")) {
            return {
                "error": "Missing email or username"
            }
        }
        else if (!requestBody.hasOwnProperty("password")) {
            return {
                "error": "Missing password"
            }
        } else {
            return {
                "error": "Missing email or username"
            }
        }
    }

    function randomAlphaNumeric(length) {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = length; i > 0; --i) {
            result = result + chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    };

    if (isRequestPayloadValid(payload)) {
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                token: randomAlphaNumeric(17)
            }
        }
    } else {
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json"
            },
            body: getErrorMessage(payload)
        };
    }

}
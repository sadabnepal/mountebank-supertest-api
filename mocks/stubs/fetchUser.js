function fetchUser(request) {
    const requestPath = request.path;
    const userId = requestPath.split('/').pop();

    const fs = require('fs');
    const filePath = process.cwd() + `/mocks/response/users/${userId}.json`;

    let data, responseCode;

    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath, { encoding: 'utf8' });
        responseCode = 200;
    } else {
        responseCode = 404;
    }

    return {
        statusCode: responseCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    };
}
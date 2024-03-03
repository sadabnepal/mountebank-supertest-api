function fetchUser(request) {

    const requestPath = request.path;
    const userId = requestPath.split("/").pop();

    const fs = require('fs');
    const data = fs.readFileSync(process.cwd() + `/mocks/response/${userId}.json`, { encoding: "utf8" });

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    };
}
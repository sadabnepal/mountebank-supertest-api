function fetchPage(request) {

    const pageNumber = request.query.page;

    const fs = require('fs');
    const filePath = process.cwd() + `/mocks/response/pages/${pageNumber}.json`;

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });

        const response = {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": data
        };
        return response;
    }
    return null;
}
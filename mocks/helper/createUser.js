function createUser(request) {
    const body = request.body;

    const createPayload = {
        id: String(Math.floor(Math.random() * 1000)),
        createdAt: new Date()
    };

    return {
        statusCode: 201,
        headers: {
            "Content-Type": "application/json"
        },
        body: { ...JSON.parse(body), ...createPayload }
    }
}
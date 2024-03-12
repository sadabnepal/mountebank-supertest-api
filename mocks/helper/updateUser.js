function updateUser(request) {
    const updatePayload = {
        updatedAt: new Date()
    };

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: { ...JSON.parse(request.body), ...updatePayload }
    }
}
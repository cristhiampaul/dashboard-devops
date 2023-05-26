function handler(event) {
    console.log("Job Stared" )

    return {
        body: JSON.stringify({message: 'SUCCESS'}),
        statusCode: 201,
    };
}
module.exports = {handler};
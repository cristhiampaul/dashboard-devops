function handler(event) {
    console.log("Job Stared" )

    return {
        body: JSON.stringify({message: 'SUCCESS2'}),
        statusCode: 200,
    };
}
module.exports = {handler};
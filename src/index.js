function handler(event) {
    console.log("Job Stared" )

    return {
        body: JSON.stringify({message: 'SUCCESS'}11),
        statusCode: 200,
    };
}
module.exports = {handler};
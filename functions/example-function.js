exports.handler = async function(event, context) {

    console.log('NODE_ENV: ' + process.env.NODE_ENV)

    try {
        return {
            statusCode: 200,
            body: 'woop'
        }
    }

    catch (error) {
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}

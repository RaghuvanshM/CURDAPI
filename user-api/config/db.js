const mongooes = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connectionDb = async () => {
    try {
        await mongooes.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log('MongoDB connected');
        console.log(error)
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);  // Exit the process if the connection fails
    }
}
module.exports = connectionDb
const mongoose = require('mongoose');
const { URI } = process.env;

mongoose.connect(URI || 'mongodb://localhost/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.once('open', () => console.log('connected to mongoDB')
)

mongoose.connection.on('error', (error) => {
    console.log(err);
    process.exit(0);
})

module.exports = mongoose;

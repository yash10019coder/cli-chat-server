const mongoose = require('mongoose');

mongoose.connect(process.env.mongo, { useNewUrlParser: true }).then(() => {
    console.log('Connected to database');
}
).catch(err => {
    console.log('Error connecting to database', err);
});

module.exports = mongoose;
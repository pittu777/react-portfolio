const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define Schema and Model
const aboutSchema = new mongoose.Schema({
    title: String,
    content: String
});

const About = mongoose.model('About', aboutSchema);

// Function to fetch about data
async function getAboutData() {
    try {
        const data = await About.findOne({ title: 'About Me' });
        return data;
    } catch (error) {
        throw new Error('Error fetching about data');
    }
}

module.exports = {
    getAboutData
};

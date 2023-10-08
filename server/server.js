
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

//Schema 
const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submissionTime: Date,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;

app.post('/api/submit-form', async (req, res) => {
  console.log('Received a POST request:');
  const { name, email, message, submissionTime } = req.body;

  const formData = new FormData({
    name,
    email,
    message,
    submissionTime,
  });

  try {
    await formData.save();
    res.status(200).json({ success: true, message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, message: 'Failed to save form data' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

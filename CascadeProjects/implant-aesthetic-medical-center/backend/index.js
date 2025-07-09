const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for appointments (for demonstration purposes)
let appointments = [];

// API Endpoint to receive appointment data
app.post('/api/appointments', (req, res) => {
  const appointment = req.body;
  console.log('Received appointment request:', appointment);
  
  // Add to our in-memory list
  appointments.push(appointment);
  
  // Send a success response
  res.status(201).json({
    message: 'Appointment booked successfully!',
    appointment: appointment
  });
});

// API Endpoint to get all appointments (for verification)
app.get('/api/appointments', (req, res) => {
  res.status(200).json(appointments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

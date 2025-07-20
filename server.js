const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Simulated live ROI API
app.get('/api/roi', (req, res) => {
  const roiData = Array.from({ length: 7 }, () =>
    parseFloat((Math.random() * 10 - 5).toFixed(2)) // -5% to +5%
  );
  res.json({ roiData });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



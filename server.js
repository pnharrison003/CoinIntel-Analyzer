const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

function generateMockROI() {
  const base = 2 + Math.random();
  return Array.from({ length: 7 }, (_, i) =>
    parseFloat((base + i * 0.4 + Math.random()).toFixed(2))
  );
}

app.get('/api/roi', (req, res) => {
  const roiData = generateMockROI();
  res.json({ roiData });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

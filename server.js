
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

function generateMockROI() {
  const base = 2 + Math.random();
 return Array.from({ length: 7 }, (_, i) =>
    parseFloat((base + i * 0.4 + Math.random()).toFixed(2))
  );
  


}

app.get('/api/roi', (req, res) => {
  res.json({ roiData: generateMockROI() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

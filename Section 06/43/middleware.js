const fs = require('node:fs');
const path = require('node:path');

const userPathDetails = (req, res, next) => {
const details = `\nDate: ${new Date().toISOString()} | Path: ${req.path} | Method: ${req.method}`;

  try {
    fs.appendFileSync('Detials.txt', details, 'utf-8');
  } catch (err) {
    console.error('Error writing to log file:', err);
  }

  next();
};

module.exports = userPathDetails;

const xlsx = require('xlsx');
const fs = require('fs');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

try {
  const workbook = xlsx.readFile(inputFile);
  let text = '';
  
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    data.forEach(row => {
      text += row.join('\t') + '\n';
    });
  });

  fs.writeFileSync(outputFile, text);
  console.log(`Success: Extracted to ${outputFile}`);
} catch (err) {
  console.error("Error reading file:", err);
}

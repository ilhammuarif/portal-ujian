const mammoth = require('mammoth');
const fs = require('fs');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

mammoth.extractRawText({path: inputFile})
  .then(function(result){
      const text = result.value;
      fs.writeFileSync(outputFile, text);
      console.log(`Success: Extracted to ${outputFile}`);
  })
  .catch(function(error) {
      console.error(error);
  });

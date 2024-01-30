const spawn = require('child_process').spawn; 
  
// Initialise the data 
const data = { 
  query: "fading wind feint"
} 
  
// We need to stringify the data as  
// python cannot directly read JSON 
// as command line argument. 
let stringifiedData = JSON.stringify(data); 
  
// Call the python process and pass the 
// data as command line argument. 
const py = spawn('python3', ['search.py', stringifiedData]); 
  
resultString = ''; 
  
// As the stdout data stream is chunked, 
// we need to concat all the chunks. 
py.stdout.on('data', function (stdData) { 
  resultString += stdData.toString(); 
}); 
  
py.stdout.on('end', async function () { 
  
  // Parse the string as JSON when stdout 
  // data stream ends 
  console.log('JSON:',resultString)
  let resultData = await JSON.parse(resultString); 
  
  let sum = JSON.stringify(JSON.parse(resultData)[0]['link']); 
  console.log(`Sum of array from Python process = ${sum}`); 
});
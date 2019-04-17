//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png');
// color function having green modifier
  image.color([{apply:'green', params: [73]}])
  .write('green1.png');
} 

main();
  console.log("Image Processing Completed");
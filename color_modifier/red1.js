//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png');
// color function having red modifier
  image.color([{apply:'red', params: [73]}])
  .write('red1.png');
} 

main();
  console.log("Image Processing Completed");
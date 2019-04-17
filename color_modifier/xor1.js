//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// color function having xor modifier
  image.color([{apply:'xor', params: ['green']}])
  .write('xor1.png');
} 

main();
  console.log("Image Processing Completed");
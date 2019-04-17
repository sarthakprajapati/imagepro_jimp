//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// color function having hue modifier
  image.color([{apply:'mix', params: ['blue',60]}])
  .write('mix1.png');
} 

main();
  console.log("Image Processing Completed");
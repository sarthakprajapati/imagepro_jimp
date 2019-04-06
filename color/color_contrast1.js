//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// contrast function
  image.contrast(.4)
  .write('contrast1.png');
}

main();
  console.log("Image Processing Completed");

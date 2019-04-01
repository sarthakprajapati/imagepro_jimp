//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
//scaleToFit Function having width and height
  image.scaleToFit(300,300)
  .write('scaleToFit1.png');
}

main();
  console.log("Image Processing Completed");

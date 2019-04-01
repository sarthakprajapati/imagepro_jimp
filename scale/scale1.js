//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
//scale Function having scaling factor as 0.2
  image.scale(.2)
  .write('scale1.png');
}

main();
  console.log("Image Processing Completed");

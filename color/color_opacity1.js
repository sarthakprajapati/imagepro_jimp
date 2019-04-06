//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// opacity function
  image.opacity(.3)
  .write('opacity1.png');
}

main();
  console.log("Image Processing Completed");

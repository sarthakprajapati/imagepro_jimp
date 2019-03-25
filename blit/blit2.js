//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image1 = await Jimp.read('../gfg.png');
  const image2 = await Jimp.read('../gfg1.png');

  //call to blit function along with optional parameters
  image1.blit(image2, 20, 40, 130, 30, 440, 80)
  //write image
  .write('blit2.png');
  console.log("Image Processing Completed");
}
main();
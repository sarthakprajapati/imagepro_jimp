//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image_status= await Jimp.read('../../gfg.png');
// crop function having crop co-ordinates
// along with height and width
  image.hasAlpha();
  console.log(image_status);
}

main();
  console.log("Image Processing Completed");

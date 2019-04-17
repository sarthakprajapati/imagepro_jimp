//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// crop function having crop co-ordinates
// along with height and width
  image.crop(10,10,150,120) 
  .write('crop1.png');
}

main();
  console.log("Image Processing Completed");

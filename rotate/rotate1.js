//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
//rotate Function having rotation as 55
  image.rotate(55)
  .write('rotate1.png');
}

main();
  console.log("Image Processing Completed");

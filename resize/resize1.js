//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
//rotate Function having rotation as 55
  image.resize(323,421)
  .write('resize1.png');
}

main();
  console.log("Image Processing Completed");

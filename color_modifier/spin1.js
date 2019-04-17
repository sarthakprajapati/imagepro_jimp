//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// color function having spin modifier
  image.color([{apply:'spin', params: [60]}])
  .write('spin1.png');
} 

main();
  console.log("Image Processing Completed");
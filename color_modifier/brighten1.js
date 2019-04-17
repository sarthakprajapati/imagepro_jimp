//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// color function having brighten modifier
  image.color([{apply:'brighten', params: [60]}])
  .write('brighten1.png');
} 

main();
  console.log("Image Processing Completed");
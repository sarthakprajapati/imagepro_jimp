//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// flip function also known as mirror function 
  image.flip(true,false) 
  .write('flip1.png');
}

main();
  console.log("Image Processing Completed");

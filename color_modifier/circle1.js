//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg.png');
// color function having hue modifier
  image.circle({ radius: 50, x: 25, y: 25 })
  .write('circle1.png');
} 

main();
  console.log("Image Processing Completed");
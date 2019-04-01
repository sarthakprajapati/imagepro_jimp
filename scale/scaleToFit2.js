//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//scaleToFit Function having width, height, mode and callback function
  image.scaleToFit(1000,1700,Jimp.RESIZE_BEZIER,function(err){
    if (err) throw err;
  })
  .write('scaleToFit2.png');
}

main();
  console.log("Image Processing Completed");

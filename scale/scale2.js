//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//scale Function having scaling-factor, mode and callback function
  image.scale(3,Jimp.RESIZE_BEZIER,function(err){
    if (err) throw err;
  })
  .write('scale2.png');
}

main();
  console.log("Image Processing Completed");

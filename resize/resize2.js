//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//rotate Function having rotation angle as 99, mode and callback function
  image.resize(1024,768,Jimp.RESIZE_BEZIER,function(err){
    if (err) throw err;
  })
  .write('resize2.png');
}

main();
  console.log("Image Processing Completed");

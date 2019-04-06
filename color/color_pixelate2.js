//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//pixelate function using callback function
  image.pixelate(5,40,50,190,200,function(err){
    if (err) throw err;
  })
  .write('pixelate2.png');
}

main();
  console.log("Image Processing Completed");

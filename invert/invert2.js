//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//invert function using callback function
  image.invert(function(err){
    if (err) throw err;
  })
  .write('invert2.png');
}

main();
  console.log("Image Processing Completed");

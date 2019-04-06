//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//opacity function using callback function
  image.opacity(.5,function(err){
    if (err) throw err;
  })
  .write('opacity2.png');
}

main();
  console.log("Image Processing Completed");

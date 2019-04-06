//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//gaussian function using callback function
  image.gaussian(10,function(err){
    if (err) throw err;
  })
  .write('gaussian2.png');
}

main();
  console.log("Image Processing Completed");

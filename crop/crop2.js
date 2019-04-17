//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
//crop function using callback function
  image.crop(20,20,100,100,function(err){
    if (err) throw err;
  })
  .write('crop2.png');
}

main();
  console.log("Image Processing Completed");

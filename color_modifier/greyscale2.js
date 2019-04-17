//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
// color function having greyscale modifier
  image.color([{apply:'greyscale', params: [50]}],function(err){
    if (err) throw err;
  })
  .write('greyscale2.png');
}

main();
  console.log("Image Processing Completed");
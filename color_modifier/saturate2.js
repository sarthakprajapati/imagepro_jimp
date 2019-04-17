//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('../gfg1.png');
// color function having saturate modifier
  image.color([{apply:'saturate', params: [50]}],function(err){
    if (err) throw err;
  })
  .write('saturate2.png');
}

main();
  console.log("Image Processing Completed");
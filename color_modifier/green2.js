//npm install --save jimp
//import jimp library to the environment
var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image = await Jimp.read('https://media.geeksforgeeks.org/wp-content/uploads/20190328185333/gfg111.png');
// color function having green modifier
  image.color([{apply:'green', params: ['50']}],function(err){
    if (err) throw err;
  })
  .write('green.png');
}

main();
  console.log("Image Processing Completed");
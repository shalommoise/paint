
// const nodeHtmlToImage = require('node-html-to-image');
// let background = "white";

// // // ${document.getElementsByClassName("canvas")[0]}

//   nodeHtmlToImage({
//   output: './image.png',
//   html: `<html><script><script><body> <div class="canvas" style="background: ${background};"><div class='dot'> </div></div> </body></html>`
// })
//   .then(() => console.log('The image was created successfully!'))

const doIt = ()=>{
  console.log(document.getElementById("hidden").innerHTML, document.getElementById("moreHidden").innerHTML, document.getElementById("hidden").background )
}
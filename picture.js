const save =()=>{
 const menu =  document.getElementsByClassName("menu")[0];
  const inst = document.getElementById("inst");
  menu.remove();
  inst.outerHTML = '<p id="inst" style="display: block;" >Nice Picture! <button onclick="reload()"> Want to make another one? </button></p>' 
  
 inst.style.margin = '10px';
   inst.style.display = "block";
     state.activated  = false;
for (let i = 1; i < state.size;i++){
  const num = document.getElementById(`a${i}`);
  if(num) num.removeAttribute("onmouseover");
  const dot = document.getElementsByClassName("dot")[i-1];
}
const canvas = document.getElementsByClassName("canvas")[0];
canvas.removeAttribute("onclick");

let webPage = `<html lang="en"><head>  <meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/> <style>
    body {

  max-width: 900px;
  display: flex;
  flex-direction: row;
}
.canvas {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
  border: solid;
}
.dot {
  height: 10px;
  width: 10px;
  padding: 0px;
  margin: 0%;
  background-color: none;
}
  </style><title>${state.paintName}</title></head><body><main class="canvas" style="background: ${state.background}">`; 
const end = '</main></body></html>';
const lookUp = {};
 for (let i = 1; i <= state.size; i++){
  lookUp[`a${i}`] = "background: none";
}
for (item in drawings) {
  lookUp[item] = `background: ${drawings[item]}`
}
for (item in lookUp) {
  webPage = webPage + `<div class="dot" id=${item} style="${lookUp[item]}"></div>`
}
   
  const element = document.createElement('a');

  element.setAttribute('href', 'data:text/html;charset=utf-8,'+  webPage + end);
  
  element.setAttribute('download', `${state.paintName}.html`);
    element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
 
  }
   
 
 const namePaint = ()=>{
   const valueName =  document.getElementById("paintingName");

     state.paintName  = valueName ? valueName.value : state.paintName  ;
 }

 const reload =()=>{location.reload();}
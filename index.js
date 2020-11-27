let state ={
  activated: false,
  size: 3601,
  copy: {},
  background: '',
  copyBackground: 'none',
  rand: false
}
 
const pickColor=(color)=>{
state.rand = false;
 state.activated = true;
  document.getElementsByClassName("color")[0].style.background = color;
  document.getElementsByClassName("color")[0].innerText ="";
 document.getElementsByClassName("color")[0].style.display = 'block';
 
}


const changeSize =(size, dotSize,dotSpace) =>{
  document.body.style.width = size;
  const canvas = document.getElementsByClassName("canvas")[0];
    const dot = document.getElementsByClassName("dot");
    for (let i = 0; i < dot.length;i++) {
      
   dot[i].style.height =dotSize;
  dot[i].style.width =dotSize;
    }
  canvas.style.height =size;
  canvas.style.width =size;
  count = dotSpace;
  state.size = dotSpace;
}



const pickBackground =(color)=>{
  
  document.getElementsByClassName("color")[1].style.background = color;

const canvas = document.getElementsByClassName("canvas")[0];

canvas.style.background = color;
state.background = color;
}
const drawings = {}
turnRand =(boolean)=>{
state.rand = boolean;
}
const changeDot = (id)=>{

let color =  document.getElementsByClassName("color")[0].style.background;
if(state.activated) {
if(state.rand){ 
    let arr =  [Math.round(Math.random()*255), Math.round(Math.random()*255),Math.round(Math.random()*255) ];
     color = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
}
  document.getElementById(id).style.background = color ? color: "none";
drawings[id] = document.getElementById(id).style.background;
}
}

const changeBigDot =(id)=>{
  
const number = Number(id.replace("a", ""))
const arr = [number, number +1, number -1]
  let color =  document.getElementsByClassName("color")[0].style.background;
  if(state.activated) {
  if(state.rand){ 
    let arr =  [Math.round(Math.random()*255), Math.round(Math.random()*255),Math.round(Math.random()*255) ];
     color = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
}
  for (let i =0; i < arr.length; i++) {
  document.getElementById(`a${arr[i]}`).style.background = color ? color: "none";
   drawings[`a${arr[i]}`] = document.getElementById(`a${arr[i]}`).style.background;
  }
  }
}

const changeLargeDot=(id)=>{
  const number = Number(id.replace("a", ""))
const arr = [number, number +1, number -1, number+2, number -2 ] 
  let color =  document.getElementsByClassName("color")[0].style.background;
  if(state.activated) {
  if(state.rand){ 
    let arr =  [Math.round(Math.random()*255), Math.round(Math.random()*255),Math.round(Math.random()*255) ];
     color = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
}
  for (let i =0; i < arr.length; i++) {
  document.getElementById(`a${arr[i]}`).style.background = color ? color: "none";
   drawings[`a${arr[i]}`] = document.getElementById(`a${arr[i]}`).style.background;
  }
}
}

const rubber=()=>{
  state.rand = false;
state.activated = true;

    document.getElementsByClassName("color")[0].style.background = 'none';
     document.getElementsByClassName("color")[0].style.display = 'none';
  document.getElementsByClassName("color")[0].innerText ="";
}


const create = ()=>{

let count = 3600;

  
while(count >0) {
    const canvas = document.getElementsByClassName("canvas")[0];
  const node = document.createElement("div");
  node.className ="dot";
node.id=`a${count}`;

node.setAttribute("onmouseover", `changeDot('${node.id}')`);
canvas.append(node);
count--

}
}

const acitvate =()=>{
 state.activated = !state.activated;
 const inst = document.getElementById("inst");
 inst.style.display = state.activated && "none";

}

const invert =()=>{
  state.copy ={...drawings};
 
  const backgroundColor =document.getElementById("backgroundcolor").style.background;
   state.copyBackground = backgroundColor;
  const penColor = document.getElementById("color").style.background;

 for (const item in drawings){

  document.getElementById(item).style.background = backgroundColor; 
}


document.getElementsByClassName("canvas")[0].style.background = penColor;
document.getElementById("backgroundcolor").style.background = penColor;
document.getElementById("color").style.background = backgroundColor;
document.getElementById("undo").style.display = 'inline';
state.background = penColor;
}


const restart = ()=>{
   document.getElementById("inst").style.display = "block"; 
  state.activated = false;
  document.getElementsByClassName("canvas")[0].style.background = "none";
  state.background = "none";
 const arr =  document.getElementsByClassName("dot")
for (let i =0; i < arr.length;i++){
  arr[i].style.background = "none";
}

}
let changeCount = 0;
const changeColor = (color)=>{
  state.activated = true;
  if (color === "random"){
      let arr =  [Math.round(Math.random()*255), Math.round(Math.random()*255),Math.round(Math.random()*255) ];
     color = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
  }
  let original = document.getElementById("original");
  let changed = document.getElementById("changed");

changeCount % 2 === 0 ? original.style.background = color: changed.style.background = color;
changeCount++;
}
const showBar =(id)=>{
  const section = document.getElementById(id);
  section.style.display === "block" ?  section.style.display = "none" :  section.style.display = "block" 

}
const activateChange =()=>{
  let original = document.getElementById("original").style.background;
  let changed = document.getElementById("changed").style.background;
  let warning = document.getElementById("changeWarning");
  if (!original || !changed) {
  
   warning.innerHTML = "<i>Please select colors</i>";
  } else {
    warning.innerHTML = "";
    for (const item in drawings){
      if(drawings[item] === original){ 
       drawings[item] = changed;
        document.getElementById(item).style.background =  changed
    };
    }
    document.getElementById("original").style.background = "none";
    document.getElementById("changed").style.background = "none";
  }
} 


const changePenSize =(size)=>{
  state.activated = true;
   const dots = document.getElementsByClassName("dot");
 for (let i = 0; i < dots.length; i++){
   if( size === "small") dots[i].setAttribute("onmouseover", "changeDot(id)");
  if( size === "medium") dots[i].setAttribute("onmouseover", "changeBigDot(id)");
  if( size === "large") dots[i].setAttribute("onmouseover", "changeLargeDot(id)");
 }

}

const undo =()=>{

for (const item in state.copy){
  document.getElementById(item).style.background = state.copy[item];

}
document.getElementsByClassName("canvas")[0].style.background = state.copyBackground;
  document.getElementById("undo").style.display = 'none';
}

const randomise =()=>{


 const dot =  document.getElementsByClassName("dot")
for (let i =0; i < dot.length;i++){
  let arr =  [Math.round(Math.random()*255), Math.round(Math.random()*255),Math.round(Math.random()*255) ]
  dot[i].style.background = `rgb(${arr[0]},${arr[1]},${arr[2]})`
}
}
const randomColor =(x)=>{
  let arr =  [Math.round(Math.random()*255), Math.round(Math.random()*255),Math.round(Math.random()*255) ];
    const color = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
if(x === "pen"){
   
  document.getElementsByClassName("color")[0].style.background = color
  document.getElementsByClassName("color")[0].innerText ="";
 document.getElementsByClassName("color")[0].style.display = 'block';
} else{

 document.getElementsByClassName("color")[1].style.background = color;
  const canvas = document.getElementsByClassName("canvas")[0];

canvas.style.background = color;
state.background = color;
}

}


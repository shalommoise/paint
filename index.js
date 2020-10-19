const pickColor=(color)=>{

  document.getElementsByClassName("color")[0].style.background = color;
  document.getElementsByClassName("color")[0].innerText ="";

 
}
 let count = 3601;
const changeSize =(size, dotSize,dotSpace) =>{
  const canvas = document.getElementsByClassName("canvas")[0];
    const dot = document.getElementsByClassName("dot");
    for (let i = 0; i < dot.length;i++) {
      
   dot[i].style.height =dotSize;
  dot[i].style.width =dotSize;
    }
  canvas.style.height =size;
  canvas.style.width =size;
  count = dotSpace;
}
const pickBackground =(color)=>{
  
  document.getElementsByClassName("color")[1].style.background = color;

const canvas = document.getElementsByClassName("canvas")[0];

canvas.style.background = color;

}
const drawings = {}

const changeDot = (id)=>{

const color =  document.getElementsByClassName("color")[0].style.background;
  document.getElementById(id).style.background = color ? color: "white";
drawings[id] = document.getElementById(id).style.background;
}


const create = ()=>{

  const canvas = document.getElementsByClassName("canvas")[0];
  const node = document.createElement("div");

  count--
if(count >0) {
  node.className ="dot";
node.id=`a${count}`;

node.setAttribute("onmouseover", `changeDot('${node.id}')`);
canvas.append(node);
create(count);
}

}

const invert =()=>{
  
  const backgroundColor =document.getElementById("backgroundcolor").style.background;
  const penColor = document.getElementById("color").style.background;

 for (const item in drawings){

  document.getElementById(item).style.background = backgroundColor; 
}
document.getElementsByClassName("canvas")[0].style.background = penColor;
document.getElementById("backgroundcolor").style.background = penColor;
document.getElementById("color").style.background = backgroundColor;
}


const restart = ()=>{
  document.getElementsByClassName("canvas")[0].style.background = "white";
 const arr =  document.getElementsByClassName("dot")
for (let i =0; i < arr.length;i++){
  arr[i].style.background = "none";
}

}
let changeCount = 0;
const changeColor = (color, num)=>{
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
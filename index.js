const pickColor=(color)=>{

  document.getElementsByClassName("color")[0].style.background = color;
  document.getElementsByClassName("color")[0].innerText ="";

 
}
 let count = 5401;
const pickBackground =(color, clean)=>{
  
  document.getElementsByClassName("color")[1].style.background = color;
  const dot = document.getElementsByClassName("dot");
for (let i = 0; i < 5400; i++){
  dot[i].style.background = color;
  
}

 for (const item in drawings){
   clean ? delete drawings[item] :
  document.getElementById(item).style.background = drawings[item]; 
}
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
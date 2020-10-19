const pickColor=(color)=>{

  document.getElementsByClassName("color")[0].style.background = color;
  document.getElementsByClassName("color")[0].innerText ="";

 
}
 let count = 5401;
const pickBackground =(color)=>{
  document.getElementsByClassName("color")[1].style.background = color;
  const dot = document.getElementsByClassName("dot");
for (let i = 0; i <= 5401; i++){
  dot[i].style.background = color 
}

}
const changeDot = (id)=>{
  
const color =  document.getElementsByClassName("color")[0].style.background;
  document.getElementById(id).style.background = color ? color: "white";
 
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
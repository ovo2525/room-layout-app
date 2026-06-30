const room = document.getElementById("room");

function createFurniture(name, emoji) {

  const item = document.createElement("div");

  item.className = "furniture";

  item.textContent = emoji + " " + name;

  item.style.left = "80px";
  item.style.top = "80px";

  room.appendChild(item);

  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  item.addEventListener("pointerdown",(e)=>{

    dragging=true;

    offsetX=e.clientX-item.offsetLeft;
    offsetY=e.clientY-item.offsetTop;

    item.setPointerCapture(e.pointerId);

  });

  item.addEventListener("pointermove",(e)=>{

    if(!dragging) return;

    item.style.left=(e.clientX-offsetX)+"px";
    item.style.top=(e.clientY-offsetY)+"px";

  });

  item.addEventListener("pointerup",()=>{

    dragging=false;

  });

}

document.getElementById("addBed").onclick=()=>{

 createFurniture("ベッド","🛏");

}

document.getElementById("addSofa").onclick=()=>{

 createFurniture("ソファ","🛋");

}

document.getElementById("addTable").onclick=()=>{

 createFurniture("テーブル","🪑");

}

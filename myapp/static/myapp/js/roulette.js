const $c = document.querySelector("#roulette-canvas");
const ctx = $c.getContext(`2d`);
const menuAdd = document.querySelector('#menuAdd');
const product = [];
const colors = [];

const newMake = () => {

      if (product.length === 0) {
        drawEmptyWheel();
        return;
    }
  const [cw, ch] = [$c.width / 2, $c.height / 2];
  const arc = Math.PI / (product.length / 2);  
  for (let i = 0; i < product.length; i++) {
    ctx.beginPath();
    if(colors.length == 0){
      for(var l=0; l<product.length; l++){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        colors.push("rgb(" + r + "," + g + "," + b + ")");
      }
    }
    ctx.fillStyle = colors[i % (colors.length)];
    ctx.moveTo(cw, ch);
    ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
    ctx.fill();
    ctx.closePath();
  }

  ctx.fillStyle = "#fff";
  ctx.font = "10px Pretendard";
  ctx.textAlign = "left";

  for (let i = 0; i < product.length; i++) {
    const angle = (arc * i) + (arc / 2);

    ctx.save();

    ctx.translate(
      cw + Math.cos(angle) * (cw - 50),
      ch + Math.sin(angle) * (ch - 50)
    );

    ctx.rotate(angle + Math.PI / 2);

    product[i].split(" ").forEach((text, j) => {
      ctx.fillText(text, 0, 30 * j);
    });

    ctx.restore();
  }
}

const rotate = () => {
  $c.style.transform = `initial`;
  $c.style.transition = `initial`;
  const alpha = Math.floor(Math.random()*100);

  setTimeout(() => {    
    const ran = Math.floor(Math.random() * product.length);
    const arc = 360 / product.length;
    const rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4) + alpha;
    $c.style.transform = `rotate(-${rotate}deg)`;
    $c.style.transition = `2s`;
    
  }, 1);
};

function drawEmptyWheel() {
  const [cw, ch] = [$c.width / 2, $c.height / 2];

  // 배경 원
  ctx.beginPath();
  ctx.arc(cw, ch, cw, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "#f0f0f0"; // 회색 배경
  ctx.fill();
  ctx.strokeStyle = "#ddd";
  ctx.stroke();

  // 안내 텍스트
  ctx.fillStyle = "#999";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("메뉴를 추가해 주세요", cw, ch);
}

function add(){
  if(menuAdd.value != undefined && menuAdd.value != ""){
    product.push(menuAdd.value);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors.push("rgb(" + r + "," + g + "," + b + ")");
    newMake();
    menuAdd.value="";
  }
  else{
    alert("메뉴를 입력한 후 버튼을 클릭 해 주세요");
  }
}

newMake();
const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d'); //获取canvas上下文,可对它操作

const width = 200, height = 50;
ctx.width = width + 'px';
ctx.height = height + 'px';

canvas.addEventListener('click', function(){
    ctx.clearRect(0,0,width,height)
    drawLine()
    drawText()
})

function drawLine() {
    for(let i=0;i<6;i++){
        let beginX = Math.random() * width;
        let beginY = Math.random() * height;
        let endX = Math.random() * width;
        let endY = Math.random() * height;
        ctx.beginPath();
        ctx.moveTo(beginX, beginY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        ctx.stroke();
    }
}
function drawText() {
    var sourceText = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'o', 'p',
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z']
    //随机选四个不重复的字母
    let result = []
    for(let i=0;i<4;i++){
        const idx = Math.floor(Math.random() * sourceText.length)
        result.push(sourceText[idx])
        //删除已经选中的
        sourceText.splice(idx,1)
    }
    console.log('result', result)
    //画到页面上去
    for(let i=0;i<result.length;i++){
        ctx.font = '40px Helvetica';
        ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        ctx.textBaseLine = 'middle' //top bottom
        let preWidth = width / 4 - 10
        ctx.fillText(result[i], Math.random() * preWidth + i * preWidth, height / 2);
    }
}
drawLine()
drawText()
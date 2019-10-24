const width = 200, height = 50;
class Gcode {
    constructor(el) {
        this.$el = document.getElementById(el)
        this.ctx = this.$el.getContext('2d')
        this.$el.width = width
        this.$el.height = height
        this.drawLine();
        this.drawText();
        let that = this
        this.$el.addEventListener('click', function(){
            that.ctx.clearRect(0,0,width,height)
            that.drawLine()
            that.drawText()
        })
    }
    drawLine() {
        for(let i=0;i<6;i++){
            let beginX = Math.random() * width;
            let beginY = Math.random() * height;
            let endX = Math.random() * width;
            let endY = Math.random() * height;
            this.ctx.beginPath();
            this.ctx.moveTo(beginX, beginY);
            this.ctx.lineTo(endX, endY);
            this.ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            this.ctx.stroke();
        }
    }
    drawText() {
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
            this.ctx.font = '40px Helvetica';
            this.ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            this.ctx.textBaseLine = 'middle' //top bottom
            let preWidth = width / 4 - 10
            this.ctx.fillText(result[i], Math.random() * preWidth + i * preWidth, height / 2);
        }
    }
}
//实例
let obj = new Gcode('screen')
let obj1 = new Gcode('screen1')
let obj2 = new Gcode('screen2')

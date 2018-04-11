//first step -- creating canvas

var canvas=document.querySelector('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight

var ctx=canvas.getContext('2d')
// ctx.fillRect(100,100,200,200)
// ctx.fillRect(320,320,150,250)
// ctx.beginPath()
// ctx.moveTo(200,200)
// ctx.lineTo(800,100)

// ctx.stroke()
// ctx.beginPath()
// ctx.moveTo(300,300)
//ctx.arc(200,200,40,0,3*Math.PI/2)
// ctx.fillStyle='blue'
// ctx.fill()
// ctx.arc(400,400,80,Math.PI/2,3*Math.PI/2)
// ctx.fillStyle='black'
// ctx.fill()
// for(var i=0;i<10;i++)
// {
//     var x=Math.random()*window.innerWidth
//     var y=Math.random()*window.innerHeight
//     ctx.beginPath()
    

// ctx.arc(x,y,40,0,2*Math.PI)
// ctx.stroke();
// }
//third step --
var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
function animate()
{
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    ctx.beginPath()
    ctx.arc(x,y,40,0,2*Math.PI)
    ctx.stroke();
    x=x+2;
    y=y+2;

}
animate()
//drwaing shapes--



console.log(canvas)
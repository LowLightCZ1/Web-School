const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 350, 0, 2 * Math.PI); // kruh
ctx.fillStyle = "#38e"; // zelená
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "#000"
ctx.stroke();

ctx.save();
ctx.translate(canvas.width / 2, canvas.height / 2)
ctx.strokeStyle = "#000";
ctx.lineWidth = 1;
let lenght = 0
for(let part = 32; part > 1; part/=2){
    length += 70
    for (let i = 0; i < part; i++) {
        if (part == 32){
            ctx.strokeStyle = "#bbb"
            ctx.beginPath()
            ctx.moveTo(0, -300)
            ctx.lineTo(0,0)
            ctx.stroke()
        }
        ctx.strokeStyle = "#000"
        ctx.beginPath();
        ctx.moveTo(0, -300);
        ctx.lineTo(0, -350 + lenght);
        ctx.stroke();
        ctx.rotate(Math.PI / (part / 2));

    }
    
}
ctx.restore();








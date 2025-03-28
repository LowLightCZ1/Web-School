// Získání referenci na canvas
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const bichop = document.getElementById("1")

// malování šachvnice
for(let y = 0; y <8; y++) {
    for(let x  = 0; x <8; x++) {
        ctx.beginPath();
        ctx.rect(x*100, y * 100, 100, 100); // obdélník
        ctx.fillStyle = (x + y) % 2 ? "#fff": "#000";
        ctx.fill();
    }
    
}
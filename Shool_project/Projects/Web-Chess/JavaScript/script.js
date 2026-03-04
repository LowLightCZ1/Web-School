// Získání referenci na canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")


// Kreslení tvarů
ctx.beginPath();
ctx.fillStyle = 
ctx.rect(0, 0, 100, 100); // obdélník
ctx.fill();
ctx.stroke()

// ctx.beginPath();
// ctx.arc(300, 200, 100, 0, 2 * Math.PI); // kruh
// ctx.fillStyle = "rgb(50, 250, 100)"; // zelená
// ctx.fill()
// ctx.beginPath();

// ctx.moveTo(400, 50); // začátek čáry
// ctx.lineTo(550, 250); // konec čáry
// ctx.strokeStyle = "rgb(255, 255, 0)"; // žlutá
// ctx.lineWidth = 5; // tlouška čáry
// ctx.stroke()

// ctx.beginPath();
// ctx.font = "42px Arial";
// ctx.textAlign = "center";
// ctx.textBaseline = "middle";
// ctx.fillStyle = "rgb(255, 100, 255)"; // fialová
// ctx.fillText("VOŠ, SPŠ a SOŠ Varnsdorf", 300, 350); // tex

// // Smyčka pro přidávání bodů
// let y = 5; // výška prvního bodu
// let intervalId = setInterval(() => {
//   ctx.beginPath();
//   ctx.arc(580, y, 5, 0, 2 * Math.PI); // kruhový bod
//   ctx.fillStyle = "rgb(255, 0, 0)";
//   ctx.fill();
//   y += 15; // posunutí dolů o 10 pixelů
//   if (y > 590) {
//     // pokud jsme dole, zastavíme smyčku
//     clearInterval(intervalId);
//   }
// }, 1000); // 1 sekunda
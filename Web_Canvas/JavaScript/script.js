// Získání referenci na canvas
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const rows = 10;
const cols = 10;
const size = canvas.width / cols;

let selected = null;


function drawBoard(){
    for(let y = 0; y <rows; y++) {
        for(let x  = 0; x <cols; x++) {
            if(selected && selected.row == y && selected.col == x){
                ctx.fillStyle = "red";
            }
            else{
                ctx.fillStyle = (x + y) % 2 ? "#fff": "#000";
            }
            ctx.beginPath();
            ctx.rect(x*size, y * size, size, size); // obdélník
            ctx.fill();
        }
    }
}

drawBoard();

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const row = Math.floor(y / size);
    const col = Math.floor(x / size);

    // Pokud klikneš znovu na stejné pole, zruší se výběr
    if(selected && selected.row == y && selected.col == x){
        selected = null;
    }else{
        selected = {row, col};
    }

    drawBoard();

});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener( 'click', () => {

    

})
console.log("Hello player!!")
let n = 0
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
btn.onclick = () => {
    n++
    console.log(n)
    btn.innerHTML = n
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    h1.style.color = "rgb("+ r +","+ g +","+ b +")"
}
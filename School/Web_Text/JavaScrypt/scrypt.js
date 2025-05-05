let btn_href = document.getElementsByClassName("btn")
let n = 0
let text = document.getElementById("text")
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('1');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Check scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down 
            header.style.transform = `translateY(${window.scrollY /1}px)`;
        } else {
            // Scrolling up - show header
            header.style.transform = `translateY(${window.scrollY /1}px)`;
        }
        
        lastScrollY = currentScrollY;
    });
});

btn_href.onclick = () => {
    n++
    btn_href.innerHtml(n)
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    text.style.color = "rgb("+ r +","+ g +","+ b +")"
}

window.onscroll = () => {
    const h1 = document.getElementById("1")
    const p = document.getElementById("2")
    h1.style.transform = `translateY(${window.scrollY / 2}px)`;
    p.style.transform = `translateY(${window.scrollY / 5}px)`;
};
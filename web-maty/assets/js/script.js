const slots = document.getElementsByClassName("slot");

console.log(slots.item(1));

function slotBtnFunc(button){
    const clicked = button.classList.contains("clicked");

    if(!clicked){
        button.classList.add("clicked");
        button.textContent = "STOP";
        
    }
    else{
        button.classList.remove("clicked");
        button.textContent = "HRA";
    }
};
/*
Copyright amir javanmir
Released on: June 16, 2024
*/
function createPopup(text){
    let popupEl = document.createElement("div");
    popupEl.className = "custom-popup";

    let popupTextEl = document.createElement('p');
    popupTextEl.textContent = text;

    let closePopup = document.createElement("div");
    closePopup.className = "popup-close-btn";

    closePopup.addEventListener("click",function(){
        popupEl.style.display = "none";
        localStorage.setItem("popupClosed", "true");
    })

    popupEl.style.display = "none";
    popupTextEl.appendChild(closePopup);
    popupEl.appendChild(popupTextEl);
    return popupEl;
}

function showPopup(el,time){
    setTimeout(() => {
        document.body.appendChild(el);
        fadeIn(el,1000)
    }, time);
}

function fadeIn(element,duration){
    element.style.display = "flex";
    element.style.opacity = "0";
    let start = null;
    function step(timestamp){
        if(!start)start = Math.floor(timestamp);
        const progress = Math.floor(timestamp) - start;
        const calc = progress / duration;
        element.style.opacity = calc;
        if(progress < duration){
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}
if (!localStorage.getItem("popupClosed")) {
    let popElement = createPopup("با سلام. این وب سایت در ساعت 12 غیرفعال خواهد شد.");
    showPopup(popElement, 2000);
}
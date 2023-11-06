const container = document.getElementById("content");
const toggleButton = document.getElementById("toggleButton");
let isHidden = true;

toggleButton.addEventListener("click", function () {
    if (isHidden) {
        container.style.display = "block";
        container.style.height = "auto"; 
        const contentHeight = container.clientHeight;
        container.style.height = "0"; 

        container.style.transition = "none";
        container.offsetHeight; 
        container.style.transition = "height 0.5s, opacity 0.5s"; 

        container.style.height = contentHeight + "px";
        container.style.opacity = 1;

        isHidden = false;
    } else {
        container.style.height = "0";
        container.style.opacity = 0;

        isHidden = true;
    }
});
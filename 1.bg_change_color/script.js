var index = 0;
function changeColors() {
    // console.log("hii");
    var colors = ["red", "green", "blue", "pink", "sky", "yellow"];
    var containers = document.querySelectorAll('body');
    
    containers.forEach(container => {
        container.style.background = colors[index++];
    });
    
    if (index > colors.length - 1) {
        index = 0;
    }
}

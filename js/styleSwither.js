const links = document.querySelectorAll(".alternate-style"),
totalLinks = links.length;
function sectActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++){
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled","true");
        }
    }
}
//body color 
const bodySkin = document.querySelector(".body-skin"),
    totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++){
    bodySkin[i].addEventListener("change",function() {
        if (this.value === "dark") {
            Document.body.className ="dark"
            //document.body.className="dark";
        } else {
           document.body.className=""; 
      }
    })
}
document.querySelector(".toggler-style-swither").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const main = document.getElementById("main");
let isNo = 0;

yes.addEventListener("click", () => {
    main.innerHTML = "I knew you would say yes <3";
});

no.addEventListener("click", () => {
    isNo++;

    if (isNo < 3) {
        let currentHeight = parseInt(window.getComputedStyle(yes).height);
        let currentWidth = parseInt(window.getComputedStyle(yes).width);

        yes.style.height = (currentHeight + 20) + "px"; 
        yes.style.width = (currentWidth + 30) + "px";
    } else {
        no.style.display = "none";
        yes.style.position = "absolute"; 
        yes.style.top = "0";
        yes.style.left = "0";
        yes.style.height = "100vh"; 
        yes.style.width = "100vw"; 
        yes.style.fontSize = "40px";
        yes.innerHTML = "YES"; 
    }
});

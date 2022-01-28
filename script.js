/* Hide Navigation List When Option Is Clicked */

const navlist= document.getElementsByClassName("navinteract")

for(let i=0; i < navlist.length; i++){
    navlist[i].addEventListener("click", () => {
        document.getElementById("check").checked = false;})
};

/* Update Year In Footer */

document.getElementById("footeryear").innerHTML = new Date().getFullYear(); 
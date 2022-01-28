const navlist= document.getElementsByClassName("navinteract")

for(let i=0; i < navlist.length; i++){
    navlist[i].addEventListener("click", () => {
        document.getElementById("check").checked = false;})
};
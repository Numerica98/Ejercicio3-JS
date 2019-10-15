window.onload= () =>{
    show();
}

function show(){
    var menuOptions= document.querySelectorAll(".menu .option-menu");
    var currentOption= document.getElementById(menuOptions[0].dataset.open);
    currentOption.classList.remove("hide");

    menuOptions.forEach(option =>{
        option.addEventListener("click",function(){
            currentOption.classList.toggle("hide");
            currentOption= document.getElementById(this.dataset.open);
            currentOption.classList.toggle("hide");
        })
    });
}
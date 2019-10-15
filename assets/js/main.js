window.onload = function () {
    init();
}

function init() {
    var navigateOptions = document.querySelectorAll(".tab-control .item-control");
    var currentDisplay = document.getElementById(navigateOptions[0].dataset.open);
    currentDisplay.classList.remove("hidden");

    navigateOptions.forEach(item => {
        item.addEventListener("click", function () {
            currentDisplay.classList.toggle("hidden");
            currentDisplay = document.getElementById(this.dataset.open);
            currentDisplay.classList.toggle("hidden");
        })
    });
}
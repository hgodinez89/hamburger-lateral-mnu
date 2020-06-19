(function() {
    let btnMenu = document.querySelector(".hamburger");

    btnMenu.addEventListener("click", function() {
        document.querySelector(".main-container").classList.toggle("open");
        btnMenu.classList.toggle("is-active");
    })
})()
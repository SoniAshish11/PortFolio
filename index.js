document.addEventListener("DOMContentLoaded", function() {
    const navList = document.getElementById("navList");
    const toggleButton = document.getElementById("toggleButton");
    const head = document.getElementsByClassName("head")

    toggleButton.addEventListener("click", function() {
        navList.classList.toggle("show");

    });
});
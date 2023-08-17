document.addEventListener("DOMContentLoaded", function() {
    // toggle the navbar
    const navList = document.getElementById("navList");
    const toggleButton = document.getElementById("toggleButton");
    const head = document.getElementsByClassName("head")



    toggleButton.addEventListener("click", function() {
        navList.classList.toggle("show");

    });

    // email submission
    const form = document.querySelector("form");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Oops! Something went wrong.");
        }
    });





});
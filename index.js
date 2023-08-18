document.addEventListener("DOMContentLoaded", function() {
    // toggle the navbar
    const navList = document.getElementById("navList");
    const toggleButton = document.getElementById("toggleButton");
    const about = document.getElementById("abt")
    const content = document.getElementById("about-content")



    toggleButton.addEventListener("click", function() {
        navList.classList.toggle("show");

    });

    about.addEventListener("click", function() {
        content.classList.toggle("show");
        console.log("show2 created");

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
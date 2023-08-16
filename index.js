document.addEventListener("DOMContentLoaded", function() {
    const navList = document.getElementById("navList");
    const toggleButton = document.getElementById("toggleButton");
    const head = document.getElementsByClassName("head")

    toggleButton.addEventListener("click", function() {
        navList.classList.toggle("show");

    });
});

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "soniashish8827@gmail.com",
        Password: "As882700@",
        To: 'soniashish8827@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Email from portfolio",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Mobile number: " + document.getElementById("number").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent succesfully")
    );
}
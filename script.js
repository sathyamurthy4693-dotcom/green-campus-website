// Mobile Navigation

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Volunteer Registration

document.getElementById("volunteerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message");

    message.style.color = "green";

    message.innerHTML =
        "Thank you " + name +
        "! Your registration was successful. 🌱";

    console.log("Volunteer Name:", name);

    console.log("Volunteer Email:", email);

    this.reset();

});


// Smooth Scrolling

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function() {

        document.getElementById("navLinks")
        .classList.remove("active");

    });

});
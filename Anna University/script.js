document.addEventListener("DOMContentLoaded", function () {    const form = document.querySelector("form");

    
    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const regno = document.getElementById("regno").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("age").value.trim();

        const gender = document.querySelector('input[name="gender"]:checked');
        const course = document.querySelector('input[name="course"]:checked');
        if (name === "" || regno === "" || email === "" || age === "") {
            alert("Please fill in all the fields.");
            event.preventDefault(); 
            return;
        }
        if (!gender) {
            alert("Please select your gender.");
            event.preventDefault();
            return;
        }

        if (!course) {
            alert("Please select course type.");
            event.preventDefault();
            return;
        }

        if (age <= 0) {
            alert("Please enter a valid age.");
            event.preventDefault();
            return;
        }
        alert("Registration Successful!");
    });
});

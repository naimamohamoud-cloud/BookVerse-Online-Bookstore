window.addEventListener("load", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous errors
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("subjectError").textContent = "";
        document.getElementById("messageError").textContent = "";

        let isValid = true;

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // NAME validation
        if (name === "") {
            document.getElementById("nameError").textContent =
                "Full name is required.";
            isValid = false;
        }

        // EMAIL validation
        if (email === "") {
            document.getElementById("emailError").textContent =
                "Email is required.";
            isValid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            document.getElementById("emailError").textContent =
                "Enter a valid email address.";
            isValid = false;
        }

        // SUBJECT validation
        if (subject === "") {
            document.getElementById("subjectError").textContent =
                "Subject is required.";
            isValid = false;
        }

        // MESSAGE validation
        if (message === "") {
            document.getElementById("messageError").textContent =
                "Message is required.";
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById("messageError").textContent =
                "Message must be at least 10 characters.";
            isValid = false;
        }

        // SUCCESS
        if (isValid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });

});
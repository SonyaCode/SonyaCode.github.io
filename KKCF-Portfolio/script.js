let formInfo = document.getElementById("form-info");
let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    if (!this.checkValidity()) {
        e.preventDefault();
        this.reportValidity();
        console.log("fill out the form");
    } else {
        formInfo.innerHTML = "<h2>Thank you for response! We'll get back to you as soon as possible.</h2>"
    }
});
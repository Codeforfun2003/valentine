document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".text");

    textElement.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});

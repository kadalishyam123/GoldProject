document.addEventListener("DOMContentLoaded", function () {
    const openFormButton = document.getElementById("formOpen");
    const formContainer = document.getElementById("formContainer");
    const closeButton = document.getElementById("closeButton");

    openFormButton.addEventListener("click", function () {
        formContainer.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        formContainer.style.display = "none";
    });
});


function changeBackground() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "black"
            ? "#222"
            : "black";
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
function toggleMode() {
    document.body.classList.toggle("light-mode");
}
document.querySelectorAll(".card").forEach(card => {
    card.onclick = () => card.classList.toggle("active");
});

document.querySelectorAll(".hover-gif").forEach(img => {
    const staticSrc = img.src;
    const gifSrc = img.dataset.gif;

    img.addEventListener("mouseenter", () => {
        img.src = gifSrc;
    });

    img.addEventListener("mouseleave", () => {
        img.src = staticSrc;
    });
});

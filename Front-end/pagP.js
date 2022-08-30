document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    const imgI = document.getElementById("imgI");
    const imgD = document.getElementById("imgD");

    logo.addEventListener("click", () => {
        window.location.replace("index.html");
    });
});

imgI.addEventListener("click", () => {
    window.location.replace("https://campus.ort.edu.ar/");
});

imgD.addEventListener("click", () => {
    window.location.replace("https://campus.ort.edu.ar/secundaria/belgrano/tic");
});
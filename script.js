document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.getElementById("cursor-dot");

    document.addEventListener("mousemove", function (e) {
        // Update the position of the dot based on cursor coordinates
        cursorDot.style.left = e.pageX + "px";
        cursorDot.style.top = e.pageY + "px";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.getElementById("cursor-dot");

    document.addEventListener("mousemove", function (e) {
        // Update the position of the dot based on cursor coordinates
        cursorDot.style.left = e.pageX + "px";
        cursorDot.style.top = e.pageY + "px";
    });

    // Ensure the dot stays within the window
    document.addEventListener("mouseleave", function () {
        // Move the dot to a position outside the window to hide it
        cursorDot.style.left = "-100px";
        cursorDot.style.top = "-100px";
    });
});

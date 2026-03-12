"use strict";
window.addEventListener("DOMContentLoaded",
    function () {
        const item = this.document.querySelectorAll(".item")
        item.forEach(function (elment, index) {
            setTimeout(function () {
                elment.classList.add("fade-in");
            }, 200 * index);

        });

    }, false
);
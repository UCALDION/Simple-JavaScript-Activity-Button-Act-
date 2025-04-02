document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("showMore");
    const contentDiv = document.getElementById("content");
    const changeContentBtn = document.getElementById("changeContent");
    const backBtn = document.getElementById("back");
    const image = document.getElementById("image");
    const description = document.getElementById("description");

    let history = [];
    let currentState = {
        src: image.src,
        alt: image.alt,
        text: description.textContent
    };

    function saveState() {
        history.push({ ...currentState });
    }

    function updateContent(src, alt, text) {
        currentState = { src, alt, text };
        image.src = src;
        image.alt = alt;
        description.textContent = text;
    }

    showMoreBtn.addEventListener("click", function () {
        contentDiv.style.display = "block";
        showMoreBtn.style.display = "none";
        saveState();
    });

    changeContentBtn.addEventListener("click", function () {
        saveState();
        if (currentState.src.includes("ig.png")) {
            updateContent("img/fb.png", "Facebook Account", "Facebook Account.");
        } else {
            updateContent("img/ig.png", "Instagram Account", "Instagram Account.");
        }
    });

    backBtn.addEventListener("click", function () {
        if (history.length > 0) {
            let previousState = history.pop();
            updateContent(previousState.src, previousState.alt, previousState.text);
        }
        if (history.length === 0) {
            contentDiv.style.display = "none";
            showMoreBtn.style.display = "block";
        }
    });
});
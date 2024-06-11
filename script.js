const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const interval = setInterval(() => {
    const targetElement = document.querySelector('#pro span');
    targetElement.onmouseover = event => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < 5) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 3;
    };
}, 30);
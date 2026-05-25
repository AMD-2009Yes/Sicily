let upto = 0;
let counts = setInterval(updated, 10);

function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 500) {
    clearInterval(counts);
    }
}


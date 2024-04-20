let count = 0;
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("b3");
const errorDiv = document.querySelector(".div3");

function increment() {
    count++;
    counter.innerHTML = count;
    updateClearButton();
    hideError();
}

function decrement() {
    if (count > 0) {
        count--;
        counter.innerHTML = count;
        updateClearButton();
    } else {
        showError();
    }
}

function clearCount() {
    count = 0;
    counter.innerHTML = count;
    updateClearButton();
    hideError();
}

function updateClearButton() {
    if (count > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
}

function showError() {
    errorDiv.style.display = 'block';
}

function hideError() {
    errorDiv.style.display = 'none';
}
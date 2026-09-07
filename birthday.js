function checkPasscode() {

    let passcode = document.getElementById("passcode").value;
    let message = document.getElementById("message");

    if (passcode === "") {
        message.textContent = "BRUH i said enter the password not empty text 😭";
    }

    else if (passcode === "ERMILOVESBLENUA") {
        window.location.href = "birthday2.html";
    }

    else {
        message.textContent = "Wrong password, TRY AGAIN 😭";
    }
}


let passcodeInput = document.getElementById("passcode");

if (passcodeInput) {
    passcodeInput.addEventListener("input", function() {
        document.getElementById("message").textContent = "";
    });
}


function wrongChoice() {
    document.getElementById("message").textContent =
        "Wrong choice. Choose again. 😠";
}


function continuePage() {
    window.location.href = "Birthday3.html";
}


let poemYes = document.getElementById("PoemYES");

if (poemYes) {
    poemYes.addEventListener("click", function() {
        window.location.href = "Birthday4.html";
    });
}


let poemNo = document.getElementById("PoemNO");

if (poemNo) {
    poemNo.addEventListener("click", function() {
        document.getElementById("poem").textContent =
            "WRONG ANSWER!TRY AGAIN.";
    });
}
let balance = 1000;

function deposit() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0 || !Number.isFinite(amount)) {
        alert("Enter a valid amount");
        return;
    }

    balance += amount;
    document.getElementById("balance").textContent = balance;
    document.getElementById("amount").value = "";
}
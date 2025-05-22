function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(billAmount) || isNaN(tipPercent)) {
    alert("Please enter valid numbers");
    return;
  }

  const tip = billAmount * (tipPercent / 100);
  const total = billAmount + tip;

  document.getElementById("tipAmount").innerText = `Tip: ₹${tip.toFixed(2)}`;
  document.getElementById("totalAmount").innerText = `Total: ₹${total.toFixed(2)}`;
}

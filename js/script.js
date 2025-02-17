/**
 * Update the price display when a service button is clicked.
 * @param {HTMLElement} button - The button element that was clicked.
 */
function updatePrice(button) {
    const price = button.getAttribute("data-price");
    document.getElementById("priceDisplay").textContent = price;
  }
  
/**
 * Update the price display when a service button is clicked.
 * @param {HTMLElement} button - The button element that was clicked.
 */
function updatePrice(button) {
    const price = button.getAttribute("data-price");
    document.getElementById("priceDisplay").textContent = price;
  }
// When the "Resend Confirmation" button is clicked, set a flag and reload the page
document.getElementById('resendBtn').addEventListener('click', function () {
    localStorage.setItem('resent', 'true');
    location.reload();
  });
  
  // On page load, check if the "resent" flag is set and display the notification alert
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('resent') === 'true') {
      const alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-success';
      alertDiv.textContent = 'The confirmation has been resent successfully';
      // Insert the alert above the confirmation outline
      const mainContainer = document.querySelector('main.container');
      mainContainer.insertBefore(alertDiv, mainContainer.firstChild);
      // Remove the flag so the alert only shows once
      localStorage.removeItem('resent');
    }
  });
   
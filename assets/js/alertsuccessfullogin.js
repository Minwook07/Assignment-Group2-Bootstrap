document.addEventListener('DOMContentLoaded', () => {
    function showAlert(message, type, alertId) {
        const alertElement = document.getElementById(alertId);
        alertElement.className = `alert alert-${type} d-block`;
        alertElement.textContent = message;
        setTimeout(() => {
            alertElement.classList.add('d-none');
        }, 3000); // Hide alert after 3 seconds
    }

    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (this.checkValidity()) {
            showAlert('ចុះឈ្មោះបានដោយជោគជ័យ!', 'success', 'signupAlert');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000); // Delay to show the alert
        } else {
            this.reportValidity();
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (this.checkValidity()) {
            showAlert('ចូលគណនីបានដោយជោគជ័យ!', 'success', 'loginAlert');
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000); // Delay to show the alert
        } else {
            this.reportValidity();
        }
    });
});

// HANDLING FORMS
document.addEventListener('DOMContentLoaded', function () {
    // Get all forms with class .form
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous errors
            const errorList = document.getElementById('errorList');
            if (errorList) {
                errorList.innerHTML = '';
            }

            const formData = new FormData(this);

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Handle success case
                        if (data.redirect_url) {
                            console.log(data.redirect_url);

                            window.location.href = data.redirect_url;
                        }
                        if (data.message && errorList) {
                            // Display success message
                            const li = document.createElement('li');
                            li.textContent = data.message;
                            console.log(data.message);

                            li.classList.add('success-message');
                            errorList.appendChild(li);
                        }
                    } else if (data.errors && errorList) {
                        // Display errors in the error list
                        data.errors.forEach(error => {
                            const li = document.createElement('li');
                            li.textContent = error;
                            li.classList.add('error-message');
                            errorList.appendChild(li);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (errorList) {
                        const li = document.createElement('li');
                        li.classList.add('error-message');
                        li.textContent = 'An unexpected error occurred. Please try again.';
                        errorList.appendChild(li);
                    }
                });
        });
    });
});

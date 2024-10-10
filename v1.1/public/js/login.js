document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(loginForm);
        const data = {
            emailOrPhone: formData.get('emailOrPhone'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                // Redirect based on role
                if (result.role === 'user') {
                    window.location.href = '/';
                } else if (result.role === 'tailor') {
<<<<<<< HEAD
                    window.location.href = '/tailor/dashboard';
=======
                    window.location.href = '/tailor-dashboard';
>>>>>>> cc5c6c55c54b976c650c711083dff5cfa83c7d3c
                } else if (result.role === 'vendor') {
                    window.location.href = '/vendor_home';
                }
            } else {
                // Handle errors
                alert(result.error);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again.');
        }
    });
});
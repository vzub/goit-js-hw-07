const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = form.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (email.value === '' || password.value === '') {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    form.reset();
    
})

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelectorAll('.error').forEach(span => span.innerHTML = '');

    var errors = false;
    const firstName = document.querySelector('input[name="firstName"]');
    const lastName = document.querySelector('input[name="lastName"]');
    const phone = document.querySelector('input[name="phone"]');
    const gender = document.querySelectorAll('select[name="gender"]');
    const password = document.querySelector('input[name="password"]');
    const confirmPassword = document.querySelector('input[name="confirmPassword"]');

    if (!firstName.value.trim()) {
        document.querySelector('.error[for="firstName"]').innerHTML = 'First Name is required.';
        errors = true;
    }
    if (!lastName.value.trim()) {
        document.querySelector('.error[for="lastName"]').innerHTML = 'Last Name is required.';
        errors = true;
    }
    if (!phone.value.trim()) {
        document.querySelector('.error[for="phone"]').innerHTML = 'Phone Number is required.';
        errors = true;
    }
    else if (phone.value.trim().length != 11 || isNaN(phone.value.trim())) {
        document.querySelector('.error[for="phone"]').innerHTML = 'Phone Number is invalid.';
        errors = true;
    }
    if (!gender.value) {
        document.querySelector('.error[for="gender"]').innerHTML = 'Gender is required.';
        errors = true;
    }
    if (["male", "female"].includes(gender.value)) {
        document.querySelector('.error[for="gender"]').innerHTML = 'Gender is invalid.';
        errors = true;
    }
    if (!password.value.trim()) {
        document.querySelector('.error[for="password"]').innerHTML = 'Password is required.';
        errors = true;
    }
    if (!confirmPassword.value.trim()) {
        document.querySelector('.error[for="confirmPassword"]').innerHTML = 'Confirm Password is required.';
        errors = true;
    }
    if (password.value !== confirmPassword.value) {
        document.querySelector('.error[for="password"]').innerHTML = 'Passwords doesn\'t match.';
        errors = true;
    }

    if (!errors) {
        this.submit();
        console.log('firstName: ' + firstName.value);
        console.log('lastName: ' + lastName.value);
        console.log('phone: ' + phone.value);
        console.log('gender: ' + gender.value);
        console.log('password: ' + password.value);
        console.log('consent: ' + document.querySelector('input[name="consent"]').value);
        alert('Form submitted successfully!');
    }
});

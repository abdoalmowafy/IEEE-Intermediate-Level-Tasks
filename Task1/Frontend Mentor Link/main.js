document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelectorAll('.error').forEach(span => span.innerHTML = '');

    var errors = false;
    const firstName = document.querySelector('input[name="firstName"]');
    const lastName = document.querySelector('input[name="lastName"]');
    const email = document.querySelector('input[name="email"]');
    const queryType = document.querySelectorAll('input[name="queryType"]');
    const message = document.querySelector('textarea[name="message"]');
    const consent = document.querySelector('input[name="consent"]');
    const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (!firstName.value.trim()) {
        document.querySelector('.error[for="firstName"]').innerHTML = 'First Name is required.';
        errors = true;
    }
    if (!lastName.value.trim()) {
        document.querySelector('.error[for="lastName"]').innerHTML = 'Last Name is required.';
        errors = true;
    }
    if (!re.test(email.value.trim())) {
        document.querySelector('.error[for="email"]').innerHTML = 'Email is required.';
        errors = true;
    }
    if (!Array.from(queryType).some(radio => radio.checked)) {
        document.querySelector('.error[for="queryType"]').innerHTML = 'Query Type is required.';
        errors = true;
    }
    if (!message.value.trim()) {
        document.querySelector('.error[for="message"]').innerHTML = 'Message is required.';
        errors = true;
    }
    if (!consent.checked) {
        document.querySelector('.error[for="consent"]').innerHTML = 'Consent is required.';
        errors = true;
    }

    if (!errors) {
        this.submit();
        alert('Form submitted successfully!');
    }
});


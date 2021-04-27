const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');

send.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            email: myForm.elements.email.value,
            street: myForm.elements.street.value,
            house: myForm.elements.house.value,
            floor: myForm.elements.floor.value,
            payment: myForm.elements.payment.value,
            callback: myForm.elements.callback.checked
        };


        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
           if (xhr.response.status) {                       // статус - то, чем отвечает сервер
               console.log('ok');
           }
        });
    }
});

function validateForm(form){
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.email)) {
        valid = false;
    }
    if (!validateField(form.elements.street)) {
        valid = false;
    }
    if (!validateField(form.elements.house)) {
        valid = false;
    }
    if (!validateField(form.elements.floor)) {
        valid = false;
    }
    if (!validateField(form.elements.payment)) {
        valid = false;
    }
    if (!validateField(form.elements.callback)) {
        valid = false;
    }

    return valid;

}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}
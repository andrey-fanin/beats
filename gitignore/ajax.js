const loadButton = document.querySelector('#loadButton'); // на эту кнопку нажать для загрузки
const result = document.querySelector('#result');         // 

loadButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'friends.json');      // get - получить данные, content - то, что нужно отправить
    xhr.responseType = 'json'
    xhr.send();
    xhr.addEventListener('load', () => {
       if (xhr.status >= 400) {
           console.log('something is wrong');
       } else {
        //    console.log(xhr.responseText);         // увидим содержимое текста
        //    result.innerHTML = xhr.responseText;   // впишет содержимое в div #result
           //
           //    const friends = JSON.parse(xhr.responseText);   
           const friends = xhr.response;
           console.log(friends);

           result.innerHTML = '';

           for (const friend of friends) {
            const friendDom = createFriendDOM (friend);
            result.appendChild(friendDom);
           }
       };
    });
    function createFriendDOM(friend) {
        const div = document.createElement('div');
        div.classList.add('friends');
        div.textContent = `${friend.name} ${friend.lastName}`;
        return div;
    }

});



///
const obj = {
    name: 'Ivan',
    lastName: 'Petrov'
};

const friends = {
    name: 'Ivan',
    lastName: 'Petrov'    
},
{
    name: 'Ivn',
    lastName: 'Perov'    
};


///


const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(myForm.elements.name.value);
    console.log(myForm.elements.lastName.value);
    console.log(myForm.elements.gender.value);
    // console.log(myForm.elements.auto.checked);

    if (myForm.elements.auto.checked == true) {
        console.log('est auto');
    }
});


const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');

send.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            email: myForm.elements.email.value
        };


        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
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

    return valid;

}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        
        return true;
    }
}


///


function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}
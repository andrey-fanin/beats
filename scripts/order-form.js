// // function submitForm (oFormElement) {
// //     var xhr = new XMLHttpRequest();
// //     xhr.onload = function() {
// //         alert (xhr.responseText); 
// //     }
// //     xhr.open (oFormElement.method, oFormElement.action, true);
// //     xhr.send (new FormData (oFormElement));
// //     return false;
// // }

// // xhr.onreadystatechange = function() {
// //   if (this.readyState == 4 && this.status == 200) {
// //     var data = JSON.parse(this.responseText);
// //     console.log(data);
// //   }
// // };


// $(document).ready(() => {

//     $('.button').on('click', e => {

//         let block = $('.type__form:last-child');

//         let value = block.val();         // получить то, что вводят в текстовое поле 

//         console.log(value);

//         // let block = $('.radio:checked');
//         // let block = $('#select');
//         // let block = $('#file');         // имя файла с приставкой fakepath
//     })
// })
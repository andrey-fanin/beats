// Js - взаимодействие друг с другом, интерактивность.

/* <script>var a = "hello world"</script> - подлкючить джей эс */

// number (числа) - натуральные и десятичные
// string (строки) - всё в кавычках
// boolean (булевый тип) - логический тип тру-фолс
// object (объект) - коробочка со значениями

        // Переменные 
var name = 'Андрей';
console.log(name);  // вывод значения переданной переменной в консоль

        // Управляющие конструкции
// Условные и циклические операторы.
if (name == 'Андрей') {
    console.log ('да');
} else {
    console.log ('нет');
}

for (
    var i = 0;
    i < 3; 
    i++
) {
    console.log (i);  // если истинно - выполнится, если нет - пойдёт дальше
} // несколько раз, и знаешь количество повторений

// Функции
function sum(a, b) {  // вызвать исходный код неограниченное количество раз
    return a + b;    // пока не вызвали, ничего не работает
}


function sum1(a, b) {
    var result = a + b;

    return result;
}
sum(2, 3);
var result = sum(2,3)
console.log(result)

// Область видимости - список доступных переменных и функций.
// Каждая функция знает о том, где была объявлена, и может пользоваться ОВ, доступной на тот момент.
var someVar = 20;
var someOtherVar = 30;   // глобальная область

function sum(a, b) {    // a, b, result - внутренняя
    var result = a + b;
    return result;
}

var a = 10;

function fn1(b, c) {
    function fn2(d, e) {
        return a + b + c + d + e;
    }

    return fn2(3, 4);
}

var res1 = fn1(1, 2);

console.log (res1); // Замыкание - способность функции запоминать область видимости там, где объявлены и пользоваться переменными оттуда.


var a = 10;
console.log(a);

if (10 > 100) {
    var a = 10;
}

console.log(a);

/// Всплытие - хоистинг

var a;

if (10 > 100) {
    a = 10;
}

console.log (a);

// Типы объявления функций
// Function Declaration - описание функции

function fn(filter) {
    filter();
}

fn(function() {
    console.log('!!!');
});

var sum = function(a,b) {     // FE - function expression, объявление переменной внутри другого выражения
    return a + b;
}

function sum(a,b) {            // FD
    return a + b;
}

// FD всплывёт вверх (только имя переменной, не значение), FE не всплывёт.

// Стрелочные функции - если внутри одно выражение - убрать return и фигурные скобки.

var sum = (a, b) => {
    return a + b;
};

var sum = (a, b) => a + b;

var result = sum(10,20)
console.log(result);

var ar = [1, 2, 3, 4];
var ar2 = [1, 4, 9, 16];
var newArray = ar.map(function(number) { // map для каждого элемента внутри массива вызовет функцию
    return number * number;
});

console.log (ar);
console.log (newArray);

var newArray = ar.map(n => n * n); // если параметр один, то круглые скобки не нужны


/// Let - не подвержен всплытию (hoisting), доступна только там, где объявлена
if (10 > 1) {
   let b = 10;  
   console.log(b);
}

for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);

/// Const - не меняется, не всплывает, доступна там, где объявлена
let c = 10;

console.log(c);

c = 200;

console.log(c);

/// Objects and arrays
var d = 10; 

//  объект  свойство значение
var  obj = { name:  'Андрей', lastName: 'Фанин'};
var  obj = { 
    name:  'Иван', 
    lastName: 'Петров', 
    old: 40,
    work: 'как краб на галерах'
};

console.log(obj.lastName);  // обратиться к переменной.свойство
console.log(obj['name']);

obj.name = 'Владимир';
obj.work = 'Фашист';

console.log(obj.work);



/// Массивы
var human1 = {
    name: 'Андрей',
    lastName: 'Добрей'
};

var human2 = {
    name: 'Дмитрий',
    lastName: 'Медведев'
};
//              0           1
var array = ['Дмитрий', 'Андрей'];

console.log(array[1]);

console.log(array[0]);

console.log(array[2]);

array[1] = 'Роман';

console.log (array[1]);

console.log(array.length);

array.push('Дед');     // запихнуть значение

console.log(array.length);

for (var i = 0; i < array.length; i++) { // до тех пор, пока истинно условное выражение во второй части
    console.log(i);
    console.log(array[i]);

    var name = array[i].name;
    console.log(name);
}

console.log(i);
console.log(name);

var array = [
    {
        name: 1,
        lastName: 2
    },
    {
        name: 3,
        lastName: 4
    },
    {
        name: 5,
        lastName: 6        
    }
];

console = {
    log: function() {

    }
}

console.log() // глобальное свойство log объекта console









////////////////







            /// Отладка приложений
function div(a,b) {
    if (b == 0) {
        console.log("На ноль");
    } else {
        return a / b;
    }
}

var result = div(10, 2);

if (result != undefined) {
    console.log(result);
}

       //   |||||

function div(a,b) {
    if (b != 0) {
        return a / b;
    }
}
    
var result = div (10, 2);

if (5 != undefined) {
    console.log(result);
} else {
    console.log('nol');
}


            |||
function div(a, b) {
    if (b < 0) {

    } else if (b == 0) {

    } else if (b == u ndefined) {

    } else if (!isFinite(b)) {

    } else {
        return a / b;
    }
}

            |||
try {
    console.log('до');
    throw new Error('text');
    console.log('после');            /// это будет игнорироваться
} catch (e) {
    console.log(e.message);
}

function div(a,b) {
    try {
        if (b<0) {
            throw new Error("text");
        } else if (b == 0) {
            throw new Error('text');
        }

        return a / b;
    } catch (e) {
        console.log(e.message);
    }

}

if (result != undefined) {
    console.log(result);
} else {
    console.log('nol');
}


            |||        /// когда код в функции заканчивается, интерпретатор переходит на ту строку, где эта функция была вызвана
function fn1() {
    fn2();
}
 
function fn2() {
    fn3();
}
 
function fn3() {
    console.log('inside fn3');
    throw new Error('erro');
}

try {

} catch (e) {
    console.log(e.message);
}
 

fn1();   
 

                |||
 
function div(a,b) {
    if (b<0) {
        throw new Error("text");
    } else if (b == 0) {
        throw new Error('text');
    }

    return a / b;
        
}
    
try {
    var result = div(10, 0);
    console.log(result);
} catch (e) {
    console.log(e.message);
    
}
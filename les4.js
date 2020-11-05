// // 1 - створити функцію яка виводить масив
// function printedArr(arr1){
//     console.log(arr1);
//     for (const i of arr1){
//         console.log(i);
//     }
// }
// let arr = [1,3,7,5,2,8,10];
// printedArr(arr);

// // 2 - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomNum(n, min, max){
//     let arr = [];
//     //let n = parseInt(Math.random() * (max - min) + min);    // визначити розмір масива рандомно
//     for (let i = 0 ; i < n; i++){
//         arr[i] = Math.random() * (max - min) + min;
//     }
//     printedArr(arr);
// }
// randomNum(10, 1, 100);


// // 3 - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNUm(n1, n2, n3){
//     let min = n1<n2 ? n1 : n2;
//     min = min<n3 ? min : n3;
//     console.log(min);
//     return min;
// }

// let num1 = +prompt('Enter first number:');
// let num2 = +prompt('Enter second number:');
// let num3 = +prompt('Enter third number:');

// let a = minNUm(num1, num2, num3);


// // 4 - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber(n1, n2, n3){
//     let max = n1>n2 ? n1 : n2;
//     max = max>n3? max : n3;
//     console.log(max);
//     return max;
// }
// let num1 = +prompt('Enter first number:');
// let num2 = +prompt('Enter second number:');
// let num3 = +prompt('Enter third number:');

// maxNumber(num1, num2, num3);


// // 5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minMax(){
//     let max = +arguments[0];
//     let min = +arguments[0];
//     let temp = 0;
//     for ( let i = 1; i < arguments.length; i++){
//             temp = +arguments[i];
//             min = min < temp ? min : temp;
//             max = max > temp ? max : temp;
//     }
//     console.log(max);    
//     return min
// }
// console.log(minMax(1,2,3,4,5));


// // 6 - створити функцію яка виводить масив
// function printArr(arr){
//     for (let i of arr){
//         console.log(i);
//     }
// }
// let arr1 = [110, 7.8, 'Hello', 'document', 3.14, 'car', -1234567, '065498643', 'book', 0];
// printArr(arr1);


// // 7 - створити функцію яка повертає найбільше число з масиву
// ? чи потрібна в такому випадку додаткове приведення до числа
// function maxElem(arr){
//     let max = arr[0];
//     for (let i of arr){
//         max = +i < max ? max : +i;
//     }
//     return max;
// }

// let arr1 = [-5, -3, -457, -31, -700, -101, -13]
// console.log(maxElem(arr1));


// // 8 - створити функцію яка повертає найменьше число з масиву
// function minElem(arr){
//     let min = arr[0];
//     for (let i of arr){
//         min = min < i ? min : i;
//     }
//     return min;
// }

// let arr1 = [-457, -31, 3.14, 250, 1024, -32, 790000];
// console.log(minElem(arr1));


// // 9 - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function calcNum(arr){
//     let sum = 0;
//     for(let i of arr){
//         sum += i;
//     }
//     return sum;
// }
// let arr1 = [3, 14, 15, 96, 7, 9.82, 256];
// console.log(calcNum(arr1));


// // 10 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avrArr(arr){
//     let average = 0;
//     let sum = 0;    
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];        
//     }
//     average = sum/arr.length;
//     return average;
// }
// let arr1 = [3, 14, 10.8, 96, 7, 9.82, 256];
// console.log(avrArr(arr1));


// // 11 - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function amountObject(arr){
//     let result = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] === 'object'){
//             result++;
//         }
//     }
//     return result;

// }

// let arr1 = [{name: 'Alex', age: 30},
//             {name: 'Ira', age: 27},
//             {name: 'Oleg', age:43},
//             {name: 'Max', age: 19},
//             {name: 'Olya', age: 35}];
// console.log(amountObject(arr1));


// // 12 - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function amountField(arr){
//     let sum = 0;
//     for (const val of arr){
//         if (typeof val === 'object'){
//             for (const val_key in val){
//                 sum++;
//             }
//         }
//     }
//     return sum;
// }
// let arr1 = [{name: 'Alex', age: 30},
//             {name: 'Ira', age: 27},
//             {name: 'Oleg', age:43},
//             {name: 'Max', age: 19},
//             {name: 'Olya', age: 35},
//             {id: 2, name: 'petya', age: 30, status: true}];
// console.log(amountField(arr1));


// 13 - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function unionArr(arr1, arr2){
//     let result = [];
//     let n = arr1.length < arr2.length ? arr1.length : arr2.length;
//     for( let i = 0; i < n; i++){
//         result.push(arr1[i]+arr2[i]);

//     }
//     return result;
// }

// let arrFirst = [1, 3, 5, 7, 9, 11];
// let arrSecond = [2, 4, 6, 8, 10, 12];
// console.log(unionArr(arrFirst, arrSecond));


// 14 - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function changedElem(arr, i = 1){
//    let templ = arr[i];
//    let templ_i = i;
//    if (++templ_i < arr.length){        
//         arr[i] = arr[i+1]
//         arr[i+1] = templ
//    }
//    return arr;
// }
// let arr1 = [1, 3, 5, 7, 9, 11];
// console.log(arr1);
// console.log(changedElem( arr1, 3));


// 15 - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function moveZero(arr){
//     let n = arr.length;
//     let i = 0;
//     let sum = 0;
//     while (i < n){        
//         if (arr[i] === 0){
//             arr.splice(i, 1);
//             arr.push(0);  
//             sum++;
//             sum < n ? sum : i = n;         
//         } else {
//             i++
//         }
        
//     }
  
//     return arr;
// }

// let arr1 = [0,0,1,0];
// console.log(arr1);
// console.log(moveZero(arr1))


// Створити функцію яка :
// 16 - Додає в боді блок з текстом "Hello owu"
// function addedDiv(){
//     const addDiv = document.createElement('div');
//     addDiv.innerText = 'Hello owu';
//     document.body.appendChild(addDiv);
// }
// addedDiv();


// 17 - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElem(text = 'Hello owu', tag = 'div'){
//     const element = document.createElement(String(tag));
//     element.innerText = text;
//     document.body.appendChild(element);
// }

// addElem('Good luck', 'h1');



// 18 - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let arr_cars = [{model: 'Ford Edge',
                year_issue: 2012,
                power: 120,
                color: 'blue'
            },
                {model: 'BMW x5',
                year_issue: 2013,
                power: 394,
                color: 'white'
            },
                {model: 'Audi a8',
                year_issue: 2001,
                power: 310,
                color: 'silver'
            },
                {model: 'Daowoo Lanos',
                year_issue: 2010,
                power: 108,
                color: 'green'
            },
                {model: 'Opel Omega',
                year_issue: 1994,
                power: 96,
                color: 'dark-blue'
            },
                {model: 'Chevrolet Aaveo',
                year_issue: 2003,
                power: 126,
                color: 'red'
            },
                {model: 'Skoda Octavia',
                year_of_issue: 2009,
                power: 108,
                color: 'black'
            },
                {model: 'Toyota Corlla',
                year_issue: 2004,
                power: 89,
                color: 'silver'
            },
                {model: 'Toyota Rav4',
                year_issue: 2006,
                power: 177,
                color: 'black'
            },
                {model: 'Ford Fiesta',
                year_issue: 2012,
                power: 100,
                color: 'red'}]
// function carElem(arr, tag = 'div'){
//     const elem_tag = document.createElement(tag);
//     const block_ul = document.createElement('ul');
//     let str = '';
//     for (const car of arr){
//         const block_li = document.createElement('li');
//         console.log(car.model);
//         block_li.innerText = car.model;
//         block_ul.appendChild(block_li);
//     }
//     elem_tag.appendChild(block_ul);
//     document.body.appendChild(elem_tag);
// }

// carElem(arr_cars, 'div');



// 19 - Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function carBlocks(arr, tag = 'div'){
//     for (let i = 0; i < arr.length; i++){
//         let str = ''
//         const block = document.createElement(tag);
//         for (const val in arr[i]){
//             str = str + '   ' + arr[i][val];
//         }
//         block.innerText = str;
//         document.body.appendChild(block);
//     }
// }

// carBlocks(arr_cars, 'p');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function characteristicCarr(arr, tag = 'div'){
//     const basic_block = document.createElement(tag);
//     for (let i = 0; i < arr.length; i++){        
//         const block_elem = document.createElement(tag)
//         for (const val in arr[i]){
//             const property_block = document.createElement('div');
//             property_block.innerText = arr[i][val];
//             block_elem.appendChild(property_block);
//         }
//         basic_block.appendChild(block_elem);        
//     }
//     document.body.appendChild(basic_block);
// }
// characteristicCarr(arr_cars, 'p');


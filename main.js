

// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**

let str1 = 'ddd@bbb@ccc@';
document.writeln(str1.replace(/@/g, '!')); 


// 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.

let str2 = 'js';
document.writeln(str2.toUpperCase());

// 3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.

let str3 = 'JS';
document.writeln(str3.toUpperCase());


// 4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.

let str4 = 'I am a hero!';
console.log(str4.length);


// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
//     **Пример: "Номер вашей карты: **********1245"**


let userPrompt = prompt('Введите номер своей кредитной карты');

alert(userPrompt.replace(/\d(?=\d{4})/g, "*"))







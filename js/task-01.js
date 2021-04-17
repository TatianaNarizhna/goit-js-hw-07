/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий 
в ul#categories, то есть элементов li.item. Получится 'В списке 3 
категории.'.

Для каждого элемента li.item в 
списке ul#categories, найдет и выведет в консоль текст 
заголовка элемента (тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/ 

// 1
const categoriesEl = document.querySelector('ul#categories');
const numOfEl = categoriesEl.children.length;
console.log(`В списке ${numOfEl} категории.`);


// var temp = document.getElementById('element').parentNode;
// var children = temp.childNodes;
// console.log(children.length); // 7

// function countElements(children) {
//   var count=0;
//   for (var i=0, m=children.length; i<m; i++) 
//      if (children[i].nodeType===document.ELEMENT_NODE) 
//          count++;
//   return count;
// }
// console.info(countElements (children));​ // 3

// 2
const titleEl = document.querySelectorAll('.item');



















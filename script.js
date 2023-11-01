
// Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//
//     Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// let arr = [1, 2, 3]
// console.log(arr.reverse())


// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// let arr = [0, 1, false, 2, undefined, '', 3, null]
// console.log(arr.filter(item =>  !!item))



// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// let arr = [1, 2, 3, 1, 2]
// console.log(arr.filter(el => el === el))


// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
//
// let arr1 = ['a', 'b', 'c']
// let arr2= [1, 2, 3]
// console.log([...arr1 , ...arr2])



// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//
// function myFunction(dopNum) {
//     let arr = [1, 2, 3]
//     arr.push(...dopNum)
//     return arr
// }
// console.log(myFunction( [4 , 5 , 6]))
//

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// function myFunction(dopNum) {
//     let arr = [1, 2, 3]
//     arr.unshift(...dopNum)
//     return arr
// }
// console.log(myFunction( [4 , 5 , 6]))

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]

// let arr = [1, 2, 3, 4, 5]
// let a = arr.splice(1,2,)
// console.log(arr)


// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// let obj = {js:'test', jq: 'hello', css: 'world'}
// console.log(Object.keys(obj))

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// function toString(arr){
//     return arr.join(',')
// }
//
//
// console.log(toString(['Капуста', 'Репа', 'Редиска', 'Морковка']))


// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]

// function massiv(arr) {
//     return [arr]
// }
//
// console.log(massiv('КаЖдЫй ОхОтНиК'))




function filterPrice (cars){
    return cars.filter(item => item.price >= 40000 && item.price <= 60000 && item.year <= 2019 && item.make === 'Mercedes')
}

console.log(filterPrice([{
        make: "Ford",
        model: "Mustang",
        year: 1969,
        color: "red",
        price: 25000
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2017,
        color: "blue",
        price: 30000
    },
    {
        make: "Tesla",
        model: "Model S",
        year: 2018,
        color: "black",
        price: 120000
    },
    {
        make: "Chevrolet",
        model: "Camaro",
        year: 1970,
        color: "orange",
        price: 60000
    },
    {
        make: "Dodge",
        model: "Challenger",
        year: 2019,
        color: "red",
        price: 35000
    },
    {
        make: "Chevrolet",
        model: "Corvette",
        year: 2019,
        color: "blue",
        price: 90000
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        color: "white",
        price: 40000
    },
    {
        make: "Mercedes",
        model: "C-Class",
        year: 2019,
        color: "black",
        price: 60000
    }]))

function filterMake (cars){
    return cars.filter(item =>item.make === 'Chevrolet')
}



const catalogButton1 = document.querySelector("#catalog-btn1")
const catalogButton2 = document.querySelector("#catalog-btn2")
const catalogButton3 = document.querySelector("#catalog-btn3")
const catalogBody1 = document.querySelector("#catalog-body1")
const catalogBody2 = document.querySelector("#catalog-body2")
const catalogBody3 = document.querySelector("#catalog-body3")

console.log(catalogButton2)
console.log(catalogBody1)
console.log(catalogBody2)
console.log(catalogBody3)

function makeActiveTab1() {
    console.log("стаботала функция 2")
    console.log(catalogBody1)
    console.log(catalogBody2)
    console.log(catalogBody3)
    
    //делаем кнопку 1 и вкладку 1 активными
    catalogButton1.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
    catalogButton2.setAttribute ("class", "catalog__tabs-item")
    catalogButton3.setAttribute ("class", "catalog__tabs-item")
    catalogBody1.setAttribute ("class", "catalog__body")
    catalogBody2.setAttribute ("class", "catalog__body catalog__body_unactive")
    catalogBody3.setAttribute ("class", "catalog__body catalog__body_unactive")
}
function makeActiveTab2() {
    console.log("стаботала функция 2")
    console.log(catalogBody1)
    console.log(catalogBody2)
    console.log(catalogBody3)
        //делаем кнопку 2 и вкладку 2 активными
    catalogButton1.setAttribute ("class", "catalog__tabs-item")
    catalogButton2.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
    catalogButton3.setAttribute ("class", "catalog__tabs-item")
    catalogBody1.setAttribute ("class", "catalog__body catalog__body_unactive")
    catalogBody2.setAttribute ("class", "catalog__body")
    catalogBody3.setAttribute ("class", "catalog__body catalog__body_unactive")
}
function makeActiveTab3() {
    console.log("стаботала функция 2")
    console.log(catalogBody1)
    console.log(catalogBody2)
    console.log(catalogBody3)
        //делаем кнопку 3 и вкладку 3 активными
    catalogButton1.setAttribute ("class", "catalog__tabs-item")
    catalogButton2.setAttribute ("class", "catalog__tabs-item")
    catalogButton3.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
    catalogBody1.setAttribute ("class", "catalog__body catalog__body_unactive")
    catalogBody2.setAttribute ("class", "catalog__body catalog__body_unactive")
    catalogBody3.setAttribute ("class", "catalog__body")
}


// const calcScreen = document.querySelector("[class=calc-screen] span")
// const intCellAll = document.querySelectorAll(".cell")
// let numbersArray1 = []
// let numbersArray2 = []
// let actionsArray1 = []
// let actionsArray2 = []
// let currNumber
// currNumber = ""

// function displayInput(char) {
//     calcScreen.innerHTML=calcScreen.innerHTML + char
// }


// //
// function addNumber(char) {
// //    console.log(char) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
//     switch (true) {
// //            case Number(char) != 'NaN': 
//         case char === "0": 
//         case char === "1": 
//         case char === "2": 
//         case char === "3": 
//         case char === "4": 
//         case char === "5": 
//         case char === "6": 
//         case char === "7": 
//         case char === "8": 
//         case char === "9": 
//             //***************************
//             // *** Если введено число ***
//             //***************************
//             displayInput(char) //добавляем к содержимому экрана текущий символ

//             currNumber = currNumber + char.toString()
//             break;
//         case char === "x":
//         case char === "/": 
//         case char === "+": 
//         case char === "-":                 
//             //****************************
//             // *** Если введен операнд ***
//             //****************************
//             displayInput(char) //добавляем к содержимому экрана текущий символ

//             numbersArray1.push(Number(currNumber))
//             actionsArray1.push(char)


//             currNumber = ""
// //                console.log(numbersArray1) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
// //                console.log(actionsArray1) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
//             break;
//         case char === "=": 
//             //***********************************
//             // *** Если нажата кнопка "равно" ***
//             //***********************************
//             numbersArray1.push(Number(currNumber))
//             displayInput(char)

//             console.log("массивы 1 после нажатия =") //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
//             console.log(numbersArray1) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
//             console.log(actionsArray1) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***

//             //*************************************
//             //*** Выполняем умножение и деление ***
//             //*************************************

//             numbersArray2[0] = numbersArray1[0] //переносим 1-ое число в 2-ой массив

//             //перебираем все действия
//             //если сложение/вычитание - переносим число и действие в 2-ые массивы
//             //если умножение/деление, то выполняем это действие с последним числом во 2ом массиве
            
//             for (let i = 0; i < actionsArray1.length; i++) {

//                 if (actionsArray1[i] === "+") {
//                     //если операнд "+" копирем данные в 2ой массив
//                     actionsArray2.push (actionsArray1[i])
//                     numbersArray2.push (numbersArray1[i+1])

//                     continue 
//                 }
//                 if (actionsArray1[i] === "-") {
//                     //если операнд "-" копирем данные в 2ой массив
//                     actionsArray2.push (actionsArray1[i])
//                     numbersArray2.push (numbersArray1[i+1])
//                     continue 
//                 }
//                 if (actionsArray1[i] === "x") {
//                     //если операнд "x"
//                     numbersArray2[numbersArray2.length - 1] = numbersArray2[numbersArray2.length - 1] * numbersArray1[i+1]
//                     continue 
//                 }
//                 if (actionsArray1[i] === "/") {
//                     //если операнд "/"
//                     numbersArray2[numbersArray2.length - 1] = numbersArray2[numbersArray2.length - 1] / numbersArray1[i+1]
//                 }

//             }

//             console.log("массив 2 после выполнения умножения и деления") //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
//             console.log(numbersArray2) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***
//             console.log(actionsArray2) //*** УДАЛИТЬ ПОСЛЕ ОТЛАДКИ***


//             //************************************
//             //*** Выполняем сложение/вычитание ***
//             //************************************

//             //перебор всех введенных значений и операндов и вычисление результата
//             let summ  = numbersArray2[0]//переменная для результата
//             for (let i = 0; i < actionsArray2.length; i++) {
//                 if (actionsArray2[i] === "+") {
//                     //если операнд "+"
//                     summ = summ + numbersArray2[i+1]
//                     continue 
//                 }
//                 if (actionsArray2[i] === "-") {
//                     //если операнд "-"
//                     summ = summ - numbersArray2[i+1]
// //                        continue 
//                 }
//             }
//             displayInput(summ) //выводим результат

//             break;
//         default:
//             // *** Если другие case не сработали ***

//     }   

// }


// for (let cellItem of intCellAll) {
//     const currSpan = cellItem.querySelector("span")
//     cellItem.addEventListener("click", ()=>{
//         addNumber(currSpan.innerHTML.trim())
//     })
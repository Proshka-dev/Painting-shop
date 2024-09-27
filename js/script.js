// *********************** функция - обработчик нажатий на табы каталога **********************
function makeActiveCatalogTab () {
    //если нажатая кнопка уже активна - прерываем выполнение функции
    if (this.classList.contains('catalog__tabs-item_active'))  {
        console.log('Нажали на активную кнопку')
        return
    }

    //перебираем все кнопки и делаем активной ту, на которую нажали
    const buttonsCatalog = document.getElementsByClassName('catalog__tabs-item')
    for (let currButtonCatalog of buttonsCatalog) {
        if (currButtonCatalog === this) 
            //действия с кнопкой, на которую нажали
            currButtonCatalog.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
        else
            //действия с остальными кнопками
            currButtonCatalog.setAttribute ("class", "catalog__tabs-item")
    }
    
    //Получаем номер таба, указанный в id
    const numberOfTab = parseInt(this.id.replace(/[^0-9\.]+/g, ""))
    console.log(`Номер таба, указанный в ID: ${numberOfTab}`)

    //перебираем все табы
    const bodyesOfCatalog = document.getElementsByClassName('catalog__body')
    for (let currBodyOfCatalog of bodyesOfCatalog) {
        const currNumberOfBody = currBodyOfCatalog.id.replace(/[^0-9\.]+/g, "");
        if (numberOfTab == currNumberOfBody) {
            console.log(`Активация тела каталога номер ${currNumberOfBody}`)
            currBodyOfCatalog.setAttribute ("class", "catalog__body")
        }
        else {
            console.log(`Отключение тела каталога номер ${currNumberOfBody}`)
            currBodyOfCatalog.setAttribute ("class", "catalog__body catalog__body_unactive")
        }
    }
}
//*********************************************************************************************


// ***************** вешаем на кнопки обработчики событий *****************************
// получаем коллекцию элементов по имени класса
const buttonsCatalog = document.getElementsByClassName('catalog__tabs-item')

// перебираем все кнопки и навешиваем на каждую обработчик click
for (let i = 0; i < buttonsCatalog.length; i++) {
    const currButtonCatalog = buttonsCatalog[i]
    currButtonCatalog.addEventListener('click', makeActiveCatalogTab)
}




//**********************************  Старый код  ****************************************/
// const catalogButton1 = document.querySelector("#catalog-btn1")
// const catalogButton2 = document.querySelector("#catalog-btn2")
// const catalogButton3 = document.querySelector("#catalog-btn3")
// const catalogBody1 = document.querySelector("#catalog-body1")
// const catalogBody2 = document.querySelector("#catalog-body2")
// const catalogBody3 = document.querySelector("#catalog-body3")

// function makeActiveTab1() {
//     //делаем кнопку 1 и вкладку 1 активными
//     catalogButton1.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
//     catalogButton2.setAttribute ("class", "catalog__tabs-item")
//     catalogButton3.setAttribute ("class", "catalog__tabs-item")
//     catalogBody1.setAttribute ("class", "catalog__body")
//     catalogBody2.setAttribute ("class", "catalog__body catalog__body_unactive")
//     catalogBody3.setAttribute ("class", "catalog__body catalog__body_unactive")
// }
// function makeActiveTab2() {
//         //делаем кнопку 2 и вкладку 2 активными
//     catalogButton1.setAttribute ("class", "catalog__tabs-item")
//     catalogButton2.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
//     catalogButton3.setAttribute ("class", "catalog__tabs-item")
//     catalogBody1.setAttribute ("class", "catalog__body catalog__body_unactive")
//     catalogBody2.setAttribute ("class", "catalog__body")
//     catalogBody3.setAttribute ("class", "catalog__body catalog__body_unactive")
// }
// function makeActiveTab3() {
//         //делаем кнопку 3 и вкладку 3 активными
//     catalogButton1.setAttribute ("class", "catalog__tabs-item")
//     catalogButton2.setAttribute ("class", "catalog__tabs-item")
//     catalogButton3.setAttribute ("class", "catalog__tabs-item catalog__tabs-item_active")
//     catalogBody1.setAttribute ("class", "catalog__body catalog__body_unactive")
//     catalogBody2.setAttribute ("class", "catalog__body catalog__body_unactive")
//     catalogBody3.setAttribute ("class", "catalog__body")
// }

// function activateBurgerMenu() {
//     console.log("Активируем бургер")
//     const burgerMenuPanel = document.querySelector("#burgerMenu")
//     burgerMenuPanel.setAttribute ("class", "header__burger-menu_active")
// }

// function deactivateBurgerMenu() {
//     console.log("Отключаем бургер")
//     const burgerMenuPanel = document.querySelector("#burgerMenu")
//     burgerMenuPanel.setAttribute ("class", "header__burger-menu_unactive")
// }
//************************************  Тестирование  ************************************* */
// let arr = ['Ваня', 'Петя', 'Оля'];

// let resultArr = arr.map(function (item, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
//     console.log('---');
//     return item[0];
// })

// const htmlElem = document.documentElement;
// const headElem = document.head;
// const bodyElem = document.body;
// console.log(headElem);
// console.log(bodyElem);
// console.log(htmlElem);

//const bodyChildNodes = document.body.children;

// for (currElem of bodyChildNodes) {
//     console.log(currElem);
// }

// bodyChildNodes.forEach(currElem => {
//     console.log(currElem);
// });

// for (currElem of bodyChildNodes) {
//     console.log(currElem);
// };

//  console.log(bodyChildNodes);
//************************************************************************************************** */


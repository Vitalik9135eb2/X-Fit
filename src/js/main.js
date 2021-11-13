
const tabsServises = document.querySelectorAll('.services__nav-item');
const contentServises = document.querySelectorAll('.services__content');


tabsServises.forEach( function (item) {
    item.addEventListener('click', function () {

        let tabId = item.getAttribute('data-tab');
        let curentTab = document.querySelector(tabId);


        tabsServises.forEach(function (item){
            item.classList.remove('active')
            item.childNodes[1].classList.remove('active');
            item.childNodes[3].classList.remove('active')
        });

        contentServises.forEach(function (item){
            item.classList.remove('active')
        });

        item.classList.add('active');
        item.childNodes[1].classList.add('active');
        item.childNodes[3].classList.add('active');

        curentTab.classList.add('active');
    })
});

document.querySelector('.services__nav-item').click();

















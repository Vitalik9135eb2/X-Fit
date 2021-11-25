

// Tabs block "Servises"

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



// Tabs block "Card"

const tabsCard = document.querySelectorAll('.card__list-item');
const contentCard = document.querySelectorAll('.card__info');


    tabsCard.forEach(function (item){
        item.addEventListener('click', function (){
            let tabId = item.getAttribute('data-tab');
            let curentTab = document.querySelector(tabId);

            tabsCard.forEach(function (item){
                item.classList.remove('active')
            });
            contentCard.forEach(function (item){
                item.classList.remove('active')
            });
    
            item.classList.add('active');
    
            curentTab.classList.add('active');
        })
    })
    document.querySelector('.card__list-item').click();




// Tabs graph categories

const tabsCategories = document.querySelectorAll('.graph__tab');
const contentCategories = document.querySelectorAll('.graph__table-wrap');

tabsCategories.forEach(function (item){
        item.addEventListener('click', function (){
            let tabId = item.getAttribute('data-cat');
            let curentTab = document.querySelector(tabId);
            tabsCategories.forEach(function (item){
                item.classList.remove('active')
            });
            contentCategories.forEach(function (item){
                item.classList.remove('active')
            });
    
            item.classList.add('active');
    
            curentTab.classList.add('active');
            
        });
    });
    document.querySelector('.graph__tab').click();


// Tabs graph day

const tabsDay = document.querySelectorAll('.table__title-col');
const contentDay = document.querySelectorAll('.table__col');


tabsDay.forEach(function (item){
        item.addEventListener('click', function (){
            let tabId = item.getAttribute('data-grph');
            let curentTab = document.querySelectorAll(tabId);

            tabsDay.forEach(function (item){
                item.classList.remove('active')
            });
            contentDay.forEach(function (item){
                item.classList.remove('active')
            });
    
            item.classList.add('active');
            
            curentTab.forEach(function(item){
                item.classList.add('active');
            })
            
        })
    })
    document.querySelector('.table__title-col').click();




// Slider

const sliderTrack = document.querySelector('.about__slider-line');
let offset = 0;
let courent = document.querySelector('.about__slider-counter__numb');
let courentItem = document.querySelectorAll('.about__slider-img').length;

document.querySelector('.about__slider-counter__all').innerHTML = courentItem


let q = 1



document.querySelector('.about__btn--next').addEventListener('click', function (){
    let step = courentItem * 280;
    if (offset >= step){
        offset = 0;
        q = 0
    }
    sliderTrack.style.left = -offset + "px";
    q++
    courent.innerHTML = q
    if (q < 10){courent.innerHTML = "0" + q}
});


document.querySelector('.about__btn--prev').addEventListener('click', function(){
    let step = courentItem * 280;
    offset = offset - 280;

    if (offset <= 0){
        offset = 0;
        
    }
    sliderTrack.style.left = -offset + "px";
    q--
    if(q<1){q = 
        
        1}
    courent.innerHTML = q
    if (q < 10){courent.innerHTML = "0" + q}

    // if(offset <= 0) {offset = 256;}
});



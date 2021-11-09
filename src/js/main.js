
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

















// document.querySelectorAll('.services__nav-link').forEach( (item) => 
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = e.target.getAttribute('href').replace('#', '')

//         document.querySelectorAll('.services__nav-link').forEach(
//             (child) => child.classList.remove('active')
//         );

//         document.querySelectorAll('.services__content').forEach(
//             (child) => child.classList.remove('active')
//         );

//         item.classList.add('active');
        
//     })

// );


// document.querySelector('.services__nav-link').click();


const mainLogo = document.querySelector('.mainLogo');
const menuBullets = [...document.querySelectorAll('.menuTab')];
const mainFrame = document.querySelector('.mainFrame');
const pointer = document.querySelector('.pointer');
const wrapper = document.querySelector('.cursor');
let isInBullet = false;
let isInHomePage = true;
let currentPage = null;
let swiperInit = false;

/*Hover dots*/
menuBullets.forEach(function(item) {
    item.addEventListener('mouseover', function(event){
        if (isInBullet)
            return;
        else
            isInBullet = true;
        const bullet = item.children[0];
        bullet.style.position = 'absolute';
        //bullet.style.left = '14px';
        bullet.style.width = bullet.style.height = '12px';
        bullet.children[0].style.display = 'block';
        wrapper.style.height = wrapper.style.width = '22pt';
        //pointer.classList.remove('visible');
        //pointer.classList.add('hidden');
    });
});


/*Leave dots*/
menuBullets.forEach(function(item) {
    item.addEventListener('mouseleave', function(event){
        if (!isInBullet)
            return;
        else
            isInBullet = false;
        const bullet = item.children[0];
       bullet.style.position = 'relative';
        //bullet.style.left = '0%';
        if (window.innerWidth > 600)bullet.children[0].style.display = 'none';
        bullet.style.width = bullet.style.height = '10px';
        //document.querySelector('.pointer').classList.remove('hidden')
        //document.querySelector('.pointer').classList.add('visible')
        wrapper.style.height = wrapper.style.width = '15pt';
    });
});

    menuBullets.forEach(function (item) {
        item.addEventListener('click', function (event) {
            const menuName = item.children[0].children[0].innerText.toLowerCase();
            if (currentPage != null) {
                console.log(currentPage);
                document.querySelector(`.${currentPage}`).classList.remove('visible')
                document.querySelector(`.${currentPage}`).classList.add('hidden')
            }

            switch (menuName) {
                case 'clients':
                    document.querySelector('.clients').classList.remove('hidden');
                    document.querySelector('.clients').classList.add('visible');
                    currentPage = 'clients';
                    if (!swiperInit){
                        // init Swiper:
                        let swiper = new Swiper('.swiper-container', {
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',

                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                                dynamicBullets: true,
                            },
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                            },
                        });
                        swiperInit = true;
                    }
                    break;
                case 'about us':
                    document.querySelector(`.biographies`).classList.remove('hidden');
                    document.querySelector(`.biographies`).classList.add('visible');
                    currentPage = 'biographies';
                    break;
                case 'contact':
                    document.querySelector(`.${menuName}`).classList.remove('hidden');
                    document.querySelector(`.${menuName}`).classList.add('visible');
                    currentPage = 'contact';
                    break;
            }
            for (let menuBullet of menuBullets) {
                if (menuBullet !== item)
                    menuBullet.style.opacity = '0.5';
                else
                    menuBullet.style.opacity = '1';

            }
            
            if (window.innerWidth < 600) {
                document.body.style.position = 'relative';
                document.body.style.zIndex = '-300'
            }
            if (isInHomePage) {
                threeDcontainer.style.top = parseInt(window.getComputedStyle(threeDcontainer, null).getPropertyValue("top")) - 190 + 'px';
                mainFrame.style.top = parseInt(window.getComputedStyle(mainFrame, null).getPropertyValue("top")) - 190 + 'px';
                mainFrame.style.zIndex = '100';
                mainFrame.style.width = '50%';
                mainFrame.style.height = '50%';
                mainLogo.style.width = "50%";
                mainLogo.style.height = "30%";
                mainLogo.style.top = "9.5%";
                mainLogo.style.left = "24%";
               // document.querySelector('.tagLine').style.top = parseInt(window.getComputedStyle(document.querySelector('.tagLine'), null).getPropertyValue("top")) - 30 + 'px';
                document.querySelector('.tagLine').classList.add('hidden');
                isInHomePage = false;
            }
        });
    });


mainLogo.addEventListener('click', function (e) {
    if (isShifting)return;
    for (let elementNodeListOfElement of document.querySelectorAll('.pageSection')) {
        if (elementNodeListOfElement.classList.contains('visible')){
            elementNodeListOfElement.classList.remove('visible')
            elementNodeListOfElement.classList.add('hidden')
        }
    }
    if (!isInHomePage) {
        threeDcontainer.style.top = parseInt(window.getComputedStyle(threeDcontainer, null).getPropertyValue("top")) + 190 + 'px';
        mainFrame.style.top = parseInt(window.getComputedStyle(mainFrame, null).getPropertyValue("top")) + 190 + 'px';
        mainFrame.style.zIndex = '-1';
        mainFrame.style.width = '50%';
        mainFrame.style.height = '50%';
        mainLogo.style.width = "60%";
        mainLogo.style.height = "40%";
        mainLogo.style.top = "12.5%";
        mainLogo.style.left = "17%";
        //document.querySelector('.tagLine').style.top = parseInt(window.getComputedStyle(document.querySelector('.tagLine'), null).getPropertyValue("top")) + 30 + 'px';
        document.querySelector('.tagLine').classList.remove('hidden');
        document.querySelector('.tagLine').classList.add('visible');
        document.body.style.position = 'fixed';
        isInHomePage = true;
    }
    for (let menuBullet of menuBullets) {
            menuBullet.style.opacity = '1';
            menuBullet.classList.add("visible");
    }
});


window.addEventListener('resize', function () {
    if (window.innerWidth <= 600){
        menuBullets.forEach(function(item) {
            item.children[0].children[0].style.display = 'block';
        });
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth <= 600){
        menuBullets.forEach(function(item) {
            item.children[0].children[0].style.display = 'block';
        });
    }
})



const typeWriter = new Typewriter('.tagLine', {
    delay:30,
    loop: true,
    deleteSpeed: 1
});


typeWriter
    .pauseFor(1000)
    .typeString('Art direction and production of video content, graphics, objects, sets, and installations.')
    .pauseFor(3000)
    .deleteAll(1)
    .typeString('Direction artistique et production de vidéos, de contenus graphiques, d\'objets, de décors, et d\'installations.')
    .pauseFor(3000)
    .start();

const container = document.querySelector('.cursor-container');
const cursor = container.querySelector('.cursor-wrapper');
let cursorPos = { x: 0, y: 0 };
let cursorOffset = { x: 0, y: 0 };

document.addEventListener('mousemove', e => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
    cursor.style.transform = `translate(${cursorPos.x + cursorOffset.x}px, ${cursorPos.y + cursorOffset.y}px)`;
    //pointer.style.transform = `translate(${cursorPos.x + cursorOffset.x}px, ${cursorPos.y + cursorOffset.y}px)`;
})









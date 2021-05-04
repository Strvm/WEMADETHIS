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
        if (window.innerWidth < 600)return;
        if (isInBullet)
            return;
        else
            isInBullet = true;
        const bullet = item.children[0];
       // bullet.style.position = 'absolute';
        //bullet.style.left = '14px';
        //bullet.style.width = bullet.style.height = '10px';
        bullet.children[0].style.display = 'block';
        //wrapper.style.height = wrapper.style.width = '22pt';
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
        const name = bullet.children[0].innerHTML;
        console.log(name, currentPage);
        if (currentPage === name)return;
        bullet.style.position = 'relative';
        //bullet.style.left = '0%';
        if (window.innerWidth > 600)bullet.children[0].style.display = 'none';
        //bullet.style.width = bullet.style.height = '8px';
        //document.querySelector('.pointer').classList.remove('hidden')
        //document.querySelector('.pointer').classList.add('visible')
       // wrapper.style.height = wrapper.style.width = '15pt';
    });
});

    menuBullets.forEach(function (item) {
        item.addEventListener('click', function (event) {
            const menuName = item.children[0].children[0].innerText.toLowerCase();
            if (currentPage != null) {
                const temp = currentPage === 'about us' ? 'biographies' : currentPage;
                menuBullets.forEach(function(item) {
                    const bullet = item.children[0];
                    const name = bullet.children[0].innerHTML;
                    if (name === currentPage) {
                        bullet.style.position = 'relative';
                        if (window.innerWidth > 600) bullet.children[0].style.display = 'none';
                       // bullet.style.width = bullet.style.height = '10px';
                      //  wrapper.style.height = wrapper.style.width = '15pt';
                    }
                });
                document.querySelector(`.${temp}`).classList.remove('visible')
                document.querySelector(`.${temp}`).classList.add('hidden')
            }

            switch (menuName) {
                case 'projects':
                    document.querySelector('.projects').classList.remove('hidden');
                    document.querySelector('.projects').classList.add('visible');
                    currentPage = 'projects';
                    if (!swiperInit){
                        // init Swiper:
                        let swiper = new Swiper('.swiper-container', {
                            loop: true,
                            direction: 'vertical',
                            slidesPerView: 1,
                            spaceBetween: 0,
                            mousewheel: true,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',

                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                                dynamicBullets: true,
                            },
                            // autoplay: {
                            //     delay: 4000,
                            //     disableOnInteraction: true,
                            // },
                        });
                        swiperInit = true;
                    }
                    break;
                case 'about us':
                    document.querySelector(`.biographies`).classList.remove('hidden');
                    document.querySelector(`.biographies`).classList.add('visible');
                    currentPage = 'about us';
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

                mainLogo.style.width = "40%";
                mainLogo.style.height = "20%";
                // mainLogo.style.top = "6.5%";
                // mainLogo.style.left = "28%";
                if (window.innerWidth > 600) {
                    mainLogo.style.top = "17.5%";
                    mainLogo.style.left = "-38%";
                    mainFrame.style.height = '50%';
                }else {
                    mainLogo.style.top = "6.5%";
                    mainLogo.style.left = "-20%";
                }
               // document.querySelector('.tagLine').style.top = parseInt(window.getComputedStyle(document.querySelector('.tagLine'), null).getPropertyValue("top")) - 30 + 'px';
                document.querySelector('.tagLine').classList.add('hidden');
                isInHomePage = false;
            }
        });
    });

const linkEl = document.querySelectorAll('.email')

linkEl.forEach(function (item) {
    item.onmousedown = function(downEvent) {

        var clickedEl = downEvent.target;
        var mouseMoved = false;

        clickedEl.onmousemove = function() {

            // If user clicks then moves, select the whole link
            window.getSelection().selectAllChildren(clickedEl);

            // Set a flag to prevent opening the link
            mouseMoved = true;

            // Reset mousemove, else it'll run constantly
            clickedEl.onmousemove = null;

            // This is only to prevent having the text selection being dragged
            clickedEl.ondragstart = function(dragEvent) {
                dragEvent.preventDefault();
            }
        }

        if (mouseMoved) {
            // If mouse has moved, prevent default
            downEvent.preventDefault();
        }
    }

})



mainLogo.addEventListener('click', function (e) {
    console.log('click');
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
        mainLogo.style.top = "30%";
        mainLogo.style.left = "50%";
        //document.querySelector('.tagLine').style.top = parseInt(window.getComputedStyle(document.querySelector('.tagLine'), null).getPropertyValue("top")) + 30 + 'px';
        document.querySelector('.tagLine').classList.remove('hidden');
        document.querySelector('.tagLine').classList.add('visible');
        document.body.style.position = 'fixed';
        isInHomePage = true;
    }
    for (let menuBullet of menuBullets) {
            menuBullet.children[0].children[0].style.display = 'none';
            menuBullet.style.opacity = '1';
            menuBullet.classList.add("visible");
    }
    currentPage = null;
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
    .typeString('Art direction and production of video content, objects, sets, and installations.')
    .pauseFor(3000)
    .deleteAll(1)
    .typeString('Concepteurs et producteurs de contenu vidéo, d\'objets, de décors, et d\'installations.')
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









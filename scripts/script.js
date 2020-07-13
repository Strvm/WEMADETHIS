const mainLogo = document.querySelector('.mainFrame');
const menuBullets = [...document.querySelectorAll('.menuTab')];
const mainFrame = document.querySelector('.mainFrame');
const pointer = document.querySelector('.pointer');
const wrapper = document.querySelector('.cursor');
let isInBullet = false;
let isInHomePage = true;
let currentPage = null;


/*Hover dots*/
menuBullets.forEach(function(item) {
    item.addEventListener('mouseover', function(event){
        if (isInBullet)
            return;
        else
            isInBullet = true;
        const bullet = item.children[0];
        bullet.style.position = 'absolute';
        bullet.style.left = '14px';
        bullet.style.width = bullet.style.height = '11px';
        bullet.children[0].style.display = 'block';
        wrapper.style.height = wrapper.style.width = '22pt';
        pointer.classList.remove('visible');
        pointer.classList.add('hidden');
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
        bullet.style.left = '0%';
        if (window.innerWidth > 600)bullet.children[0].style.display = 'none';
        bullet.style.width = bullet.style.height = '10px';
        document.querySelector('.pointer').classList.remove('hidden')
        document.querySelector('.pointer').classList.add('visible')
        wrapper.style.height = wrapper.style.width = '15pt';
    });
});

    menuBullets.forEach(function (item) {
        item.addEventListener('click', function (event) {
            const menuName = item.children[0].children[0].innerText.toLowerCase();
            if (currentPage != null) {
                document.querySelector(`.${currentPage}`).classList.remove('visible')
                document.querySelector(`.${currentPage}`).classList.add('hidden')
            }
            switch (menuName) {
                case 'clients':
                    document.querySelector(`.${menuName}`).classList.remove('hidden');
                    document.querySelector(`.${menuName}`).classList.add('visible');
                    break;
                case 'about us':
                    document.querySelector(`.biographies`).classList.remove('hidden');
                    document.querySelector(`.biographies`).classList.add('visible');
                    break;
                case 'contact':
                    document.querySelector(`.${menuName}`).classList.remove('hidden');
                    document.querySelector(`.${menuName}`).classList.add('visible');
                    break;
            }
            for (let menuBullet of menuBullets) {
                if (menuBullet !== item)
                    menuBullet.style.opacity = '0.5';
                else
                    menuBullet.style.opacity = '1';

            }
            currentPage = menuName === 'about us' ? 'biographies' : menuName;
            if (window.innerWidth < 600) {
                document.body.style.position = 'relative';
                document.body.style.zIndex = '-300'
            }
            if (isInHomePage) {
                threeDcontainer.style.top = parseInt(window.getComputedStyle(threeDcontainer, null).getPropertyValue("top")) - 90 + 'px';
                mainFrame.style.top = parseInt(window.getComputedStyle(mainFrame, null).getPropertyValue("top")) - 90 + 'px';
                document.querySelector('.tagLine').style.top = parseInt(window.getComputedStyle(document.querySelector('.tagLine'), null).getPropertyValue("top")) - 30 + 'px';
                isInHomePage = false;
            }
        });
    });


mainLogo.addEventListener('click', function (e) {
    for (let elementNodeListOfElement of document.querySelectorAll('.pageSection')) {
        if (elementNodeListOfElement.classList.contains('visible')){
            elementNodeListOfElement.classList.remove('visible')
            elementNodeListOfElement.classList.add('hidden')
        }
    }
    if (!isInHomePage) {
        threeDcontainer.style.top = parseInt(window.getComputedStyle(threeDcontainer, null).getPropertyValue("top")) + 90 + 'px';
        mainFrame.style.top = parseInt(window.getComputedStyle(mainFrame, null).getPropertyValue("top")) + 90 + 'px';
        document.querySelector('.tagLine').style.top = parseInt(window.getComputedStyle(document.querySelector('.tagLine'), null).getPropertyValue("top")) + 30 + 'px';
        document.body.style.position = 'fixed';
        isInHomePage = true;
    }
    for (let menuBullet of menuBullets) {
            menuBullet.style.opacity = '1';
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
    delay:40,
    loop: true,
    deleteSpeed: 20
});


typeWriter
    .pauseFor(1000)
    .typeString('Art direction and production of video content, graphics, objects, sets, and installations.')
    .pauseFor(3000)
    .deleteAll()
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
    pointer.style.transform = `translate(${cursorPos.x + cursorOffset.x}px, ${cursorPos.y + cursorOffset.y}px)`;
})




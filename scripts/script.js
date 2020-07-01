const mainLogo = document.querySelector('.mainLogo');
const menuBullets = [...document.querySelectorAll('.menuTab')];
const mainFrame = document.querySelector('.mainFrame');
let isInBullet = false;
let isInHomePage = true;
let currentPage = null;

menuBullets.forEach(function(item) {
    item.addEventListener('mouseover', function(event){
        if (isInBullet)
            return;
        else
            isInBullet = true;
        const bullet = item.children[0];
        bullet.style.position = 'absolute';
        bullet.style.left = '14px';
        bullet.children[0].style.display = 'block';
        //bullet.children[0].setAttribute('data-aos', 'fade-right');
    });
});


menuBullets.forEach(function(item) {
    item.addEventListener('mouseleave', function(event){
        if (!isInBullet)
            return;
        else
            isInBullet = false;
        const bullet = item.children[0];
        bullet.style.position = 'relative';
        bullet.style.left = '0%';
        bullet.children[0].style.display = 'none';
    });
});

menuBullets.forEach(function(item) {
    item.addEventListener('click', function(event){
        const menuName = item.children[0].children[0].innerText.toLowerCase();
        if (currentPage != null){
            document.querySelector(`.${currentPage}`).classList.remove('visible')
            document.querySelector(`.${currentPage}`).classList.add('hidden')
        }
        switch (menuName) {
            case 'clients':
                document.querySelector(`.${menuName}`).classList.remove('hidden');
                document.querySelector(`.${menuName}`).classList.add('visible');
                break;
            case 'biography':
                document.querySelector(`.biographies`).classList.remove('hidden');
                document.querySelector(`.biographies`).classList.add('visible');
                break;
            case 'contact':
                document.querySelector(`.${menuName}`).classList.remove('hidden');
                document.querySelector(`.${menuName}`).classList.add('visible');
                break;
        }
        currentPage = menuName === 'biography' ? 'biographies' : menuName;
        if (isInHomePage) {
            mainFrame.style.top = parseInt(window.getComputedStyle(mainFrame, null).getPropertyValue("top")) - 90 + 'px';
            isInHomePage = false;
        }
        console.log(window.getComputedStyle(mainFrame, null).getPropertyValue("top"));
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
        mainFrame.style.top = parseInt(window.getComputedStyle(mainFrame, null).getPropertyValue("top")) + 90 + 'px';
        isInHomePage = true;
    }
});



const typeWriter = new Typewriter('.tagLine', {
 //   strings: ['Producers of video content, graphic identity, objects, sets and installations.', 'Producteurs de contenu vidéo, d\'identité graphique, d\'objets, de décors et d\'installations.'],
  //  autoStart: true,
    delay:80,
    loop: true,
});

typeWriter
    .pauseFor(1000)
    .typeString('Producers of video content, graphic identity, objects, sets and installations.')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Producteurs de contenu vidéo, d\'identité graphique, d\'objets, de décors et d\'installations.')
    .pauseFor(3000)
    .start();
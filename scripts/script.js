const menuBullets = [...document.querySelectorAll('.menuTab')];
let isInBullet = false;
console.log('logs');

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
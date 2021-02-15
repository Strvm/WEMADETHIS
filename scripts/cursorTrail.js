/*!
CREDITS
 * -- https://github.com/tholman/90s-cursor-effects
 */




(function fairyDustCursor() {

    // const possibleColors = ["#ffc1cc"];
    const possibleColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF"];
    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = {x: width / 2, y: width / 2};
    const particles = [];

    function init() {
        bindEvents();
        loop();
    }
    let disableParticles = false;
    document.querySelector(".menu").addEventListener('mouseover', function (event){
        disableParticles = true;
    })

    document.querySelector(".menu").addEventListener('mouseleave', function (event){
        disableParticles = false;
    })
    // Bind events that are needed
    function bindEvents() {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchstart', onTouchMove);

        window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;
    }

    function onTouchMove(e) {
        if( e.touches.length > 0 ) {
            for(let i = 0; i < e.touches.length; i++ ) {
                addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
            }
        }
    }

    function onMouseMove(e) {
        if (disableParticles)return;
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        //possibleColors[0] = "#" + e.clientX.toString(16) + e.clientY.toString(16);
        //document.querySelector('.tagLine').style.color = possibleColors[0];
        addParticle( cursor.x, cursor.y, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
    }

    function addParticle(x, y, color) {
        const particle = new Particle();
        particle.init(x, y, color);
        particles.push(particle);
    }

    function updateParticles() {

        // Updated
        for( let i = 0; i < particles.length; i++ ) {
            particles[i].update();
        }

        // Remove dead particles
        for( let i = particles.length -1; i >= 0; i-- ) {
            if( particles[i].lifeSpan < 50 ) {
                particles[i].die();
                particles.splice(i, 1);
            }
        }

    }

    function loop() {
        requestAnimationFrame(loop);
        updateParticles();
    }

    /**
     * Particles
     */
    let wowIndex = 0;
    let wow = false;
    function Particle() {

        // this.character = "wow";
        this.character = ["w", "o", "w"];
        this.lifeSpan = 90; //ms
        this.initialStyles ={
            "position": "absolute",
            "display": "block",
            "pointerEvents": "none",
            "z-index": "10000000",
            "font-size": "16px",
            "will-change": "transform"
        };

        // Init, and set properties
        this.init = function(x, y, color) {

            this.velocity = {
                x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };

            this.position = {x: x - 10, y: y - 20};
            this.initialStyles.color = color;

            this.element = document.createElement('span');
            if (wowIndex === 3)wowIndex = 0;
            this.element.innerHTML = this.character[wowIndex]
            wowIndex++;
            // if (!wow) {
            //     this.element.innerHTML = this.character[1]
            //     wow = true;
            // }else {
            //     this.element.innerHTML = this.character[0]
            //
            //     wow = false;
            // }
                    //this.element.innerHTML = this.character;
            this.element.style.fontSize = '90px'
            applyProperties(this.element, this.initialStyles);
            this.update();

            document.querySelector('.container').appendChild(this.element);
        };

        this.update = function() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;

            this.element.style.transform = "translate3d(" + (this.position.x + 7) + "px," + (this.position.y + 10)+ "px, 0) scale(" + (this.lifeSpan / 120) + ")";
        }

        this.die = function() {
            this.element.parentNode.removeChild(this.element);
        }

    }

    /**
     * Utils
     */

    // Applies css `properties` to an element.
    function applyProperties( target, properties ) {
        for(let key in properties ) {
            target.style[ key ] = properties[ key ];
        }
    }

    init();
})();
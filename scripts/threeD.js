//ThreeJS variables.
let scene, controls;
let renderer = new THREE.WebGLRenderer({alpha: true});
let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10);
let light = new THREE.PointLight(0xffffff, 1.1, 500, 1);
const fontLoader = new THREE.FontLoader();
let textGeometry, textMesh;
let isShifting = false;
let is3d = false;
const logo = document.querySelector('.mainLogo');
const threeDcontainer = document.querySelector('.threeDContainer');
let domEvents;

//Initialize ThreeJS
function init() {
    //Camera position
    camera.position.z = 4;
    scene = new THREE.Scene();
    renderer.setClearColor( 0x000000, 0 );
    //scene.background = new THREE.Color( 0xecf0f1 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls = new THREE.OrbitControls(camera, document.body);
    controls.enableKeys = controls.enableZoom = controls.enablePan = false;


    threeDcontainer.appendChild(renderer.domElement);
    domEvents	= new THREEx.DomEvents(camera, renderer.domElement);

    fontLoader.load('./scripts/test.json', function(font) {
        if (textMesh !== undefined) scene.remove(textMesh);
        textGeometry = new THREE.TextGeometry('we made\nthis.', {
            font: font,
            color: new THREE.Color( 0x231F20 ),
            size: 0.5,
            height: 0.1,
            curveSegments: 4,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0,
            bevelSegments: 3
        });
        textGeometry.center();
        const material = new THREE.MeshPhongMaterial({color: 0x231F20});
        textMesh = new THREE.Mesh(textGeometry, material);
        textMesh.position.y = textMesh.position.y + 1.2;
        scene.add(textMesh);
    });
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    light.position.copy(camera.position);
    scene.add(light);
    renderer.render(scene, camera);
}


document.querySelector(('.mainFrame')).addEventListener('click',function(event) {
    if (isShifting && !is3d){
        logo.classList.add('hidden');
        threeDcontainer.classList.remove('hidden');
        threeDcontainer.classList.add('visible');
        controls.reset();
        is3d = true;
    }else if (isShifting && is3d){
        logo.classList.remove('hidden');
        logo.classList.add('visible');
        threeDcontainer.classList.remove('visible');
        threeDcontainer.classList.add('hidden');
        controls.reset();
        is3d = false;
    }
})

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Shift')isShifting = true;
})

document.addEventListener('keyup', function(e) {
    if (e.key === 'Shift')isShifting = false;
})


init();
animate();
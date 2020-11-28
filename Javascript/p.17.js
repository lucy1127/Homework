var renderer, scene, camera;
var texture, mesh;
var angle = 0;

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 200;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);

  document.body.appendChild(renderer.domElement);
  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  floor = new THREE.Mesh (new THREE.PlaneGeometry(300,300), new THREE.MeshBasicMaterial());
  floor.rotation.x = -Math.PI/2;
  floor.position.y = -55;
  scene.add (floor);
  
  /////////////////////////////////////////////////////////////////////
  let loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  texture = loader.load('https://i.imgur.com/J0RenHB.png');

  var texMat = new THREE.MeshBasicMaterial({
    map: texture,
    //transparent: true
    alphaTest: 0.5
  });
  var hulk = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), texMat);
  scene.add(hulk);

  cube = new THREE.Mesh(new THREE.BoxGeometry(150, 100, 150), new THREE.MeshNormalMaterial())
  scene.add(cube)  
  cube.position.z = -120
}

function animate() {
  cube.rotation.y = angle
  angle += 0.005;
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}

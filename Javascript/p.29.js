var scene, renderer, camera;
var mesh, angle = 0;

init();
animate();

function loadCubemap() {

  var path = "https://threejs.org/examples/textures/cube/SwedishRoyalCastle/";
  var format = '.jpg';
  var urls = [
    path + 'px' + format, path + 'nx' + format,
    path + 'py' + format, path + 'ny' + format,
    path + 'pz' + format, path + 'nz' + format
  ];
  var loader = new THREE.CubeTextureLoader();
  loader.setCrossOrigin ('');
  var cubeMap = loader.load(urls);
  cubeMap.format = THREE.RGBFormat;
  return cubeMap;
  
}

function init() {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 100;
  let controls = new THREE.OrbitControls(camera, renderer.domElement);

	var cubeMap = loadCubemap();
  scene.background = cubeMap;
  
  var light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  var geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  //var geometry = new THREE.SphereGeometry (10, 30, 30);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    envMap: cubeMap
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener('resize', onWindowResize, false);
}



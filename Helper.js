




var camera, scene, renderer;
var p1, p2;
var move;
// for animate()
var alpha = 0;
// for animate2()
var v, ds, moveTo, stepNum, steps;

init();
animate2();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set (0, 300, 500);
  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);

  ////////////////////////////////////////////////////////////////
  p1 = new THREE.Vector3(-20, 0, 40);
  p2 = new THREE.Vector3 (30, 0, 0);
  var point1 = new THREE.Mesh (new THREE.CircleGeometry (10,20), new THREE.MeshBasicMaterial({color:'white'}));
  var point2 = new THREE.Mesh (new THREE.CircleGeometry (10,20), new THREE.MeshBasicMaterial({color:'yellow'}));
  point1.position.copy (p1); point1.rotation.x = -Math.PI/2;
  point2.position.copy (p2); point2.rotation.x = -Math.PI/2

	move = new THREE.Mesh (new THREE.CircleGeometry (10,20), new THREE.MeshBasicMaterial({color:'cyan'}));
  move.rotation.x = -Math.PI/2;
  scene.add (point1, point2, move)
  
  /////////////////
  // for animate2()
  v = p2.clone().sub(p1); // v = p2 - p1
  ds = 0.31;
  steps = Math.floor(v.length()/ds);
  moveTo = p1.clone();
  stepNum = 0;
}

function animate2() {

	moveTo = moveTo.clone().add (v.clone().setLength(ds))
	stepNum++;
  if (stepNum > steps)
		move.position.copy (p2);
  else 
  	move.position.copy (moveTo);
	requestAnimationFrame(animate2);
  renderer.render(scene, camera);

}

//
// the version using lerp (linear interpolation)
//
function animate() {
  alpha += 0.01;
	if (alpha > 1) alpha = 1;
  
	move.position.copy (p1.clone().lerp (p2, alpha));
	requestAnimationFrame(animate);
  renderer.render(scene, camera);

}

//import * as THREE from "https://threejs.org/build/three.module.js";
//import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

//var camera, scene, renderer;
//var p1, p2, p3;
//var truck;

var steps, numStep, moveTo;
var theta1, theta2, dq;

//init();
//animate();

/*function buildTruck() {
	var truck = new THREE.Group();

  var base = new THREE.Mesh (new THREE.BoxGeometry(20,5,30), new THREE.MeshNormalMaterial());
  var head = new THREE.Mesh (new THREE.BoxGeometry(20,10,10), new THREE.MeshBasicMaterial ({color:'white', transparent: true, opacity:0.5}));
  base.position.set (0,2.5,-15);
  head.position.set (0,10,-5);
  truck.add (base, head)

	return truck;
}*/

function init() {

  /*scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set (0, 300, 500);
  let controls = new OrbitControls(camera, renderer.domElement);

  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);*/

  ////////////////////////////////////////////////////////////////
  /*p1 = new THREE.Vector3(-20, 0, 40);
  p2 = new THREE.Vector3 (30, 0, 0);
  p3 = new THREE.Vector3 (60, 0, 40);
  
  var point1 = new THREE.Mesh (new THREE.CircleGeometry (10,20), new THREE.MeshBasicMaterial({color:'white'}));
  var point2 = new THREE.Mesh (new THREE.CircleGeometry (10,20), new THREE.MeshBasicMaterial({color:'yellow'}));
  var point3 = new THREE.Mesh (new THREE.CircleGeometry (10,20), new THREE.MeshBasicMaterial({color:'cyan'}));
  point1.position.copy (p1); point1.rotation.x = -Math.PI/2;
  point2.position.copy (p2); point2.rotation.x = -Math.PI/2;
  point3.position.copy (p3); point3.rotation.x = -Math.PI/2;

  scene.add (point1, point2, point3);

  truck = buildTruck();
  scene.add (truck);*/
  ////////////////////////////
  
  var p12 = p2.clone().sub(p1);   // p12 = p2 - p1
  theta1 = Math.atan2 (p12.x, p12.z);
  truck.position.copy (p2);
  truck.rotation.y = theta1;

  var p23 = p3.clone().sub(p2);   // p23 = p3 - p2
  theta2 = Math.atan2 (p23.x, p23.z);

	dq = 0.01;
  
  steps = Math.floor ((theta2-theta1)/dq);
  if (theta1 > theta2) {
  	steps = -steps;
    dq = -dq;
  }
  
  // debugger;
  numStep = 0;
  moveTo = theta1;
}


function animate() {
	
  if (numStep > steps)
  	truck.rotation.y = theta2;
  else {
		truck.rotation.y = moveTo; 
		++numStep;
		moveTo += dq;
	}
  
  //requestAnimationFrame(animate);
  //renderer.render(scene, camera);

}

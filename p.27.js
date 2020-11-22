var camera, scene, renderer;
var count = 0;
var mesh;

init();
animate();

function buildGeometry() {
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-15, -15, 0),
    new THREE.Vector3(15, -15, 0),
    new THREE.Vector3(15, 15, 0),
    new THREE.Vector3(-15, 15, 0)
  );

  var face;
  face = new THREE.Face3(0, 1, 2);
  geometry.faces.push(face);
  face = new THREE.Face3(0, 2, 3);
  geometry.faces.push(face);

  st0 = new THREE.Vector2(0, 0.5);
  st1 = new THREE.Vector2(0.25, 0.5);
  st2 = new THREE.Vector2(0.25, 1);
  st3 = new THREE.Vector2(0, 1);
  geometry.faceVertexUvs[0].push([st0, st1, st2]);
  geometry.faceVertexUvs[0].push([st0, st2, st3]);

  geometry.computeBoundingSphere();
  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  return geometry;
}

function init() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-50, 50, 50, -50, -10, 100);
  camera.position.z = 10;
  scene.add(camera);

  ////////////////////////////////////////////////////////////
  // instantiate a loader
  var loader = new THREE.TextureLoader();

  // load a resource
  loader.load(
    // resource URL
    'https://i.imgur.com/MOr0Ycf.jpg',
    // Function when resource is loaded
    function(texture) {
      // do something with the texture
      // Plane with default texture coordinates [0,1]x[0,1]
      var texMat = new THREE.MeshBasicMaterial({
        map: texture
      });
      mesh = new THREE.Mesh(buildGeometry(), texMat);
      scene.add(mesh);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    },
		undefined,
    // Function called when download errors
    function(xhr) {
      console.log('An error happened');
    }
  );

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function textureAnimate() {
  if (mesh) {
    var texture = mesh.material.map;
    texture.offset.x += 0.25;
    if (texture.offset.x === Math.floor(texture.offset.x))
      texture.offset.y += 0.5;
  }
}

function animate() {
  count++;
  if (count % 18 === 0) {  // a crude way to set animation frequency
    textureAnimate();
  }
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}

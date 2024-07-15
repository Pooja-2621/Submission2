function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const measurements = {
      height: document.getElementById('height').value,
      weight: document.getElementById('weight').value,
      shoulder: document.getElementById('shoulder').value,
      hands: document.getElementById('hands').value,
      biceps: document.getElementById('biceps').value,
      chest: document.getElementById('chest').value,
      waist: document.getElementById('waist').value,
      thigh: document.getElementById('thigh').value,
      legs: document.getElementById('legs').value,
      foot: document.getElementById('foot').value
    };

    // Store the measurements in local storage
    localStorage.setItem('measurements', JSON.stringify(measurements));

    // Redirect to the new page
    window.location.href = '/Myntraclone/clone.html';
  }
// creating scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
// loader
const loader = new GLTFLoader();
loader.load('./Myntraclone/BaseMesh.glb', function (gltf) {
    scene.add(gltf.scene);
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
loader.load('./Myntraclone/BaseMesh.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Check the bounding box
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    console.log('Model size:', size);

    // Adjust the scale and position if necessary
    model.scale.set(0.1, 0.1, 0.1); // Example: Scale down the model
    model.position.set(0, 0, 0); // Example: Center the model
});










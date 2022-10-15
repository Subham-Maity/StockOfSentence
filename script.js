"use strict";
/* globals THREE, $, TweenLite, Power3, TimelineMax  */

let camera, scene, renderer;// Animation loop function
let plane;// Animation loop function
let raycaster = new THREE.Raycaster();// Animation loop function
let normalizedMouse = {// Animation loop function
  x: 0,
  y: -180 };


// let lightBlue = {
// 	r: 34,
// 	g: 183,
// 	b: 236
// };

let darkBlue = {
  r: 0,
  g: 52,
  b: 74 };


let baseColorRGB = darkBlue;// Animation loop function function animate() {
let baseColor = "rgb(" + baseColorRGB.r + "," + baseColorRGB.g + "," + baseColorRGB.b + ")";
let nearStars, farStars, farthestStars;//


function init() {// Create a scene and a camera let width = window.innerWidth;
  scene = new THREE.Scene();// Create camera and set position and FOV (field of view)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);// Create a renderer and set size
  renderer = new THREE.WebGLRenderer();// Set the size of the renderer to the size of the window



  // Scene initialization
  camera.position.z = 50;


  renderer.setClearColor("#121212", 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  document.body.appendChild(renderer.domElement);

  // Lights
  let topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(0, 1, 1).normalize();
  scene.add(topLight);

  let bottomLight = new THREE.DirectionalLight(0xffffff, 0.4);
  bottomLight.position.set(1, -1, 1).normalize();
  scene.add(bottomLight);

  let skyLightRight = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightRight.position.set(-1, -1, 0.2).normalize();
  scene.add(skyLightRight);

  let skyLightCenter = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightCenter.position.set(-0, -1, 0.2).normalize();
  scene.add(skyLightCenter);

  let skyLightLeft = new THREE.DirectionalLight(0x666666, 0.2);
  skyLightLeft.position.set(1, -1, 0.2).normalize();
  scene.add(skyLightLeft);



  // Mesh creation
  let geometry = new THREE.PlaneGeometry(400, 400, 70, 70);
  let darkBlueMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide, vertexColors: THREE.FaceColors });

  geometry.vertices.forEach(function (vertice) {
    vertice.x += (Math.random() - 0.5) * 4;
    vertice.y += (Math.random() - 0.5) * 4;
    vertice.z += (Math.random() - 0.5) * 4;
    vertice.dx = Math.random() - 0.5;
    vertice.dy = Math.random() - 0.5;
    vertice.randomDelay = Math.random() * 5;
  });

  for (var i = 0; i < geometry.faces.length; i++) {
    geometry.faces[i].color.setStyle(baseColor);
    geometry.faces[i].baseColor = baseColorRGB;
  }


  plane = new THREE.Mesh(geometry, darkBlueMaterial);
  scene.add(plane);



  // Create stars
  farthestStars = createStars(1200, 420, "#0952BD");
  farStars = createStars(1200, 370, "#A5BFF0");
  nearStars = createStars(1200, 290, "#118CD6");

  scene.add(farthestStars);
  scene.add(farStars);
  scene.add(nearStars);

  farStars.rotation.x = 0.25;
  nearStars.rotation.x = 0.25;

  // Uncomment for testing second camera position
  // camera.rotation.x = Math.PI / 2;
  // camera.position.y = -0;
  // camera.position.z = 20;
  // plane.scale.x = 2;

}


function createStars(amount, yDistance, color = "0x000000") {
  let opacity = Math.random();
  let starGeometry = new THREE.Geometry();
  let starMaterial = new THREE.PointsMaterial({ color: color, opacity: opacity });

  for (let i = 0; i < amount; i++) {
    let vertex = new THREE.Vector3();
    vertex.z = (Math.random() - 0.5) * 1500;
    vertex.y = yDistance;
    vertex.x = (Math.random() - 0.5) * 1500;

    starGeometry.vertices.push(vertex);
  }


  return new THREE.Points(starGeometry, starMaterial);
}


let timer = 0;


function render() {
  requestAnimationFrame(render);


  timer += 0.01;
  let vertices = plane.geometry.vertices;

  for (let i = 0; i < vertices.length; i++) {
    // Ease back to original vertice position while still maintaining sine wave
    vertices[i].x -= Math.sin(timer + vertices[i].randomDelay) / 40 * vertices[i].dx;
    vertices[i].y += Math.sin(timer + vertices[i].randomDelay) / 40 * vertices[i].dy;
    // ((vertices[i].x - vertices[i].originalPosition.x) * 0.1) +
  }

  // Determine where ray is being projected from camera view
  raycaster.setFromCamera(normalizedMouse, camera);

  // Send objects being intersected into a variable
  let intersects = raycaster.intersectObjects([plane]);// If there is an intersection, change the color of the face to a random color

  if (intersects.length > 0) {// Get the face that is being intersected

    let faceBaseColor = intersects[0].face.baseColor;// Change the color of the face to a random color

    plane.geometry.faces.forEach(function (face) {// Animation loop function face.color.r = faceBaseColor.r + Math.sin(timer) * 10;
      face.color.r *= 255;
      face.color.g *= 255;
      face.color.b *= 255;

      face.color.r += (faceBaseColor.r - face.color.r) * 0.01;// face.color.g = faceBaseColor.g + Math.sin(timer) * 10; -> here face.color means the color of the face, and faceBaseColor means the color of the face before the mouse is over it.
      face.color.g += (faceBaseColor.g - face.color.g) * 0.01;// face.color.b = faceBaseColor.b + Math.sin(timer) * 10; -> here face.color means the color of the face, and faceBaseColor means the color of the face before the mouse is over it.
      face.color.b += (faceBaseColor.b - face.color.b) * 0.01;// face.color.r = faceBaseColor.r + Math.sin(timer) * 10; -> here face.color means the color of the face, and faceBaseColor means the color of the face before the mouse is over it.

      let rInt = Math.floor(face.color.r);// face.color.g = faceBaseColor.g + Math.sin(timer) * 10; -> here face.color means the color of the face, and faceBaseColor means the color of the face before the mouse is over it.
      let gInt = Math.floor(face.color.g);// face.color.b = faceBaseColor.b + Math.sin(timer) * 10; -> here face.color means the color of the face, and faceBaseColor means the color of the face before the mouse is over it.
      let bInt = Math.floor(face.color.b);// face.color.r = faceBaseColor.r + Math.sin(timer) * 10; -> here face.color means the color of the face, and faceBaseColor means the color of the face before the mouse is over it.

      let newBasecol = "rgb(" + rInt + "," + gInt + "," + bInt + ")";//
      face.color.setStyle(newBasecol);//
    });
    plane.geometry.colorsNeedUpdate = true;// Change the color of the face to a random color

    intersects[0].face.color.setStyle("#006ea0");// Change the color of the face to a random color
    plane.geometry.colorsNeedUpdate = true;// Change the color of the face to a random color

  }



  plane.geometry.verticesNeedUpdate = true;// Tell three.js that the vertices have changed and need to be updated in the scene graph (otherwise the changes won't be visible)
  plane.geometry.elementsNeedUpdate = true;// Tell three.js that the faces have changed and need to be updated in the scene graph (otherwise the changes won't be visible)

  farthestStars.rotation.y -= 0.00001;
  farStars.rotation.y -= 0.00005;
  nearStars.rotation.y -= 0.00011;


  renderer.render(scene, camera);// Render the scene
}

init();

window.addEventListener("resize", function () {// on window resize, update the camera and renderer size

  camera.aspect = window.innerWidth / window.innerHeight;//window.innerWidth / window.innerHeight; // 16 / 9; //window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();// Update camera projection matrix when window is resized to prevent distortion of scene
  renderer.setSize(window.innerWidth, window.innerHeight);//, false); // false = no antialiasing (faster)

});

window.addEventListener("mousemove", function (event) {

  // Normalize mouse coordinates
  normalizedMouse.x = event.clientX / window.innerWidth * 2 - 1;
  normalizedMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

});
// window.addEventListener("click", function (event) { console.log(event); }); // Uncomment for testing mouse coordinates in console
let introContainer = $('.intro-container');
let skyContainer = $('.sky-container');
let xMark = $('.x-mark');


$('.shift-camera-button').click(function () {
  let introTimeline = new TimelineMax();
//   introTimeline.to(introContainer, 1, { opacity: 0, display: "none" }); // Hide intro container and show sky container with animation
  introTimeline.add([
    TweenLite.fromTo(introContainer, 0.5, { opacity: 1 }, { opacity: 0, ease: Power3.easeIn }),// Hide intro container and show sky container with animation
    TweenLite.to(camera.rotation, 3, { x: Math.PI / 2, ease: Power3.easeInOut }),// Rotate camera to new position
    TweenLite.to(camera.position, 2.5, { z: 20, ease: Power3.easeInOut }),// Move camera to new position
    TweenLite.to(camera.position, 3, { y: 120, ease: Power3.easeInOut }),// Move camera to new position
    TweenLite.to(plane.scale, 3, { x: 2, ease: Power3.easeInOut })]);// Scale plane to new position

//   introTimeline.add(TweenLite.to(introContainer, 0.5, { opacity: 0, ease: Power3.easeIn }));
  introTimeline.add([
    TweenLite.to(xMark, 2, { opacity: 1, ease: Power3.easeInOut }),
    TweenLite.to(skyContainer, 2, { opacity: 1, ease: Power3.easeInOut })]);

});

// Create a new instance of a pixi stage and renderer and add the renderer view element to the DOM
$('.x-mark').click(function () {// Hide sky container and show intro container with animation
  let outroTimeline = new TimelineMax();// Hide sky container and show intro container with animation
//   TweenLite.to(camera.rotation, 3, { x: 0, ease: Power3.easeInOut });
  outroTimeline.add([
    TweenLite.to(xMark, 0.5, { opacity: 0, ease: Power3.easeInOut }),
    TweenLite.to(skyContainer, 0.5, { opacity: 0, ease: Power3.easeInOut }),
    TweenLite.to(camera.rotation, 3, { x: 0, ease: Power3.easeInOut }),
    TweenLite.to(camera.position, 3, { z: 50, ease: Power3.easeInOut }),
    TweenLite.to(camera.position, 2.5, { y: 0, ease: Power3.easeInOut }),
    TweenLite.to(plane.scale, 3, { x: 1, ease: Power3.easeInOut })]);


  outroTimeline.add([// TweenLite.to(introContainer, 0.5, { opacity: 1, ease: Power3.easeIn })
    TweenLite.to(introContainer, 0.5, { opacity: 1, ease: Power3.easeIn })]);// TweenLite.to(introContainer, 0.5, { opacity: 1, ease: Power3.easeIn })

});

render();// Render the scene


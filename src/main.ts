import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Scene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const canvas = document.querySelector('#scene') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
    this.init();
    
    // Mobile optimizations
    this.setupMobileControls();
  }

  private setupMobileControls() {
    // Separate desktop and mobile controls
    if ('ontouchstart' in window) {
      // Touch device settings
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.rotateSpeed = 0.5;
      this.controls.touches = {
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN
      };
    } else {
      // Desktop mouse settings
      this.controls.enableDamping = false;
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.0;
      this.controls.panSpeed = 1.0;
    }

    // Common settings for both
    this.controls.enableZoom = true;
    this.controls.enablePan = true;

    // Handle device orientation if available
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        if (event.beta && event.gamma) {
          // Optional: Add device orientation controls
          // this.handleDeviceOrientation(event);
        }
      });
    }
  }

  private init() {
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    this.scene.add(directionalLight);

    // Position camera
    this.camera.position.z = 5;

    // Add sample cube (replace with your 3D model)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Update renderer for mobile
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  public loadModel(path: string) {
    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        this.scene.add(gltf.scene);
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }
}

// Initialize scene
new Scene();

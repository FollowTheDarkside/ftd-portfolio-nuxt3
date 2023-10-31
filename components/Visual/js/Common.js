import * as THREE from "three";

class Common{
    constructor(){
        this.scene = null;
        this.camera = null;
        this.renderer = null;

        this.size = {
            windowW: null,
            windowH: null
        };
        this.windowOuterH = null;

        this.clock = null;

        this.time = {
            total: null,
            delta: null
        };
    }

    init($canvas){
        const nuxtApp = useNuxtApp()
        console.log("eventbus:", nuxtApp);
        nuxtApp.$bus.$on("TRANSITION", this.onTransition.bind(this));

        this.setSize();
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            45, 
            this.size.windowW / this.size.windowH,
            0.1, 
            10000
        );
        this.camera.position.set(0, 0, 150);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.cameraPositionTarget = {
            value: new THREE.Vector3(0, 0, 150)
        };

        // Display coordinate axis for debug
        // var axes = new THREE.AxesHelper(100);
        // this.scene.add(axes);

        // Create light
        const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        this.scene.add(directionalLight);

        this.renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
            // alpha: true, // for transparent background
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer.setClearColor(0xfafafa); // base white color: e6e6e6<f0f0f0<f4f4f4<fafafa
        //this.renderer.setClearColor(0x000000, 0); // for transparent background
        this.renderer.setSize(this.size.windowW, this.size.windowH);

        this.clock = new THREE.Clock();
        this.clock.start();
    }

    setSize(){
        this.size = {
            windowW: window.innerWidth,
            windowH: window.innerHeight
        }
        this.windowOuterH = window.outerHeight;
    }

    resize(){
        /*
        NOTE: 
        In Safari on iOS, 
        resize is called depending on whether the floating address bar is displayed, 
        and the background visual may move up or down. 
        This is to ensure that the background does not change depending on the presence or absence of the address bar.
        */
        if(window.outerHeight != this.windowOuterH || window.innerWidth != this.size.windowW){
            this.setSize();
            this.camera.aspect = this.size.windowW / this.size.windowH;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.size.windowW, this.size.windowH);
        }
    }

    render(){
        this.time.delta = this.clock.getDelta();
        this.time.total += this.delta;

        const easing = Math.min(1.0, 3.5 * this.time.delta)
        this.camera.position.lerp(this.cameraPositionTarget.value, easing);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.renderer.render(this.scene, this.camera);
    }

    onTransition(path){
        console.log("path:",path);
        switch(path){
            case "index": 
                this.cameraPositionTarget.value.set(0,0,150);
                break;

            case "about":
                this.cameraPositionTarget.value.set(0,0,100);
                break;

            case "info":
                this.cameraPositionTarget.value.set(0,0,50);
                break;
            
            case "contact":
                this.cameraPositionTarget.value.set(0,0,200);
                break;

            case path.startsWith('works') && path:
                // Randomly set the camera position when moving to the work page
                const posRange = 300;
                this.cameraPositionTarget.value.set(posRange*(Math.random()-0.5), posRange*(Math.random()-0.5), posRange*Math.random()*0.5);
                this.camera.lookAt(new THREE.Vector3(0, 0, 0));
                break;

            default:
                this.cameraPositionTarget.value.set(0,0,150);
                break;

        }
    }
}

export default new Common();

import * as THREE from "three";
import Common from "./Common";

import vertexSource from './glsl/vertex.glsl?raw'
import fragmentSource from './glsl/fragment.glsl?raw'

export default class Shape{
    constructor(){
        this.init();
    }

    init(){
        console.log("Three.js shape init...")

        const nuxtApp = useNuxtApp()
        nuxtApp.$bus.$on("TRANSFORM", this.onTransform.bind(this));
        this.pointSizeTarget = 5.0;
        this.pointScaleTarget = 1.0;

        const fractalWidth = 5;
        const fractalMesh = 75;
        const fractalStep = 2*fractalWidth/fractalMesh;
        const vertices = [];
        const colors = [];
        const sequenceIndex = 4; // maybe good 3~8
        const thresholdForDivergence = Math.pow(10.0*100000000000000000.0, 5);
        const expandValue = 15;
        let countBreak = 0;
        let longestDist = 0.0;

        // Init fractal points
        let fractalSequence = new Array(sequenceIndex+1);
        for(let i = 0; i < fractalSequence.length; i++) {
            fractalSequence[i] = new Array(3).fill(0);
        }

        // Find points that do not diverge by increasing the sequenceIndex
        for (let a=-fractalWidth; a<=fractalWidth; a+=fractalStep){
            for (let b=-fractalWidth; b<=fractalWidth; b+=fractalStep){
                for (let c=-fractalWidth; c<=fractalWidth; c+=fractalStep){
                    for(let i=0; i<sequenceIndex; i++){ // index: n
                        [fractalSequence[i][0], fractalSequence[i][1], fractalSequence[i][2]] = this.mandelbulb(fractalSequence[i][0], fractalSequence[i][1], fractalSequence[i][2]);
                        fractalSequence[i+1][0] = fractalSequence[i][0] + a;
                        fractalSequence[i+1][1] = fractalSequence[i][1] + b;
                        fractalSequence[i+1][2] = fractalSequence[i][2] + c;
                        // Whether to diverge to infinity
                        if(fractalSequence[i][0]*fractalSequence[i][0]+fractalSequence[i][1]*fractalSequence[i][1]+fractalSequence[i][2]*fractalSequence[i][2]>thresholdForDivergence){
                            countBreak += 1;
                            break;
                        }
                        // Add points as belonging to the Mandelbrot set when they do not diverge
                        if (i==(sequenceIndex-1)) {
                            //console.log("add point-xyz: ",a,b,c)
                            let currentDist = this.getDistance(0,0,0, a,b,c) * expandValue;
                            if(currentDist > longestDist) longestDist = currentDist;
                            //vertices.push(a, b, c);
                            vertices.push(a*expandValue, b*expandValue, c*expandValue);
                            //colors.push((fractalWidth+c)/(fractalWidth*2), 1, 1);
                            //colors.push(0.0, 0.0, currentDist/(fractalWidth*expandValue));
                            colors.push(currentDist/(fractalWidth*expandValue), 0.1, 1.0); // for HSV
                        }
                    }
                }
            }
        }
        console.log("vertices length:", vertices.length)
        console.log("countBreak:", countBreak)
        console.log("longestDist:", longestDist)

        // Create geometry & Set attribute
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

        // Get page scroll
        this.shift = window.pageYOffset;
        this.prevShift = window.pageYOffset;
        window.addEventListener('scroll', () => {
            //console.log("scrolled...");
            this.shift += Math.abs(window.pageYOffset-this.prevShift);
            this.prevShift = window.pageYOffset;
        });

        // Create texture for points
        const createTexture =  function() {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            let grad = null;
            let texture = null;
         
            canvas.width = 128;
            canvas.height = 128;

            // // For radial gradient
            // grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
            // grad.addColorStop(0,   'rgba(100,100,100,1.0)');
            // grad.addColorStop(0.3, 'rgba(125,125,125,0.7)');
            // grad.addColorStop(0.6, 'rgba(150,150,150,0.3)');
            // grad.addColorStop(1,   'rgba(250,250,250,0.0)');
            // ctx.fillStyle = grad;

            // For fill color
            ctx.fillStyle = 'rgba(100,100,100,1.0)';

            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fill();
         
            texture = new THREE.Texture(canvas);
            texture.minFilter = THREE.NearestFilter;
            texture.needsUpdate = true;
            return texture;
        };

        // Set uniform variable
        this.uniforms = {
            time: {
                type: 'f',
                value: 0.0
            },
            size: {
                type: 'f',
                value: 5.0
            },
            scale: {
                type: 'f',
                value: 0.0 //Scale up when init finishes and update is called for the first time, for the performance when the page is loaded for the first time.
            },
            longestDist: {
                type: 'f',
                value: longestDist
            },
            shift: {
                type: 'f',
                value: 0
            },
            tex: {
                type: 't',
                value: createTexture()
            }
        };

        // Set shader material
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexSource,
            fragmentShader: fragmentSource,
            transparent: true,
            depthWrite: true,
            blending: THREE.NormalBlending
        });

        // Create points & Add to scene
        this.mesh = new THREE.Points(geometry, material);
        Common.scene.add(this.mesh);
    }

    update(){
        // Update shift param by page scroll
        this.shift -= 1.5;
        if(this.shift<0){
            this.shift = 0;
        }else if(this.shift>150){
            this.shift = 150;
        }
        this.uniforms.shift.value = this.shift*0.0002;

        this.mesh.rotation.y += Common.time.delta*0.25 + this.shift*0.0001;
        this.uniforms.time.value += Common.time.delta*2.0;

        let interpolationFactor = 0.01;
        this.uniforms.size.value = THREE.MathUtils.lerp(this.uniforms.size.value, this.pointSizeTarget, interpolationFactor);
        this.uniforms.scale.value = THREE.MathUtils.lerp(this.uniforms.scale.value, this.pointScaleTarget, interpolationFactor);

        // this.mesh.geometry.attributes.position.needsUpdate = true;
        // this.mesh.geometry.attributes.color.needsUpdate = true;
    }

    mandelbulb(x, y, z){
        let [x2, y2, z2] = [x, y, z];
        if(x2==0 && y2==0){
            // x2 = 0;
            // y2 = 0;
            z2=(z2) * ((z2)*(z2) - 3*(x2)*(x2) - 3*(y2)*(y2));
        }else{
            //(3 z^2 - x^2 - y^2) x (x^2 - 3 y^2)/(x^2 + y^2)
            //(3 z^2 - x^2 - y^2) y (3 x^2 - y^2)/(x^2 + y^2)
            //z (z^2 - 3 x^2 - 3 y^2)
            x2 = (3*(z2)*(z2)-(x2)*(x2)-(y2)*(y2))*(x2)*((x2)*(x2)-3*(y2)*(y2))/((x2)*(x2)+(y2)*(y2));
            y2 = (3*(z2)*(z2)-(x2)*(x2)-(y2)*(y2))*(y2)*(3*(x2)*(x2)-(y2)*(y2))/((x2)*(x2)+(y2)*(y2));
            z2 = z2*((z2)*(z2)-3*(x2)*(x2)-3*(y2)*(y2));
            
        }
        //console.log("mandelbulb-return:",x2, y2, z2)
        return [x2, y2, z2];
    }

    getDistance(x1, y1, z1, x2, y2, z2){
        return Math.sqrt( Math.pow( x2-x1, 2 ) + Math.pow( y2-y1, 2 ) + Math.pow( z2-z1, 2 )) 
    }

    onTransform(isEnabled){
        //console.log("onTransform:", isEnabled);
        if(isEnabled){
            this.pointSizeTarget = 10.0;
            this.pointScaleTarget = 5.0;
        }else{
            this.pointSizeTarget = 5.0;
            this.pointScaleTarget = 1.0;
        }
    }
}

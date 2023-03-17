//import * as THREE from "three";
import Common from "./Common.js";
import Shape from "./Shape.js"

export default class Sketch{
    constructor(props){
        this.props = props;
        this.init();
    }
    init(){
        Common.init(this.props.$canvas);
        this.shape = new Shape();
        window.addEventListener("resize", this.resize.bind(this));
        this.loop();
    }
    resize(){
        Common.resize();
    }

    loop(){
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }

    render(){
        this.shape.update();
        Common.render();
    }
}
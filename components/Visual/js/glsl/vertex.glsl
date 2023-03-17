//attribute vec3 position;
attribute vec3 color;

uniform float time;
uniform float size;
uniform float longestDist;

varying vec4 vMvPosition;
varying vec3 vPosition;
varying vec3 vColor;

void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vMvPosition = mvPosition;
    vPosition = position;
    vColor = color;

    float cycle = sin(radians(time * 10.0));
    float dist = distance(vec3(0), vPosition);

    //gl_PointSize = size;
    //gl_PointSize = (size + ((1.0+sin(radians(time * 2.0))) * 10.0)) * (100.0 / length(mvPosition.xyz));
    gl_PointSize = size * (0.5+0.5*cycle) * (1.0-dist/longestDist);
    
    gl_Position = projectionMatrix * mvPosition;
}
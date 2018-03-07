svg = document.getElementById("svg_id");
button = document.getElementById("button");

var drawCircle = function(x, y){
    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir.setAttribute("cx", x);
    cir.setAttribute("cy", y);
    cir.setAttribute("r", 10);
    cir.addEventListener("click", changeColor);
    svg.appendChild(cir);
};

var changeColor = function(){
    event.stopPropagation();
    this.setAttribute("fill", "green");
    this.addEventListener("click", function(){
	svg.removeChild(this);
	drawCircle(Math.random() * 500, Math.random() * 500);
    });
};

svg.addEventListener("click", function(){
    drawCircle(event.offsetX, event.offsetY);
});

button.addEventListener("click", function(){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
});

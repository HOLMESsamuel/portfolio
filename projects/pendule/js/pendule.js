//variables declaration
var d2Theta1 = 0;
var d2Theta2 = 0;
var dTheta1  = 0;
var dTheta2  = 0;
var m1 = document.getElementById("mass1").value;
var m2 = document.getElementById("mass2").value;
var Theta1 = document.getElementById("Theta1").value*(Math.PI)/180;
var Theta2 = document.getElementById("Theta2").value*(Math.PI)/180;
var l1     = 150;
var l2     = 150;
const X0     = 400;
const Y0     = 350;
var g      = 9.81;
const time   = 0.05; //intevalle de temps entre deux evenements

var canvas  = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var init    = {};
const go = document.getElementById("go");

var parameters = document.getElementsByClassName("parameter");
for (var i = 0; i < parameters.length; i++) {
  //permat de recuperer les valeurs du tableau de commande
  parameters[i].addEventListener('click',function(){
    m1 = document.getElementById("mass1").value;
    m2 = document.getElementById("mass2").value;
    Theta1 = document.getElementById("Theta1").value*(Math.PI)/180;
    Theta2 = document.getElementById("Theta2").value*(Math.PI)/180;
    g = document.getElementById("g").value;
    l1 = document.getElementById("l1").value;
    l2 = document.getElementById("l2").value;
    var d2Theta1 = 0;
    var d2Theta2 = 0;
    var dTheta1  = 0;
    var dTheta2  = 0;

    clearInterval(init);

    context.clearRect(0, 0, canvas.width, canvas.height);

    var myCircle1 = {x: X0+l1*Math.sin(Theta1), y: Y0+l1*Math.cos(Theta1), mass: m1};
    var myCircle2 = {x: X0+l1*Math.sin(Theta1)+l2*Math.sin(Theta2), y: Y0+l1*Math.cos(Theta1)+l2*Math.cos(Theta2), mass: m2};
    var myLine1 = {x0: X0, y0: Y0, x: myCircle1.x, y: myCircle1.y};
    var myLine2 = {x0: myCircle1.x, y0: myCircle1.y, x: myCircle2.x, y: myCircle2.y};

    drawLine(myLine1, context);
    drawLine(myLine2, context);
    drawCircle(myCircle1, context);
    drawCircle(myCircle2, context);
  })
}



function drawCircle(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.mass, 0, 2 * Math.PI, false);
  context.fillStyle = '#000';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'black';
  context.stroke();
}

function drawLine(myLine, context) {
  context.beginPath();
  context.moveTo(myLine.x0, myLine.y0);
  context.lineTo(myLine.x, myLine.y);
  context.lineWidth = 5;
  context.strokeStyle = 'red';
  context.stroke();
}

  var myCircle1 = {x: X0+l1*Math.sin(Theta1), y: Y0+l1*Math.cos(Theta1), mass: m1};
  var myCircle2 = {x: X0+l1*Math.sin(Theta1)+l2*Math.sin(Theta2), y: Y0+l1*Math.cos(Theta1)+l2*Math.cos(Theta2), mass: m2};
  var myLine1 = {x0: X0, y0: Y0, x: myCircle1.x, y: myCircle1.y};
  var myLine2 = {x0: myCircle1.x, y0: myCircle1.y, x: myCircle2.x, y: myCircle2.y};

  drawLine(myLine1, context);
  drawLine(myLine2, context);
  drawCircle(myCircle1, context);
  drawCircle(myCircle2, context);


go.addEventListener('click',function(){
  console.log("go");
  run();
});





function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
  mu      =  1+m1/m2;
  d2Theta1  =  (g*(Math.sin(Theta2)*Math.cos(Theta1-Theta2)-mu*Math.sin(Theta1))-(l2*dTheta2*dTheta2+l1*dTheta1*dTheta1*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l1*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
  d2Theta2  =  (mu*g*(Math.sin(Theta1)*Math.cos(Theta1-Theta2)-Math.sin(Theta2))+(mu*l1*dTheta1*dTheta1+l2*dTheta2*dTheta2*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l2*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
  dTheta1   += d2Theta1*time;
  dTheta2   += d2Theta2*time;
  Theta1    += dTheta1*time;
  Theta2    += dTheta2*time;


  myCircle1.x = X0+l1*Math.sin(Theta1);
  myCircle1.y = Y0+l1*Math.cos(Theta1);
  myCircle2.x = X0+l1*Math.sin(Theta1)+l2*Math.sin(Theta2);
  myCircle2.y = Y0+l1*Math.cos(Theta1)+l2*Math.cos(Theta2);

  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;
  myLine2.x0 = myCircle1.x;
  myLine2.y0 = myCircle1.y;
  myLine2.x  = myCircle2.x;
  myLine2.y  = myCircle2.y;

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawLine(myLine1, context);
  drawLine(myLine2, context);
  drawCircle(myCircle1, context);
  drawCircle(myCircle2, context);


}

function run(){
  var myCircle1 = {x: X0+l1*Math.sin(Theta1), y: Y0+l1*Math.cos(Theta1), mass: m1};
  var myCircle2 = {x: X0+l1*Math.sin(Theta1)+l2*Math.sin(Theta2), y: Y0+l1*Math.cos(Theta1)+l2*Math.cos(Theta2), mass: m2};
  var myLine1 = {x0: X0, y0: Y0, x: myCircle1.x, y: myCircle1.y};
  var myLine2 = {x0: myCircle1.x, y0: myCircle1.y, x: myCircle2.x, y: myCircle2.y};
  
  
  clearInterval(init);
  init = setInterval(function(){
    animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context);
  }, 5);
}
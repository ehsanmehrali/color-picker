function staticColor() {
  var can = document.getElementById("can1");
  var typedcolor = document.getElementById("colorname");
  var color = typedcolor.value;
  can.style.backgroundColor = color;
}

function dynamicColor() {
  var can = document.getElementById("can1");
  var colorinput = document.getElementById("clr");
  var newcolor = colorinput.value;
  can.style.backgroundColor = newcolor;
}

function dorect() {
  var can = document.getElementById("can1");
  var sizeinput = document.getElementById("slider");
  var size = sizeinput.value;
  var ctx = can.getContext("2d");
  ctx.clearRect(0, 0, can.width, can.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 40, size, size);
  ctx.fillRect(parseInt(size) + 20, 10, size, size);
  ctx.fillRect(size * 3, 10, size, size);
}

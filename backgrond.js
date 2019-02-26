window.onload = function() {
    let background = document.getElementById("canvas");
    let background_context = background.getContext("2d");
    let quark_num = 1000;
    let X, Y;
    let P = [];
    let quark = function(x, y, vx, vy, r, color) {
       this.x = x;
       this.y = y;
       this.vx = vx;
       this.vy = vy;
       this.r = r;
       this.color = color;
    };

function size() {
    background.width = window.innerWidth;
    background.height = window.innerHeight;
    horziontal_mid = background.width / 2;
    vertical_mid = background.height / 2;
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}
 
function size() {
    background.width = window.innerWidth + 2;
    background.height = window.innerHeight + 2;
    horziontal_mid = background.width / 2;
    vertical_mid = background.height / 2;
}
size();
    X = horziontal_mid;
    Y = vertical_mid;
 
    function place_them() {
       var x, y, vx, vy, r, color;
       for (var i = 0; i < quark_num; i++) {
          x = rand(0, background.width);
          y = rand(0, background.height);
          vx = rand(-1, 1);
          vy = rand(-1, 1);
          r = rand(1, 3);
          let col = Boolean(Math.round(Math.random()));
          if (col == true) {
            color = "rgb(0, 143, 179)";
          } else {
            color = "rgb(158, 24, 0)"
          };
 
          P.push(new quark(x, y, vx, vy, r, color));
       }
    }
 
function bg() {
   var gradient = background_context.createLinearGradient(0, 0, 0, background.height);
      gradient.addColorStop(0, "#303030");
      gradient.addColorStop(1, "#000");
      background_context.fillStyle = gradient;
      background_context.fillRect(0, 0, background.width, background.height);
    }
 
function bounce_them(b) {
   if (b.x < b.r) {
      b.x = b.r;
      b.vx *= -1;
   }
   if (b.x > background.width - b.r) {
      b.x = background.width - b.r;
      b.vx *= -1;
   }
   if (b.y - b.r < 0) {
      b.y = b.r;
      b.vy *= -1;
   }
   if (b.y > background.height - b.r) {
      b.y = background.height - b.r;
      b.vy *= -1;
   }
}
 
    function move_them(p) {
        var dx = (p.x - X),
        dy = (p.y - Y),
        dist = Math.sqrt(dx * dx + dy * dy),
        angle = Math.atan2(dy, dx);
            if (dist < 100) {
                p.vx += (420 / (p.r * dist)) * Math.cos(angle);
                p.vy += (420 / (p.r * dist)) * Math.sin(angle);
            }
        }
 
    function draw() {
       var p;
       for (var i = 0; i < P.length; i++) {
          p = P[i];
 
          if(mouseover) move_them(p);
          bounce_them(p);
 
          p.x += p.vx;
          p.y += p.vy;
 
          p.vx *= 0.985;
          p.vy *= 0.985;
 
          background_context.fillStyle=p.color;
          background_context.fillRect(p.x,p.y,p.r,p.r);
       }
    }
 
function loop() {
   bg();
   draw();
   window.requestAnimationFrame(loop);
}
 
window.onresize = size;
 
window.onmousemove = function(e) {
   X = e.clientX;
   Y = e.clientY;
}
window.onmousedown = function() {
   mousedown = true;
}
window.onmouseup = function() {
   mousedown = false;
   }
let mouseover=false;
window.onmouseover = function() {
   mouseover = true;
   }
window.onmouseout = function(){
   mouseover=false;
   }
place_them();
loop();
}
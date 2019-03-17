
window.onload = function() {
    console.log("setup");
    window.canvas = document.getElementById('can');
    window.ctx = canvas.getContext('2d');
    window.id = ctx.createImageData(1,1); // only do this once per page
    window.d  = id.data;                        // only do this once per page
    render();
}

function render() {
    const WIDTH = 1680;
    const HEIGHT = 1050;

    for(var pX = 0; pX < WIDTH; pX++) {
        for(var pY =0; pY < HEIGHT; pY++){

            var x0 = (pY - HEIGHT/2.0)*4.0/HEIGHT;
            var y0 = (pX - WIDTH/2.0)*4.0/WIDTH;

            x = 0.0;
            y = 0.0;

            iteration = 0.0;
            max_iteration = 1000;

            while (x*x + y*y <= 4  &&  iteration < max_iteration) {
                xtemp = x*x - y*y + x0;
                y = 2*x*y + y0;
                x = xtemp;
                iteration = iteration + 1;
            }
            color = iteration * (255.0 / max_iteration);

             setPixel(pX, pY, Math.sin(color) * 150, 0 , 0);

        }
    }
}


function setPixel(x,y, r,g,b) {
    window.d[0]   = r;
    window.d[1]   = g;
    window.d[2]   = b;
    window.d[3]   = 255;
    window.ctx.putImageData( window.id, x, y );
}

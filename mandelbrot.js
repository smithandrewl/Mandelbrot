




window.onload = function() {
    console.log("setup");
    window.canvas = document.getElementById('can');
    window.ctx = canvas.getContext('2d');
    window.id = ctx.createImageData(1,1); // only do this once per page
    window.d  = id.data;                        // only do this once per page

}

function render() {


    for(var i = 0; i < 800; i++) {
        for(var j =0; j < 600; j++){
            setPixel(i, j, i % 255,j %255,i % 255);
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

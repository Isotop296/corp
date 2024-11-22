window.addEventListener("load", ()=>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.height = 500;
    canvas.width = window.innerWidth;
    // ctx.strokeStyle = ("red");
    // ctx.lineWidth = 2;
    // ctx.strokeRect(100, 100, 200, 500);
    // ctx.strokeStyle = ("blue");
    // ctx.strokeRect(200, 200, 200, 500);
    
    // ctx.beginPath();
    // ctx.moweTo(100, 100);
    // ctx.lineTo(200, 100);
    // ctx.closePath();
    // ctx.stroke();
    
    
    let painting = false;
    
    function starterPosition(){
        painting = true;
        draw(e);
    }
    
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    canvas.addEventListener("mousedown", starterPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    document.getElementById("rensa").addEventListener("click", ta_bort);
    
    function ta_bort(){
        ctx.clearRect( 0, 0, window.innerWidth, 500);
        console.log("hej");
    }
    });
    
    
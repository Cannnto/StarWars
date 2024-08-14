function deathSreem(){
    
// context.fillStyle = "rgba(0, 0, 0,)";
// context.fillRect(0, 0, canvas.width, canvas.height);

context.font ='50px myFont'
context.textAlign = "center";
context.textBaseline = "middle";

    if (death == 0)
    {	
        context.shadowColor = "black";
        context.shadowBlur = 15;
        context.fillStyle = "yellow";
        context.beginPath()
        context.roundRect(canvas.width/3, canvas.height*5.5/6-40, canvas.width/3, 80,10);
        context.fill()
        context.shadowBlur = 0;	
        context.fillStyle = "black";
    }
    context.fillText("volTAR ao menu", canvas.width/2, canvas.height*5.5/6);




}
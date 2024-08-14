function loopControl(){
	
	context.fillStyle = "rgba(0, 0, 0)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	background.draw();

	stars.iterate();

	obstacles1.iterate(actores.actor);

	obstacles2.iterate(actores.actor);

	if(options.players == 2){
		actores.actor2.draw()
	}

	actores.actor.draw()
	context.font = "35px myFont";
	context.textAlign = "center";
	context.textBaseline = "middle";

/*
	if(skin == 0){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
        context.shadowBlur = 0;	
		context.drawImage(skinsScreen[0],0,540,400,350,canvas.width/2.5, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";	
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
		context.drawImage(skinsScreen[0],0,540,400,350,canvas.width/2.5, canvas.height*1.35/6-40, canvas.width/8, 175)
	}
*/
    context.fillStyle ='white'
    context.fillText("Player 2", canvas.width*4.8/6-40, canvas.height*1/6)
    context.fillText("Player 1", canvas.width*3.95/6-40, canvas.height*1/6)
        context.fillText("Pulo:",canvas.width/1.86, canvas.height*1.4/6+20)

        context.fillText("Blaster:",canvas.width/1.91, canvas.height*2.5/6+20)

        context.fillText("Laser:",canvas.width/1.88, canvas.height*3.5/6+20)

        context.fillText("Cura:", canvas.width/1.87, canvas.height*4.5/6+20)



    if(control == 0){
        if(blocked == 1){        
        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
        context.shadowColor = "yellow";
        context.shadowBlur = 15;
        context.fillStyle = "black";
        context.beginPath()}        
        context.roundRect(canvas.width/1.75, canvas.height*1.4/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.jump, canvas.width*4/6-40, canvas.height*1.5/6)
    }
    else{
        context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.75, canvas.height*1.4/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.jump, canvas.width*4/6-40, canvas.height*1.5/6)
    }
    
    if(control == 4){
        if(blocked == 1){        
        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
        context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}        
        context.roundRect(canvas.width/1.4, canvas.height*1.4/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys2.jump, canvas.width*4.8/6-40, canvas.height*1.5/6)
    }
    else{
        context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.4, canvas.height*1.4/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys2.jump, canvas.width*4.8/6-40, canvas.height*1.5/6)
    }
    
    
    if(control == 1){
     if(blocked == 1){        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
     else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        context.roundRect(canvas.width/1.75, canvas.height*2.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.blaster, canvas.width*4/6-40, canvas.height*2.5/6)
    }
    else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.75, canvas.height*2.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.blaster, canvas.width*4/6-40, canvas.height*2.5/6)

    }
    
    if(control == 5){
        if(blocked == 1){        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
            		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}        
            context.roundRect(canvas.width/1.4, canvas.height*2.5/6-40, canvas.width/8, 125,10)
            context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
            context.fillText(options.keys2.blaster, canvas.width*4.8/6-40, canvas.height*2.5/6)

    }
    else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.4, canvas.height*2.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys2.blaster, canvas.width*4.8/6-40, canvas.height*2.5/6)
    }
    
    if(control == 2){
        if(blocked == 1){        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
           		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}        
        context.roundRect(canvas.width/1.75, canvas.height*3.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.laser, canvas.width*4/6-40, canvas.height*3.5/6)
    }
    else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.75, canvas.height*3.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.laser, canvas.width*4/6-40, canvas.height*3.5/6)
    }
    
    if(control == 6){
        if(blocked == 1){        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
        context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}        
        context.roundRect(canvas.width/1.4, canvas.height*3.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys2.laser, canvas.width*4.8/6-40, canvas.height*3.5/6)

    }
    else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.4, canvas.height*3.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys2.laser, canvas.width*4.8/6-40, canvas.height*3.5/6)

    }
    
    if(control == 3){
        if(blocked == 1){        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}        
        context.roundRect(canvas.width/1.75, canvas.height*4.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.heal, canvas.width*4/6-40, canvas.height*4.5/6)
    }
    else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.75, canvas.height*4.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys1.heal, canvas.width*4/6-40, canvas.height*4.5/6)
    }
    
    if(control == 7){
        if(blocked == 1){        context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}
        else{
            		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()}        
            context.roundRect(canvas.width/1.4, canvas.height*4.5/6-40, canvas.width/8, 125,10)
            context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
            context.fillText(options.keys2.heal, canvas.width*4.8/6-40, canvas.height*4.5/6)
    }
    else{
        		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
        context.roundRect(canvas.width/1.4, canvas.height*4.5/6-40, canvas.width/8, 125,10)
        context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";
        context.fillText(options.keys2.heal, canvas.width*4.8/6-40, canvas.height*4.5/6)
    }    

    //P2

}
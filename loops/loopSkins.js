function loopSkins(){

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
	context.font = "50px myFont";
	context.textAlign = "center";
	context.textBaseline = "middle";

    context.fillStyle ='yellow'
    context.fillText("plaYER 1", canvas.width*3.35/6-40, canvas.height*1/6)

    context.fillStyle ='yellow'
    context.fillText("plaYER 2", canvas.width*5.35/6-40, canvas.height*1/6)


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
		context.drawImage(skinsScreen[0],0,540,400,350,canvas.width/2.5, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";	
	}

	if(skin == 4){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[4],0,540,400,350,canvas.width/1.85, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";	
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[4],0,540,400,350,canvas.width/1.85, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 1){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[1],0,540,400,350,canvas.width/2.5, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";

	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[1],0,540,400,350,canvas.width/2.5, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 5){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[5],0,540,400,350,canvas.width/1.85, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[5],0,540,400,350,canvas.width/1.85, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 2){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[2],0,540,400,350,canvas.width/2.5, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";

	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[2],0,540,400,350,canvas.width/2.5, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 6){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[6],0,540,400,350,canvas.width/1.85, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[6],0,540,400,350,canvas.width/1.85, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 3){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[3],0,540,400,350,canvas.width/2.5, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[3],0,540,400,350,canvas.width/2.5, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 7){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[7],0,540,400,350,canvas.width/1.85, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.85, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[7],0,540,400,350,canvas.width/1.85, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
						
	
	//P2


	if(skin == 8){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[0],0,540,400,350,canvas.width/1.36, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[0],0,540,400,350,canvas.width/1.36, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 12){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[4],0,540,400,350,canvas.width/1.15, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";

	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*1.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[4],0,540,400,350,canvas.width/1.15, canvas.height*1.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 9){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[1],0,540,400,350,canvas.width/1.36, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";

	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[1],0,540,400,350,canvas.width/1.36, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 13){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[5],0,540,400,350,canvas.width/1.15, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*2.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[5],0,540,400,350,canvas.width/1.15, canvas.height*2.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 10){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[2],0,540,400,350,canvas.width/1.36, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";

	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[2],0,540,400,350,canvas.width/1.36, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 14){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[6],0,540,400,350,canvas.width/1.15, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*3.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[6],0,540,400,350,canvas.width/1.15, canvas.height*3.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 11){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[3],0,540,400,350,canvas.width/1.36, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.36, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[3],0,540,400,350,canvas.width/1.36, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}

	if(skin == 15){
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*4.5/6-40, canvas.width/8, 125,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[7],0,540,400,350,canvas.width/1.15, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}
	else{
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.15, canvas.height*4.5/6-40, canvas.width/8, 125,10,10)
		context.fill()
		context.shadowBlur = '0'
		context.drawImage(skinsScreen[7],0,540,400,350,canvas.width/1.15, canvas.height*4.35/6-40, canvas.width/8, 175)
		context.fillStyle = "yellow";
	}








}
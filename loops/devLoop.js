function devLoop(){
	context.fillStyle = "rgba(0, 0, 0)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	backgroundMusicMenu.iterate()

	background.draw();

	stars.iterate();

	obstacles1.iterate(actores.actor);

	obstacles2.iterate(actores.actor);

	if(options.players == 2){
		actores.actor2.draw()
	}

	actores.actor.draw()
	context.font = "40px myFont";
	context.textAlign = "center";
	context.textBaseline = "middle";

	context.fillText("quantidade de inimigos:", canvas.width/2.3, canvas.height*2/6);
    context.fillText("tamanho dos obstáculos:", canvas.width/2.3, canvas.height*3/6);


    if (devOption == 0)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()		
		context.roundRect(canvas.width/1.5, canvas.height*2/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;
		context.fillStyle = "black";	
	}
	else
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 5;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.5, canvas.height*2/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
	context.fillText(["100%", "90%","80%","70%","60%","50%","40%","30%","20%","10%","0%",][devOptions.enemyCount], canvas.width/1.3, canvas.height*2/6);

	if (devOption == 1)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()	
		context.roundRect(canvas.width/1.5, canvas.height*3/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;
		context.fillStyle = "black";
	}
	else
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 5;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.5, canvas.height*3/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
    context.fillText(["2000 Points", "1800 Points","1600 Points","1400 Points","1200 Points","1000 Points","800 Points","600 Points","400 Points","200 Points","0 Points",][devOptions.obstacleCount], canvas.width/1.3, canvas.height*3/6);

	if (devOption == 2)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()	
		context.roundRect(canvas.width/1.5, canvas.height*5/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;
		context.fillStyle = "black";
	}
	else
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 5;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/1.5, canvas.height*5/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
    context.fillText("volTAr", canvas.width/1.3, canvas.height*5/6);


}
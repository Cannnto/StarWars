function loopMenu()
{	
	if(lock == 1){
		backgroundMusicMenu.play()
		lock = 0
	}
	
	backgroundMusicMenu.volume = 0

	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	background.draw();

	stars.iterate();

	obstacles1.iterate(actores.actor);


	obstacles2.iterate(actores.actor);

	if(options.players == 2){
		actores.actor2.draw()
	}

	actores.actor.draw()
	context.font ='50px myFont'
	context.textAlign = "center";
	context.textBaseline = "middle";

	if (Menu == 0)
	{	
		context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.fillStyle = "blue";
		context.beginPath()
		context.roundRect(canvas.width/1.5, canvas.height*2/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;
		context.fillStyle = "white";
	}
	else
	{	
		context.shadowColor = "blue";
        context.shadowBlur = 5;
		context.beginPath()
		context.fillStyle = "black";
		context.roundRect(canvas.width/1.5, canvas.height*2/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "blue";
	}
	context.fillText("Jogar", canvas.width/1.3, canvas.height*2/6);

	if (Menu == 1)
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
		context.fillText("SkiNS", canvas.width/1.3, canvas.height*3/6);

	if (Menu == 2)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()
		context.roundRect(canvas.width/1.5, canvas.height*4/6-40, canvas.width/5, 80,10);
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
		context.roundRect(canvas.width/1.5, canvas.height*4/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
	context.fillText("opçõeS", canvas.width/1.3, canvas.height*4/6);

}
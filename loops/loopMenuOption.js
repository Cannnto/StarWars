function loopMenuOptio(){

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
	context.font = "50px myFont";
	context.textAlign = "center";
	context.textBaseline = "middle";

/*
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
*/
	if (option == 0)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()		
		context.roundRect(canvas.width/1.5, canvas.height/6-40, canvas.width/5, 80,10);
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
		context.roundRect(canvas.width/1.5, canvas.height/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
	context.fillText("Controles", canvas.width/1.3, canvas.height/6);

	if (option == 1)
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
	context.fillText("Som: "+["100%", "90%","80%","70%","60%","50%","40%","30%","20%","10%","0%",][options.sound], canvas.width/1.3, canvas.height*2/6);

	if (option == 2)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()			
		context.roundRect(canvas.width/1.67, canvas.height*3/6-40, canvas.width/3, 80,10);
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
		context.roundRect(canvas.width/1.67, canvas.height*3/6-40, canvas.width/3, 80,10);
		context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
	context.fillText("Dificuldade: "+["fácil", "média", "difícil"][options.difficulty], canvas.width/1.3, canvas.height*3/6);

	if (option == 3)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()			
		context.roundRect(canvas.width/1.55, canvas.height*4/6-40, canvas.width/4, 80,10);
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
		context.roundRect(canvas.width/1.55, canvas.height*4/6-40, canvas.width/4, 80,10);
		context.fill()
		context.shadowBlur = 0;	
		context.fillStyle = "yellow";	
	}
	context.fillText("Jogadores: "+options.players, canvas.width/1.3, canvas.height*4/6);

	if (option == 4)
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
	context.fillText("voltAR", canvas.width/1.3, canvas.height*5/6);

	if (option == 5)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "yellow";
		context.beginPath()			
		context.roundRect(canvas.width/1.12, canvas.height*5.5/6-40, canvas.width/15, 80,10);
		context.fill()
        context.shadowBlur = 0;
		context.fillStyle = "black";
		context.fillText("dev", canvas.width/1.08, canvas.height*5.5/6);
	}

}
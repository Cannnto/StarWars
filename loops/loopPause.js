function loopPause()
{
	context.fillStyle = "rgba(0, 0, 0,0.02)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	backgroundMusic.iterate()

	context.shadowColor = "yellow";
	context.shadowBlur = 1;
	context.fillStyle = "black";
	context.beginPath()
	context.roundRect(canvas.width/4,canvas.height*1.5/6,canvas.width/2, canvas.height/2,10);
	context.fill()
	context.shadowBlur = 0;	

	context.font = "50px myFont";
	context.textAlign = "center";
	context.textBaseline = "middle";


	if (optionPause == 0)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*2/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";
	}
	else
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*2/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";
	}
	context.fillText("volTAR", canvas.width/2, canvas.height*2/6);


	if (optionPause == 1)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*3/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";
	}
	else
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/2.5, canvas.height*3/6-40, canvas.width/5, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";
	}
	context.fillText("som: "+["100%", "90%","80%","70%","60%","50%","40%","30%","20%","10%","0%",][options.sound], canvas.width/2, canvas.height*3/6);
	if (optionPause == 2)
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 15;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/3, canvas.height*4/6-40, canvas.width/3, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";
	}
	else
	{	
		context.shadowColor = "yellow";
        context.shadowBlur = 2;
		context.fillStyle = "black";
		context.beginPath()
		context.roundRect(canvas.width/3, canvas.height*4/6-40, canvas.width/3, 80,10);
		context.fill()
        context.shadowBlur = 0;	
		context.fillStyle = "yellow";
	}
	context.fillText("volTAR ao menu", canvas.width/2, canvas.height*4/6);
}
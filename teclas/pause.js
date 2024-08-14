function pause(event){
	if (event.keyCode == 38)
	{	optionPause = (optionPause-1+3)%3;
		sounds.optionSwap.play()

	}
	if (event.keyCode == 40)
	{	optionPause = (optionPause+1)%3;
		sounds.optionSwap.play()

	}
	if(optionPause == 2){
	}
	if (event.keyCode == 27){
		aux++
	}

	if ((event.keyCode == 13) && (optionPause == 0))
	{	clearInterval(timer);
		timer = setInterval(loop1, 1000/FPS)
		aux++
	}

    if ((event.keyCode == 37) && (optionPause == 1))
    {	options.sound = (options.sound-1+11)%11;
    }
	if (([13, 39].indexOf(event.keyCode) != -1) && (optionPause == 1))
	{	options.sound = (options.sound+1)%11;
	}

	if ((event.keyCode == 13) && (optionPause == 2))
	{	
		location.reload()
	}


	if (event.keyCode == 27 && aux%2 == 0){
		clearInterval(timer);
		timer = setInterval(loop1, 1000/FPS);
	}
	if (event.keyCode == 27 && aux%2 == 1){
		clearInterval(timer);
		timer = setInterval(loopPause, 1000/FPS);
	}

}
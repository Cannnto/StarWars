function optionsMenu(event){
	if (event.keyCode == 38)
	{	option = (option-1+6)%6;
        sounds.optionSwap.play()

	}
	if (event.keyCode == 40)
	{	option = (option+1)%6;
        sounds.optionSwap.play()

	}
	if (([13].indexOf(event.keyCode) != -1) && (option == 0))
	{	
		document.removeEventListener("keyup", optionsMenu);
		document.addEventListener("keyup", controles);
		sounds.optionSwap.play()
		clearInterval(timer);
		timer = setInterval(loopControl, 1000/FPS);

	}

    if ((event.keyCode == 37) && (option == 1))
    {	options.sound = (options.sound-1+11)%11;
    }
	if (([13, 39].indexOf(event.keyCode) != -1) && (option == 1))
	{	options.sound = (options.sound+1)%11;
	}
	if ((event.keyCode == 37) && (option == 2))
	{	options.difficulty = (options.difficulty-1+3)%3;
	}
	if (([13, 39].indexOf(event.keyCode) != -1) && (option == 2))
	{	options.difficulty = (options.difficulty+1)%3;
	}

	if (([13, 37, 39].indexOf(event.keyCode) != -1) && (option == 3))
	{	options.players = (options.players%2)+1;
	}

	if (([13, 37, 39].indexOf(event.keyCode) != -1) && (option == 4))
	{	
		document.removeEventListener("keyup", optionsMenu);
		document.addEventListener("keyup", onKeyUp);

        sounds.optionSwap.play()

		clearInterval(timer);
		timer = setInterval(loopMenu, 1000/FPS);
	
	}

	if (([13, 37, 39].indexOf(event.keyCode) != -1) && (option == 5))
	{	
		document.removeEventListener("keyup", optionsMenu);
		document.addEventListener("keyup", devMenu);

        sounds.optionSwap.play()

		clearInterval(timer);
		timer = setInterval(devLoop, 1000/FPS);
	}

	if (event.keyCode == 27)
	{	
		document.removeEventListener("keyup", optionsMenu);
		document.addEventListener("keyup", onKeyUp);

        sounds.optionSwap.play()

		clearInterval(timer);
		timer = setInterval(loopMenu, 1000/FPS);
	
	}
}
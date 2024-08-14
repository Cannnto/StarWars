function onKeyUp(event)
{		
	if (event.keyCode == 38)
	{	Menu = (Menu-1+3)%3;
		sounds.optionSwap.play()
	}
	if (event.keyCode == 40)
	{	Menu = (Menu+1)%3;
		sounds.optionSwap.play()
	}

	if ((event.keyCode == 13) && (Menu == 0))
	{	Menu = -1;
		document.removeEventListener("keyup", onKeyUp);
		document.addEventListener("keypress", onKeyPress);
		document.addEventListener("keyup", pause);
		actores.actor.points = 0;
		actores.actor2.points = 0;
		clearInterval(timer);
		timer = setInterval(loop1, 1000/FPS);
	}
	if((event.keyCode == 13) && (Menu == 1)){

		document.removeEventListener("keyup", onKeyUp);
		document.addEventListener("keyup", skins);
		sounds.optionSwap.play()

		clearInterval(timer);
		timer = setInterval(loopSkins, 1000/FPS);
	}

	if((event.keyCode == 13) && (Menu == 2)){

		document.removeEventListener("keyup", onKeyUp);
		document.addEventListener("keyup", optionsMenu);
		sounds.optionSwap.play()

		clearInterval(timer);
		timer = setInterval(loopMenuOptio, 1000/FPS);
	}
}
function devMenu(event){


	if (event.keyCode == 38)
	{	devOption = (devOption-1+3)%3;
		sounds.optionSwap.play()
	}
	if (event.keyCode == 40)
	{	devOption = (devOption+1)%3;
		sounds.optionSwap.play()
	}
    
    if ((event.keyCode == 37) && (devOption == 0))
    {	devOptions.enemyCount = (devOptions.enemyCount-1+11)%11;
    }

    if (([13, 39].indexOf(event.keyCode) != -1) && (devOption == 0))
    {devOptions.enemyCount = (devOptions.enemyCount+1)%11;
		
    }

	if (([13, 39].indexOf(event.keyCode) != -1) && (devOption == 1))
    {devOptions.obstacleCount = (devOptions.obstacleCount+1)%11;
    }


    if ((event.keyCode == 37) && (devOption == 1))
    {	devOptions.obstacleCount = (devOptions.obstacleCount-1+11)%11;
    }


    if (event.keyCode == 27 || event.keyCode == 13 && devOption == 2){
		document.removeEventListener("keyup",devMenu)
		document.addEventListener("keyup",optionsMenu)

		clearInterval(timer)
		timer = setInterval(loopMenuOptio,1000/FPS)
	}
}
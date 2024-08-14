function skins(event){
	
	if (event.keyCode == 38)
	{	skin = (skin-1+16)%16;
		sounds.optionSwap.play()

	}
	if (event.keyCode == 40)
	{	skin = (skin+1)%16;
		sounds.optionSwap.play()

	}
	if (event.keyCode == 37)
	{	skin = (skin-4+16)%16;
		sounds.optionSwap.play()

	}
	if (event.keyCode == 39)
	{	skin = (skin+4)%16;
		sounds.optionSwap.play()

	}


	if (event.keyCode == 27){
		document.removeEventListener("keyup",skins)
		document.addEventListener("keyup",onKeyUp)
		sounds.optionSwap.play()

		clearInterval(timer)
		timer = setInterval(loopMenu,1000/FPS)
	}

	if ((event.keyCode == 13) && (skin == 0))
	{	
		actorSkin1 = skinsImg[0]
		actorColor1 = skinColor[0]
	}
	if ((event.keyCode == 13) && (skin == 1))
	{	
		actorSkin1 = skinsImg[1]
		actorColor1 = skinColor[1]
	}

	if ((event.keyCode == 13) && (skin == 2))
	{	
		actorSkin1 = skinsImg[2]
		actorColor1 = skinColor[2]
	}
	
	if ((event.keyCode == 13) && (skin == 3))
	{	
		actorSkin1 = skinsImg[3]
		actorColor1 = skinColor[3]
	}

	if ((event.keyCode == 13) && (skin == 4))
	{	
		actorSkin1 = skinsImg[4]
		actorColor1 = skinColor[4]
	}

	if ((event.keyCode == 13) && (skin == 5))
	{	
		actorSkin1 = skinsImg[5]
		actorColor1 = skinColor[5]
	}

	if ((event.keyCode == 13) && (skin == 6))
	{	
		actorSkin1 = skinsImg[6]
		actorColor1 = skinColor[6]
	}

	if ((event.keyCode == 13) && (skin == 7))
	{	
		actorSkin1 = skinsImg[7]
		actorColor1 = skinColor[7]
	}

	
	//P2
	
	if ((event.keyCode == 13) && (skin == 8))
	{	
		actorSkin2 = skinsImg[0]
		actorColor2 = skinColor[0]
	}
	if ((event.keyCode == 13) && (skin == 9))
	{	
		actorSkin2 = skinsImg[1]
		actorColor2 = skinColor[1]
	}
	if ((event.keyCode == 13) && (skin == 10))
	{	
		actorSkin2 = skinsImg[2]
		actorColor2 = skinColor[2]
	}

	if ((event.keyCode == 13) && (skin == 11))
	{	
		actorSkin2 = skinsImg[3]
		actorColor2 = skinColor[3]
	}
	
	if ((event.keyCode == 13) && (skin == 12))
	{	
		actorSkin2 = skinsImg[4]
		actorColor2 = skinColor[4]
	}

	if ((event.keyCode == 13) && (skin == 13))
	{	
		actorSkin2 = skinsImg[5]
		actorColor2 = skinColor[5]
	}

	if ((event.keyCode == 13) && (skin == 14))
	{	
		actorSkin2 = skinsImg[6]
		actorColor2 = skinColor[6]
	}

	if ((event.keyCode == 13) && (skin == 15))
	{	
		actorSkin2 = skinsImg[7]
		actorColor2 = skinColor[7]
	}

	actores.actor2 = new Actor(actorSkin2,actorColor2,100,canvas.height/3)
	actores.actor = new Actor(actorSkin1,actorColor1,100,canvas.height/2)
}
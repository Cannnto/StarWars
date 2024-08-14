function controles(event){
	if (event.keyCode == 38)
	{	control = (control-1+8)%8;
	}
	if (event.keyCode == 40)
	{	control = (control+1)%8;
	}
	if (event.keyCode == 37)
	{	control = (control-4+8)%8;
	}
	if (event.keyCode == 39)
	{	control = (control+4)%8;
	}
	if (event.keyCode == 27){
		document.removeEventListener("keyup",controles)
		document.addEventListener("keyup",optionsMenu)

		clearInterval(timer)
		timer = setInterval(loopMenuOptio,1000/FPS)
	}


    if(control == 0 && event.keyCode!=27){
        if(blocked == 1){
            options.keys1.jump = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
   
    if(control == 1 && event.keyCode!=27){
        if(blocked == 1){
            options.keys1.blaster = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
   
    if(control == 2){
        if(blocked == 1 && event.keyCode!=27){
            options.keys1.laser = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
    if(control == 3 && event.keyCode!=27){
        if(blocked == 1){
            options.keys1.heal = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
    if(control == 4 && event.keyCode!=27){
        if(blocked == 1){
            options.keys2.jump = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
    if(control == 5 && event.keyCode!=27){
        if(blocked == 1){
            options.keys2.blaster = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
    if(control == 6 && event.keyCode!=27){
        if(blocked == 1){
            options.keys2.laser = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }
    if(control == 7 && event.keyCode!=27){
        if(blocked == 1){
            options.keys2.heal = event.key
            blocked =0
        }
        if(event.keyCode == 13){
        blocked = 1
        }
    }




    // {keys: {jump: " ", blaster:"1" ,laser: "2"},


}
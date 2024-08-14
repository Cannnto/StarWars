class Power extends Rectangle
{	constructor()
	{	super(canvas.width, 100+Math.random()*(canvas.height-200), 50, 50, -5);
		this.blaster = new Image
		this.blaster.src = 'imgs/blaster.png'
		this.medkit = new Image
		this.medkit.src = 'imgs/medkit.png'
	}

	give(actor)
	{
	}

	test(actor)
	{	if (this.collide(actor))
		{	this.give(actor);
			this.x = -2*this.width;
		}
	}
}

class Bigger extends Power
{	draw()
	{	context.shadowColor = "blue";
		context.shadowBlur = 15;
		context.font = this.width+"px myFont";
		context.fillStyle = "rgb(0, 0, 255)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText("#", this.x+this.width/2, this.y+this.height/2);
		context.shadowBlur = 0;
	}

	give(actor)
	{	actor.width *= 1.2;
		actor.height *= 1.2;
		sounds.actorCollideSizePower.play();
	}
}

class Smaller extends Power
{	draw()
	{	
		context.shadowColor = "red";
		context.shadowBlur = 15;
		context.font = this.width+"px myFont";
		context.fillStyle = "rgb(255, 0, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText("$", this.x+this.width/2, this.y+this.height/2);
		context.shadowBlur = 0;
	}

	give(actor)
	{	actor.width *= 0.8;
		actor.height *= 0.8;
		sounds.actorCollideSizePower.play();
	}
}

class Ghost extends Power
{	draw()
	{	
		context.shadowColor = "green";
		context.shadowBlur = 15;
		context.font = this.width+"px myFont";
		context.fillStyle = "rgb(0, 255, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText("^", this.x+this.width/2, this.y+this.height/2);
		context.shadowBlur = 0;
	}

	give(actor)
	{	actor.ghost.counter = actor.ghost.time;
		// sounds.actorCollideGhostPower.play();
	}
}

class Life extends Power
{	draw()
	{	
		context.shadowColor = "green";
		context.shadowBlur = 15;		
		context.font = this.width+"px myFont";
		context.fillStyle = "rgb(0, 255, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(10084), this.x+this.width/2, this.y+this.height/2);
		context.shadowBlur = 0;
	}

	give(actor)
	{	
		actor.lifes += 1
		sounds.actorCollideSizePower.play();
	}
}

class Health extends Power
{	draw(){
		context.shadowColor = "white";
		context.shadowBlur = 15;
		context.drawImage(this.medkit,this.x,this.y,this.width,this.height)
		context.shadowBlur = 0
	}

	give(actor)
	{	
		actor.ammo.medkit += 1
		sounds.actorCollideSizePower.play();
	}
}

class LaserAmmo extends Power
{	draw()
	{	context.shadowColor = "red";
		context.shadowBlur = 15;
		context.font = this.width+"px myFont";
		context.fillStyle = "rgb(255, 0, 0)";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(String.fromCharCode(8888), this.x+this.width/2, this.y+this.height/2);
		context.shadowBlur = 0;
	}

	give(actor)
	{	actor.ammo.laser++;
		sounds.actorCollideLaserAmmoPower.play();
	}
}

class BlasterAmmo extends Power
{	draw()
	{	
		context.shadowColor = "blue";
        context.shadowBlur = 15;
		context.drawImage(this.blaster,this.x,this.y,this.width,this.height)
        context.shadowBlur = 0;
	}

	give(actor)
	{	actor.ammo.blaster++;
		sounds.actorCollideLaserAmmoPower.play();
	}
}

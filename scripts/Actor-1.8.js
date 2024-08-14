class Actor extends Rectangle
{	constructor(img,blastColor,x,y)
	{	super(x, y, 388/3, 287/3, 0);
		this.sprites = new Sprites(img, 365, 287,0,550, 5, 2);
		this.ghost = {time: 5*FPS, counter: 0};
		this.ammo = {laser: 5, blaster:15, medkit:3};   
		this.lifes = 3
		this.health = 100;
		this.points = 20000;
		this.blaster = new Image
		this.blaster.src ='imgs/blaster.png'
		this.blastColor = blastColor
	}

	draw()
	{	
		this.ghost.time = (Math.abs(options.difficulty-2)*2)*FPS
		if (this.ghost.counter > 0)
		{	context.save();
			context.globalAlpha = 0.3;
		}

		this.sprites.draw(this.x, this.y, this.width, this.height);
		// context.drawImage(this.blaster,this.x+this.width/2,this.y+this.height/2,this.width/1.5,this.height/1.5)
		if (this.ghost.counter > 0)
		{	context.restore();

			context.fillStyle = "rgb(255, 255, 255)";
			context.fillRect(this.x, this.y, this.width, 3);

			context.fillStyle = "rgb(0, 0, 255)";
			context.fillRect(this.x, this.y, this.width*this.ghost.counter/this.ghost.time, 3);
		}

		this.sprites.update();
		
	}

	update()
	{	
		this.velocity += 2; //gravidade
		this.y += this.velocity;

		this.y = Math.max(5, Math.min(canvas.height-this.height-5, this.y));

		if (this.ghost.counter > 0)
		{	this.ghost.counter--;
		}
	}

	fire()
	{	if (this.ammo.laser > 0)
		{	this.ammo.laser--;
			lasers.fire(this.x+this.width/2, this.y+this.height/2-1, this,this.blastColor);
		}
	}
	fireTirin(){
		if (this.ammo.blaster > 0)
		{	this.ammo.blaster--;
		lasers.fireTirin(this.x+this.width/2, this.y+this.height/2-1, this,this.blastColor);
		}
	}

	hurt(damage)
	{	this.health -= damage;
		if (this.health <= 0)
		{	if (--this.lifes == 0)
			{	this.health = 0;
				this.velocity = 0;
				this.state = "down";
				sounds.actorDeath.play();

				clearInterval(timer);
				timer = setInterval(loop2, 1000/FPS);
			}
			else
			{	this.health = 100;
			}
		}
	}
}


class Enemy extends Rectangle
{	constructor()
	{	var scale = 0.2+Math.random()*0.2;
		super(canvas.width, 100+Math.random()*(canvas.height-200), 471*scale, 469*scale, -4-2.5*actores.actor.points/100);
		this.sprites = new Sprites("imgs/TIE_11.png", 230, 287, 5,((Math.random() < 0.8) ? ((Math.random() < 0.5) ? 0 : 550) : 265),5, 2);
		this.health = 100
		this.shoots=[]
	}

	draw()
	{	
		this.sprites.draw(this.x, this.y, this.width, this.height);
		this.sprites.update();

		context.fillStyle = 'white'
		context.beginPath()
		context.roundRect(this.x+this.width/8,this.y-this.height/8,this.width/1.25,this.height/15,5)
		context.fill()
		
		context.fillStyle = 'green'
		context.beginPath()
		context.roundRect(this.x+this.width/8,this.y-this.height/8,(this.health/100)*this.width/1.25 ,this.height/15,5)
		context.fill()

	}

	shoot(){
		this.shoots.push(new EnemyShoot(this.x,this.y,this.width))
	}

	iterate(actor,rectangle){
		for (var shoot = 0; (shoot < this.shoots.length); shoot++)
		{	this.shoots[shoot].draw();

			this.shoots[shoot].test(actor,rectangle);

			this.shoots[shoot].update();

			if (this.shoots[shoot].x+this.shoots[shoot].width > canvas.width)
			{	this.shoots.splice(shoot, 1);
				shoot--;
			}
		}
	}

	test(actor)
	{	if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.hurt(100*(471*(this.width/471)*3/1000)+5);
			this.x = -this.width;
			// sounds.actorCollideEnemy.play();
		}
	}
}

class Enemy2 extends Rectangle
{	constructor()
	{	var scale = 0.2+Math.random()*0.2;
		super(canvas.width, 100+Math.random()*(canvas.height-200), 471*scale, 469*scale, -5);
		this.sprites = new Sprites("imgs/TIE_00.png", 280, 200, 15,((Math.random() < 0.8) ? ((Math.random() < 0.5) ? 5 : 225) : 450),5, 2);
		this.health = 100
		this.shoots=[]
	}

	draw()
	{	
		this.sprites.draw(this.x, this.y, this.width, this.height);
		this.sprites.update();

		context.fillStyle = 'white'
		context.beginPath()
		context.roundRect(this.x+this.width/8,this.y-this.height/8,this.width/1.25,this.height/15,5)
		context.fill()
		
		context.fillStyle = 'green'
		context.beginPath()
		context.roundRect(this.x+this.width/8,this.y-this.height/8,(this.health/100)*this.width/1.25 ,this.height/15,5)
		context.fill()
	}

	shoot(){
		this.shoots.push(new EnemyShoot(this.x,this.y,this.width))
	}

	iterate(actor,rectangle){
		for (var shoot = 0; (shoot < this.shoots.length); shoot++)
		{	this.shoots[shoot].draw();

			this.shoots[shoot].test(actor,rectangle);

			this.shoots[shoot].update();

			if (this.shoots[shoot].x+this.shoots[shoot].width < 0)
			{	this.shoots.splice(shoot, 1);
				shoot--;
			}
		}
	}

	test(actor)
	{	if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.hurt(100*(471*(this.width/471)*3/1000)+5);
			this.x = -this.width;
			// sounds.actorCollideEnemy.play();
		}
	}
}

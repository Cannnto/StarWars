class Obstacle extends Rectangle
{	constructor(x,Dev)
	{	
		console.log(((Dev.obstacleCount*100)))
		super(x, -1, 20+Math.random()*380, 50+Math.random()*canvas.height/(4-actores.actor.points/(Dev.obstacleCount*100)), -9-2.5*actores.actor.points/100); //a cada 500 pontos
		this.color = 'rgb(50,50,50)'
		//"rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
		this.asteroids =  new Image
		this.asteroids.src = `imgs/asteroids${parseInt(Math.random()*4)}.png`
	
	}

	draw()
	{	
		// console.log(this.Dev)
		//  context.strokeStyle = this.color;
		//  context.strokeRect(this.x, this.y, this.width, this.height);
		context.drawImage(this.asteroids,this.x,this.y,this.width,this.height)
	}
}

class TopObstacle extends Obstacle
{	constructor(x,Dev)
	{	super(x,Dev);
		this.y = 0;
	}

	test(actor,actor2)
	{	
		if (actor2 != undefined && (this.collide(actor2)) && (actor2.ghost.counter == 0))
		{	actor2.y = this.height+1;
			actor2.velocity = 0;
			actor2.hurt(20);
			// sounds.actorCollideObstacle.play();
		}

		if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.y = this.height+1;
			actor.velocity = 0;
			actor.hurt(20);
			// sounds.actorCollideObstacle.play();
		}
	}
}

class BottomObstacle extends Obstacle
{	constructor(x,Dev)
	{	super(x,Dev);
		this.y = canvas.height-this.height;
	}

	test(actor,actor2)
	{	
		if (actor2 != undefined && (this.collide(actor2)) && (actor2.ghost.counter == 0))
		{	actor2.y = this.y-actor2.height-1;
			actor2.velocity = -20;
			actor2.hurt(30);
			// sounds.actorCollideObstacle.play();
		}
		
		if ((this.collide(actor)) && (actor.ghost.counter == 0))
		{	actor.y = this.y-actor.height-1;
			actor.velocity = -20;
			actor.hurt(30);
			// sounds.actorCollideObstacle.play();
		}
	}
}


class Obstacles
{	constructor(type)
	{	this.type = type;
		this.obstacles = [];
		for (var x = 0; (x < canvas.width); x += this.obstacles[this.obstacles.length-1].width)
		{	this.obstacles.push(new this.type(x, devOptions));
		}
	}

	iterate(actor,actor2)
	{	
		var x = 0;
		for (var obstacle = 0; (obstacle < this.obstacles.length); obstacle++)
		{	this.obstacles[obstacle].draw();

			this.obstacles[obstacle].test(actor,actor2);

			this.obstacles[obstacle].update();

			if (this.obstacles[obstacle].x+this.obstacles[obstacle].width < 0)
			{	this.obstacles.splice(obstacle, 1);
				obstacle--;
				actor.points += 1;
			}
			else
			{	x = this.obstacles[obstacle].x+this.obstacles[obstacle].width;
			}
		}
		while (x < canvas.width)
		{	this.obstacles.push(new this.type(x,devOptions));
			x += this.obstacles[this.obstacles.length-1].width;
		}
	}
}


class Laser extends Rectangle
{	constructor(x, y, owner,color)
	{	super(x, y, 100, 3, 50);
		this.color = color
		this.owner = owner;
		this.type = 'laser'

	}

	draw()
	{	
        context.shadowColor = this.color;
        context.shadowBlur = 30;
        context.fillStyle = this.color
        context.beginPath()
        context.roundRect(this.x, this.y, this.width, this.height, 5)
        context.fill()
        context.shadowBlur = 0
	}

	update()
	{	this.x += this.velocity;
	}

	test(rectangles)
	{	for (var rectangle = 0; (rectangle < rectangles.length); rectangle++)
		{	if (this.collide(rectangles[rectangle]) && rectangles[rectangle].constructor.name == 'Enemy' || this.collide(rectangles[rectangle]) && rectangles[rectangle].constructor.name == 'Enemy2')
			{
				this.y = canvas.height*2;
				if (rectangles[rectangle] instanceof Enemy || rectangles[rectangle] instanceof Enemy2)
				{	enemies.kill(rectangles[rectangle],this.owner,this.type);
					// sounds.laserCollideEnemy.play();
				}
			}
		}
	}
}


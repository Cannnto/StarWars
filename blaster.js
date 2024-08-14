class Blaster extends Rectangle{
    constructor(x,y,owner,color){
    super(x, y, 30, 10, 50);
    this.owner = owner
    this.type = 'tirin'
    this.color = color
    }
    
    draw()
    {	
        context.shadowColor = this.color;
        context.shadowBlur = 15;
        context.fillStyle = this.color;
        context.beginPath()
        context.roundRect(this.x, this.y, this.width, this.height, 10)
        context.fill()
        context.shadowBlur = 0
        // context.beginPath()
        // context.arc(this.x,this.y,this.width,0,Math.PI*2,true)
        // context.fill()
    
    }

    update()
    {	this.x += this.velocity/2;
    }

	test(rectangles)
	{	
        for (var rectangle = 0; (rectangle < rectangles.length); rectangle++)
		{	if (this.collide(rectangles[rectangle]))
			{	this.y = canvas.height*2;
				if (rectangles[rectangle] instanceof Enemy || rectangles[rectangle] instanceof Enemy2)
				{	enemies.kill(rectangles[rectangle],this.owner,this.type);
					// sounds.laserCollideEnemy.play();
				}
			}
		}
	}
}
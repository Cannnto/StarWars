class Sprites
{	constructor(image, width, height, xCut, yCut, size, wait)
	{	this.image = new Image();
		this.image.src = image;
		this.width = width;
		this.height = height;
		this.xCut = xCut
		this.yCut = yCut
		this.size = size;
		this.wait = wait;
		this.counter = wait;
		this.actual = 0;
	}

	draw(x, y, width, height)
	{	context.drawImage(this.image, this.actual*this.width+this.xCut, this.yCut, this.width, this.height, x, y, width, height);
	}

	update()
	{	if (--this.counter == 0)
		{	this.counter = this.wait;
			this.actual = (this.actual+1)%this.size;
		}
	}
}

class SpritesExp
{	constructor(image, width, height, xCut, yCut, size, wait)
	{	this.image = new Image();
		this.image.src = image;
		this.width = width;
		this.height = height;
		this.xCut = xCut
		this.yCut = yCut
		this.size = size;
		this.wait = wait;
		this.counter = wait;
		this.actual = 0;
		this.actualy = 0;
	}

	draw(x, y, width, height)
	{	context.drawImage(this.image, this.actual*this.width+this.xCut, this.actualy*this.height+this.yCut, this.width, this.height, x, y, width, height);
	}

	update()
	{	if (--this.counter == 0)
		{	this.counter = this.wait;
			this.actual = (this.actual+1)%this.size;
			if(this.actual%this.size==0){
				this.actualy =(this.actualy+1)%this.size
			}
		}
	}
}

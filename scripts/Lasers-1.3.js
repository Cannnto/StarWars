class Lasers
{	constructor()
	{	this.beams = [];
	}

	fire(x, y, owner,color)
	{	this.beams.push(new Laser(x, y, owner,color));
		sounds.actorFireLaser.play();
	}
	fireTirin(x,y,owner,color){
		this.beams.push(new Blaster(x, y,owner,color));
		sounds.actorFireBlaster.play();
	}
	iterate(rectangles)
	{	for (var beam = 0; (beam < this.beams.length); beam++)
		{	this.beams[beam].draw();

			this.beams[beam].test(rectangles);

			this.beams[beam].update();

			if (this.beams[beam].x+this.beams[beam].width > canvas.width)
			{	this.beams.splice(beam, 1);
				beam--;
			}
		}
	}
}


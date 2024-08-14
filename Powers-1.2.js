class Powers
{	constructor()
	{	this.powers = [];
		this.chance = undefined
	}

	iterate(actor,actor2,difficulty)
	{	
		this.chance = Math.abs(difficulty-3)**3/1000
		for (var power = 0; (power < this.powers.length); power++)
		{	this.powers[power].draw();

			this.powers[power].test(actor,actor2);

			this.powers[power].update();

			if (this.powers[power].x+this.powers[power].width < 0)
			{	this.powers.splice(power, 1);
				power--;
			}
		}

		if (Math.random() < this.chance)
		{	this.powers.push(((Math.random() < 0.8) ? new BlasterAmmo() : new LaserAmmo()));
		}

		if (Math.random() < this.chance)
		{	this.powers.push((Math.random() < 0.8) ? ((Math.random() < 0.5) ? new Bigger() : new Smaller()) : ((Math.random() < 0.5) ? new Health() : ((Math.random() < 0.5) ? new Ghost() : new Life())));
		}
	}
}
//Health 

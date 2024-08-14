class Enemies
{	constructor()
	{	this.enemies = [];
	}

	iterate(actor,rectangles)
	{	for (var enemy = 0; (enemy < this.enemies.length); enemy++)
		{	this.enemies[enemy].draw();

			this.enemies[enemy].test(actor);

			this.enemies[enemy].update(actor);

			this.enemies[enemy].iterate(actor,rectangles);

			if (this.enemies[enemy].x+this.enemies[enemy].width < 0)
			{	this.enemies.splice(enemy, 1);
				enemy--;
				actor.points += 10;
			}

			if (Math.random() < 0.005+actor.points/300/100){
				this.enemies[enemy].shoot();
				
				sounds.enemyShoot.play()
			}

		}
		if(devOptions.enemyCount == 0){
			devOptions.enemyCount+=0.5
		}
		if (Math.random() < 0.01+actor.points/(((devOptions.enemyCount)**3)*2)/100) //a cada 200 pontos
		{	this.enemies.push(Math.random() > 0.5 ? new Enemy() : new Enemy2());
		}
	}

	kill(enemy,owner,type){	

		if(type == 'laser'){enemy.health -= 100}
		else{enemy.health -= 40}
		
		if(enemy.health <= 0){
			owner.points += parseInt(100*(471*(enemy.width/471)*3/1000)+5);
			explosion.draw(enemy.x,enemy.y,enemy.width,enemy.height)
			sounds.spaceExplosion.play()
			this.enemies.splice(this.enemies.indexOf(enemy), 1);
		}
	}
}


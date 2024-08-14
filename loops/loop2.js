function loop2()
{	context.fillStyle = "rgb(0, 0, 0)";

	document.removeEventListener("keypress",onKeyPress)
	document.removeEventListener("keyup",pause)
		
	context.fillRect(0, 0, canvas.width, canvas.height);


	background.draw();
	
	context.fillStyle = "rgb(0, 0, 0)";
	for (var rectangle of [].concat(stars.stars, powers.powers, enemies.enemies, lasers.beams))
	//obstacles1.obstacles, obstacles2.obstacles,
	{	rectangle.draw();
	}


	if (actores.actor.state == "down" && actores.actor.lifes == 0)
	{	
		actores.actor.sprites.draw(actores.actor.x, actores.actor.y, actores.actor.height*actores.actor.sprites.width/actores.actor.sprites.height, actores.actor.height);
		
		actores.actor.velocity += 2;
		actores.actor.y += actores.actor.velocity;
		actores.actor.x += actores.actor.velocity/2;

		if (actores.actor.y > canvas.height)
		{	
			context.font = "100px Arial";
			context.textAlign = "center";
			context.textBaseline = "middle";
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor.points+" pontos", canvas.width/2, canvas.height/2);
			context.strokeStyle = "rgb(0, 0, 0)";
			context.lineWidth = 3;
			context.strokeText(actores.actor.points+" pontos", canvas.width/2, canvas.height/2);

			document.addEventListener("keyup",Death)

			clearInterval(timer);
			timer = setInterval(deathSreem,1000/FPS)
		}
	}

	if (actores.actor2.state == "down" && actores.actor2.lifes == 0)
	{	
		actores.actor2.sprites.draw(actores.actor2.x, actores.actor2.y, actores.actor2.height*actores.actor2.sprites.width/actores.actor2.sprites.height, actores.actor2.height);

		actores.actor2.velocity += 2;
		actores.actor2.y += actores.actor2.velocity;
		actores.actor2.x += actores.actor2.velocity/2;
		
		if (actores.actor2.y > canvas.height)
		{	
			context.font = "100px Arial";
			context.textAlign = "center";
			context.textBaseline = "middle";
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor2.points+" pontos", canvas.width/2, canvas.height/2);
			context.strokeStyle = "rgb(0, 0, 0)";
			context.lineWidth = 3;
			context.strokeText(actores.actor2.points+" pontos", canvas.width/2, canvas.height/2);

			document.addEventListener("keyup",Death)

			clearInterval(timer);
			timer = setInterval(deathSreem,1000/FPS)
		}
	}
}
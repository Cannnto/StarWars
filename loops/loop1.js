function loop1()
{	
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	backgroundMusicMenu.stop()

	if(lock == 0){
		backgroundMusic.play()
		lock = 1
	}

	background.draw();
	background.update() 



	if(options.players == 2){
		powers.iterate(actores.actor2);
		enemies.iterate(actores.actor2);
		actores.actor2.draw()
		actores.actor2.update()
	}
	obstacles1.iterate(actores.actor,actores.actor2);

	obstacles2.iterate(actores.actor,actores.actor2);

	stars.iterate();

	hud.draw();

	powers.iterate(actores.actor,actores.actor2,options.difficulty);


	enemies.iterate(actores.actor,[].concat(obstacles1.obstacles, obstacles2.obstacles));

	lasers.iterate([].concat(obstacles1.obstacles, obstacles2.obstacles,enemies.enemies));
	
	actores.actor.draw();

	actores.actor.update();
	
	backgroundMusic.iterate()
}
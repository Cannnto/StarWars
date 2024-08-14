class HUD
{	constructor(){
	this.blaster = new Image
	this.blaster.src = 'imgs/blaster.png'
	this.medkit = new Image
	this.medkit.src = 'imgs/medkit.png'
}
	draw()
	{	context.font = "40px myFont";
		context.textAlign = "left";
		context.textBaseline = "top";

		context.fillStyle = "rgb(255, 0, 0)";
		context.fillText(String.fromCharCode(10084), 10, 10);
		context.fillStyle = "rgb(255, 255, 255)";
		if(actores.actor.lifes ==Infinity){
			context.fillText("∞", 70, 10);
		}
		else{
			context.fillText(actores.actor.lifes, 70, 10);
		}


		if(actores.actor.health ==Infinity){

		}
		else{
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillRect(120, 15, 100, 30);
			context.fillStyle = "rgb(255, 0, 0)";
			context.fillRect(120, 15, actores.actor.health, 30);
	
		}


		context.drawImage(this.medkit, 10, 50,50,50);
		context.fillStyle = "rgb(255, 255, 255)";
		if(actores.actor.ammo.medkit ==Infinity){
			context.fillText("∞", 70, 50);
		}
		else{
			context.fillText(actores.actor.ammo.medkit, 70, 50);
		}


		context.shadowColor = "red";
        context.shadowBlur = 5;
		context.fillStyle = "rgb(255, 0, 0)";
		context.fillText(String.fromCharCode(8888), 10, 90);
		context.shadowBlur = 0
		context.fillStyle = "rgb(255, 255, 255)";
		if(actores.actor.ammo.laser ==Infinity){
			context.fillText("∞", 70, 90);
		}
		else{
			context.fillText(actores.actor.ammo.laser, 70, 90);
		}


		context.drawImage(this.blaster, 10, 130,50,50);
		context.fillStyle = "rgb(255, 255, 255)";
		if(actores.actor.ammo.blaster ==Infinity){
			context.fillText("∞", 70, 130);
		}
		else{
			context.fillText(actores.actor.ammo.blaster, 70, 130);
		}



		context.shadowColor = "white";
        context.shadowBlur = 15;
		context.fillStyle = "rgb(255, 255, 255)";
		context.fillText(String.fromCharCode(9876), canvas.width-150, 10);
        context.shadowBlur = 0;
		context.fillStyle = "rgb(255, 255, 255)";
		context.fillText(actores.actor.points, canvas.width-100, 10);


		if(options.players == 2){
			context.fillStyle = "rgb(255, 0, 0)";
			context.fillText(String.fromCharCode(10084), 10, canvas.height/1.24);
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor2.lifes, 70, canvas.height/1.24);

			context.fillStyle = "rgb(255, 255, 255)";
			context.fillRect(120, canvas.height/1.23, 100, 30);
			context.fillStyle = "rgb(255, 0, 0)";
			context.fillRect(120, canvas.height/1.23, actores.actor2.health, 30);

			context.drawImage(this.medkit, 10, canvas.height/1.18,50,50);
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor2.ammo.medkit, 70, canvas.height/1.18);

			context.shadowColor = "red";
			context.shadowBlur = 5;
			context.fillStyle = "rgb(255, 0, 0)";
			context.fillText(String.fromCharCode(8888), 10, canvas.height/1.12);
			context.shadowBlur = 0
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor2.ammo.laser, 70,canvas.height/1.12);

			context.drawImage(this.blaster, 10, canvas.height/1.06,50,50);
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor2.ammo.blaster, 70, canvas.height/1.06);

			context.shadowColor = "white";
			context.shadowBlur = 15;
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(String.fromCharCode(9876), canvas.width-150, canvas.height/1.06);
			context.shadowBlur = 0;
			context.fillStyle = "rgb(255, 255, 255)";
			context.fillText(actores.actor2.points, canvas.width-100, canvas.height/1.06);
		}
		 
	}
}


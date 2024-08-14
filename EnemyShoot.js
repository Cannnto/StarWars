class EnemyShoot extends Rectangle{
    constructor(x,y,width){
    super(x, y,width, 10, 50);
    this.type = 'EnemyShoot'
    }
    
    draw()
    {	
        context.shadowColor = "red";
        context.shadowBlur = 15;
        context.fillStyle = 'red';
        context.beginPath()
        context.roundRect(this.x, this.y+this.height*5, this.width, this.height, 10)
        context.fill()
        context.shadowBlur = 0
        // context.beginPath()
        // context.arc(this.x,this.y,this.width,0,Math.PI*2,true)
        // context.fill()
    
    }

    update()
    {	this.x -= this.velocity/2;
    }

	test(actor,rectangles){

        if (this.collide(actor)){
            this.y = canvas.height*2
            actor.hurt(30)
        }
	}
}
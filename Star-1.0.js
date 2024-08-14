class Star extends Rectangle
{	constructor(x)
	{	var size = 1+Math.random()*5;
		super(x, Math.random()*canvas.height, size, size, -size);
		this.circle1 = Math.random()*5
		this.circle2 =  Math.random()*Math.PI*2
	}

	draw()
	{	
		context.fillStyle = "rgb(255, 255, 255)";
		context.beginPath();
		context.arc(this.x, this.y, 1.5, this.circle1, this.circle2, true);
		context.closePath();
		context.fill();
	}
	update(){
		this.x += this.velocity*8;
	}
}

class Background{
	constructor(){
		this.background = new Image
		this.background2 = new Image
		this.deth = new Image
		this.destroyer = new Image
		this.background2.src = 'imgs/background.jpg'
		this.background.src = 'imgs/backgroundTrue.png'
		this.deth.src = 'imgs/deth_star.png'
		this.destroyer.src = 'imgs/destroyer.png'
		this.width = canvas.width
		this.height = canvas.height
		this.x = 0
		this.xStar = 0
		this.xDest =0
		this.y = 0
		this.velocity = 5
		this.velocityDes = 0
		this.velocityStar = 3
	}
	draw(){
		context.drawImage(this.background,this.x,this.y,this.width,this.height)
		context.drawImage(this.background,this.x+this.width,this.y,this.width,this.height)
		context.drawImage(this.deth,this.xStar+this.width,this.y+100,500,500)
		context.drawImage(this.destroyer,this.xDest+canvas.width,this.y+100,1000,800)
		if(this.x + canvas.width < 0){
			this.x = 0
		}
		if(this.xStar+this.width+600 < 0){
			this.velocityDes = 0.5
			this.velocityStar = 0	
			this.xStar=1000
			sounds.backgroundDestro.play()
		}
	}
	update(){
		this.x -= this.velocity
		this.xStar -=this.velocityStar
		this.xDest -= this.velocityDes
	}
}
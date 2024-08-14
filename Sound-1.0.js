class Sound
{	constructor(sound)
	{	this.audio = document.createElement("audio");
		this.audio.src = sound;
		this.audio.controls = false;
		this.audio.autoplay = false;
		this.audio.loop = false;
	}

	play()
	{	
		this.audio.play();
		this.audio.currentTime = 0;
		switch(options.sound){
			case 0:
				this.audio.volume = 1
			break
			case 1:
				this.audio.volume = 0.9
			break
			case 2:
				this.audio.volume = 0.8
			break
			case 3:
				this.audio.volume = 0.7
			break
			case  4:
				this.audio.volume = 0.6
			break
			case  5:
				this.audio.volume = 0.5
			break
			case  6:
				this.audio.volume = 0.4
			break
			case  7:
				this.audio.volume = 0.3
			break
			case  8:
				this.audio.volume = 0.2
			break
			case  9:
				this.audio.volume = 0.1
			break
			case 10 :
				this.audio.volume = 0
			break
		}
	}
}

class BackgroundMusic
{	constructor(sound)
	{	this.audio = document.createElement("audio");
		this.audio.className = 'a'
		this.audio.src = sound;
		this.audio.controls = false;
		this.audio.autoplay = false;
		this.audio.loop = true;
	}

	play()
	{			
		this.audio.play();
		this.audio.currentTime = 0;
	}
	iterate(){
		this.audio.volume = (10-options.sound)/10
	}
	stop(){
		this.audio.volume = 0
	}
}


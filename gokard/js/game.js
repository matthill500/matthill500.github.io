var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;
var timedEvent;
var particles;
	
	
var SceneA = new Phaser.Class({
	
	

    Extends: Phaser.Scene,

    initialize:

    function SceneA (){
        Phaser.Scene.call(this, { key: 'sceneA' });
    },
	
	

    preload: function (){
		
			var progressBar = this.add.graphics();
			var progressBox = this.add.graphics();
			progressBox.fillStyle(0xADFF2F, 0.8);
			progressBox.fillRect(155, 270, 320, 50);
			 
			this.load.audio('pjanoo', [
			'assets/pjanoo.mp3'
			]);
			
			this.load.image('audio', 'assets/audio.png');
			this.load.image('logo', 'assets/hill.png');
			this.load.image('background', 'assets/background.png');
			this.load.image('dominos', 'assets/Dominos.png');
			this.load.image('apache', 'assets/apache.png');
			this.load.image('fourstar', 'assets/fourstar.png');
			this.load.image('pizzahut', 'assets/pizzahut.png');
			this.load.image('deck', 'assets/backOfCard.png');
			this.load.image('dominosC', 'assets/dominos_card.png');
			this.load.image('apacheC', 'assets/apache_card.png');
			this.load.image('fourstarC', 'assets/fourstar_card.png');
			this.load.image('pizzahutC', 'assets/pizzahut_card.png');
			this.load.image('yes', 'assets/yes.png');
			this.load.image('no', 'assets/no.png');
			 for (var i = 0; i < 150; i++) {
			this.load.image('logo'+i, 'assets/hill.png');
			} 
		
			 this.load.on('progress', function (value) {
				console.log(value);
				percentText.setText(parseInt(value * 100) + '%');
				progressBar.clear();
				progressBar.fillStyle(0xADFF2F, 1);
				progressBar.fillRect(165, 280, 300 * value, 30);
			});
			
			var width = this.cameras.main.width;
			var height = this.cameras.main.height;
			var loadingText = this.make.text({
				x: width / 2,
				y: height / 2 - 50,
				text: 'Loading...',
				style: {
					font: '20px monospace',
					fill: '#FFFFFF'
				}
			});

			var percentText = this.make.text({
				x: width / 2,
				y: height / 2 - 5,
				text: '0%',
				style: {
					font: '18px monospace',
					fill: '#FFFFFF'
				}
			});
			percentText.setOrigin(0.5, 0.5);
			loadingText.setOrigin(0.5, 0.5);
						
			this.load.on('fileprogress', function (file) {
				console.log(file.src);
			});
			 
			this.load.on('complete', function () {
				console.log('complete');
				percentText.destroy();
				progressBar.destroy();
				progressBox.destroy();
				loadingText.destroy();
			}); 
    },

    create: function () {
				//load audio
			var music = this.sound.add('pjanoo');
			
				//load images
			let bg = this.add.sprite(640/2, 360/2, 'background');
			let player1 = this.add.sprite(60, 50, 'dominos');
			let player2 = this.add.sprite(60, 90, 'apache');
			let player3 = this.add.sprite(60, 130, 'fourstar');
			let player4 = this.add.sprite(60, 170, 'pizzahut');
			let card1 = this.add.sprite(-320, 280, 'dominosC');
			let card2 = this.add.sprite(-320, 280, 'apacheC');
			let card3 = this.add.sprite(-320, 280, 'fourstarC');
			let card4 = this.add.sprite(-320, 280, 'pizzahutC');
			let yes = this.add.sprite(-320, 280, 'yes').setInteractive();	
			let no = this.add.sprite(-320, 280, 'no').setInteractive();
			
			yes.setScale(0.1);
			no.setScale(0.1);
			
			card1.setScale(0.2);
			card2.setScale(0.2);
			card3.setScale(0.2);
			card4.setScale(0.2);
			
			  //set player scale
			player1.setScale(0.4);
			player2.setScale(0.4);
			player3.setScale(0.4);
			player4.setScale(0.4);
			
			var audio = this.add.sprite(590, 30, 'audio').setInteractive();
			audio.setScale(0.06);
			var counter = 0;
			audio.on('pointerdown', function(){	
				
				if(counter === 1 || counter === 3 || counter === 5 || counter === 7){
				music.pause();
				} else{
				music.play();
				}
				counter++;
			});
			
			//create deck sprite
			var deck = this.add.sprite(60, 280, 'deck').setInteractive();
			  
			//set deck scale
			deck.setScale(0.2);
			
			
			deck.on('pointerdown', function(){
		 
			var deck = ["player One","player Two","player Three","player Four"];	 
			var cardPicked = deck[Math.floor(Math.random()*deck.length)];
			var movePicked = deck[Math.floor(Math.random()*deck.length)];
			var answer;
			
			alert("card from deck: "+cardPicked);
			
			if(cardPicked === "player One"){
				player1Score += 10;
				card1.x = 180;
				card2.x = -320;
				card3.x = -320;
				card4.x = -320;
				
			var answer = prompt("Would you like to go again?");
			
			if(answer === "yes" && movePicked === "player One"){
				alert("Well Done");
				player1Score += 10;		
			   }else if(answer === "yes" && movePicked != "player One"){
				alert("sorry");
				player1Score -= 10;
			   }else if(answer === "no"){
				alert("your loss!");
			   }
			}
			
			if(player1Score === 10){
			   player1.x = 200;
			}
			if(player1Score === 20){
			   player1.x = 335;
			}
			if(player1Score === 30){
			   player1.x = 435;
			}
			if(player1Score === 40){
			   player1.x = 600;
			}
			
			if(cardPicked === "player Two"){
				player2Score += 10;
				card2.x = 180;
				card1.x = -320;
				card3.x = -320;
				card4.x = -320;
			
			var answer = prompt("Would you like to go again?");
			
			if(answer === "yes" && movePicked === "player Two"){
				alert("Well Done");
				player2Score += 10;		
			   }else if(answer === "yes" && movePicked != "player Two"){
				alert("sorry");
				player2Score -= 10;
			   }else if(answer === "no"){
				alert("your loss!");
			   }
			}
			
			if(player2Score === 10){
			   player2.x = 200;
			}
			if(player2Score === 20){
			   player2.x = 335;
			}
			if(player2Score === 30){
			   player2.x = 435;
			}
			if(player2Score === 40){
			   player2.x = 600;
			}
			
			if(cardPicked === "player Three"){
				player3Score += 10;
				card3.x = 180;
				card2.x = -320;
				card1.x = -320;
				card4.x = -320;
			
			var answer = prompt("Would you like to go again?");
			
			if(answer === "yes" && movePicked === "player Three"){
				alert("Well Done");
				player3Score += 10;		
			   }else if(answer === "yes" && movePicked != "player Three"){
				alert("sorry");
				player3Score -= 10;
			   }else if(answer === "no"){
				alert("your loss!");
			   }
			}
			
			if(player3Score === 10){
			   player3.x = 200;
			}
			if(player3Score === 20){
			   player3.x = 335;
			}
			if(player3Score === 30){
			   player3.x = 435;
			}
			if(player3Score === 40){
			   player3.x = 600;
			}
			
			if(cardPicked === "player Four"){
				player4Score += 10;
				card4.x = 180;
				card2.x = -320;
				card3.x = -320;
				card1.x = -320;
			
			var answer = prompt("Would you like to go again?");
			
			if(answer === "yes" && movePicked === "player Four"){
				alert("Well Done");
				player4Score += 10;		
			   }else if(answer === "yes" && movePicked != "player Four"){
				alert("sorry");
				player4Score -= 10;
			   }else if(answer === "no"){
				alert("your loss!");
			   }
			}
			
			if(player4Score === 10){
			   player4.x = 200;
			}
			if(player4Score === 20){
			   player4.x = 335;
			}
			if(player4Score === 30){
			   player4.x = 435;
			}
			if(player4Score === 40){
			   player4.x = 600;
			}
			
		  });
		   
    },
	
	update: function(){
		if (player1Score === 40 || player2Score === 40 || player3Score === 40 || player4Score === 40){
			timedEvent = this.time.delayedCall(4000, function onEvent(){this.scene.start('sceneB');}, [], this);
		}
	}

});



var SceneB = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneB ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },

    preload: function ()
    {
        this.load.image('dominos', 'assets/dominos.png');
		this.load.image('apache', 'assets/apache.png');
		this.load.image('fourstar', 'assets/fourstar.png');
		this.load.image('pizzahut', 'assets/pizzahut.png');
		this.load.image('podium', 'assets/podium.png');
		this.load.image('fireworks', 'assets/fireworks.png');
		this.load.audio('fireworks', [
			'assets/fireworks.mp3'
			]);
    },

    create: function ()
    {
		
		let bg2 = this.add.sprite(640/2, 360/2, 'podium');
		var music2 = this.sound.add('fireworks');
		music2.play();
		
		var winningText = this.make.text({
				x: 640 / 1.9,
				y: 20,
				style: {
					font: '30px monospace',
					fill: '#FFFFFF'
				}
			});
			
		var scoreText = this.make.text({
				x: 640 / 1.9,
				y: 50,
				style: {
					font: '18px monospace',
					fill: '#FFFFFF'
				}
			});
		
		scoreText.setText('Player 1 Score: '+player1Score+
						'\nPlayer 2 Score: '+player2Score+
						'\nPlayer 3 Score: '+player3Score+
						'\nPlayer 4 Score: '+player4Score
							);
		
		if(player1Score === 40){
        var winner1 = this.add.sprite(640/2, 360/2, 'dominos');
		winner1.setScale(0.6);
		winningText.setText('PLAYER 1 WINS!!');
		}
		if(player2Score === 40){
		var winner2 = this.add.sprite(640/2, 360/2, 'apache');
		winner2.setScale(0.6);	
		winningText.setText('PLAYER 2 WINS!!');
		}
		if(player3Score === 40){
		var winner3 = this.add.sprite(640/2, 360/2, 'fourstar');
		winner3.setScale(0.6);
		winningText.setText('PLAYER 3 WINS!!');
		}
		if(player4Score === 40){
		var winner4 = this.add.sprite(640/2, 360/2, 'pizzahut');
		winner4.setScale(0.6);
		winningText.setText('PLAYER 4 WINS!!');
		}
		
		

		particles = this.add.particles('fireworks');

        particles.createEmitter({
        alpha: { start: 1, end: 0 },
        scale: { start: 0.1, end: 0.4  },
        //tint: { start: 0xff945e, end: 0xff945e },
        speed: 0.1,
        accelerationY: -150,
        angle: { min: -65, max: -65 },
        rotate: { min: -120, max: 120 },
        lifespan: { min: 800, max: 1300 },
        blendMode: 'ADD',
        frequency: 1,
        maxParticles: 2,
        x: 160,
        y: 120
    });
    },

    update: function ()
    {
     
	 
    }

});



var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
	pixelArt: true,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB],
	audio: {disableWebAudio: true}
};

var game = new Phaser.Game(config);

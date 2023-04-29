var fondo;
var carro;
var cursores;
var enemigos;
var timer;
var gasolinas;
var timerGasolina;

var Logro = {

	preload: function(){
		juego.load.image('bg','img/pista2.png');
		juego.load.image('carro','img/autorj.png');
		juego.load.image('enemigo1','img/lamborg.png');
		juego.load.image('gasolina','img/barril2.png');
		juego.load.audio('choque','audio/choque3.mp3');
		juego.load.audio('puntos','audio/puntos.wav');
		juego.load.bitmapFont('ice', 'fonts/arcade.png', 'fonts/arcade.xml');
		juego.forceSingleUpdate = true;

	},

	create: function(){
		fondo = juego.add.tileSprite(0, 0, 290, 540,'bg');

		carro = juego.add.sprite(juego.width/2, 496, 'carro');
		carro.anchor.setTo(0.5);

		enemigos=juego.add.group();
		juego.physics.arcade.enable(enemigos,true);
		enemigos.enableBody=true;
		enemigos.createMultiple(20,'enemigo1');
		enemigos.setAll('anchor.x',0.5);
		enemigos.setAll('anchor.y',0.5);
		enemigos.setAll('outOfBoundsKill',true);
		enemigos.setAll('checkWorldBounds',true);

		gasolinas=juego.add.group();
		juego.physics.arcade.enable(gasolinas,true);
		juego.physics.arcade.enable(carro,true);
		gasolinas.enableBody=true;
		gasolinas.createMultiple(20,'gasolina');
		gasolinas.setAll('anchor.x',0.5);
		gasolinas.setAll('anchor.y',0.5);
		gasolinas.setAll('outOfBoundsKill',true);
		gasolinas.setAll('checkWorldBounds',true);

		timer = juego.time.events.loop(1500,this.crearCarroMalo,this);
		timerGasolina = juego.time.events.loop(2000,this.crearGasolina,this);
		cursores=juego.input.keyboard.createCursorKeys();

		//PUNTOS
		txtPuntos = juego.add.bitmapText(85, 20, 'ice', '9', 10);
		juego.add.bitmapText(15, 20, 'ice', 'Puntos: ',10);

		//VIDAS
		if (vidas ==3) {
			txtVidas = juego.add.bitmapText(260,20, 'ice', '3', 10);
		}else if (vidas ==2) {
			txtVidas = juego.add.bitmapText(260,20, 'ice', '2', 10);
		}else{
			txtVidas = juego.add.bitmapText(260,20, 'ice', '1', 10);
		}

		juego.add.bitmapText(200,20, 'ice', 'Vidas: ',10);
		
		juego.add.bitmapText(12,525, 'ice', 'Steven Amaya',10);
		juego.add.bitmapText(135,20, 'ice', 'Nivel 3',10);

        juego.add.bitmapText(70,260, 'ice','Ganaste',25);

        juego.add.bitmapText(20,300, 'ice','VOLVER A JUGAR',10);
		
	},

	update: function(){
		fondo.tilePosition.y +=3;
		
		if (cursores.right.isDown && carro.position.x<245) {
			carro.position.x+=5;
		}
		else if (cursores.left.isDown && carro.position.x>45) {
			carro.position.x-=5;
		}	

        if (juego.input.activePointer.isDown) {
			juego.state.start('Inicio');
            musicaFondo.stop();
		}
	},

	crearCarroMalo: function(){
		var posicion = Math.floor(Math.random()*3)+1;
		var enemigo = enemigos.getFirstDead();
		enemigo.physicsBodyType = Phaser.Physics.ARCADE;
		enemigo.reset(posicion*80,0);
		enemigo.body.velocity.y = 500;
		enemigo.anchor.setTo(1);

	},

	crearGasolina: function(){
		var posicion = Math.floor(Math.random()*3)+1;
		var gasolina = gasolinas.getFirstDead();
		gasolina.physicsBodyType = Phaser.Physics.ARCADE;
		gasolina.reset(posicion*73,0);
		gasolina.body.velocity.y = 400;
		gasolina.anchor.setTo(0.5);
	}

};

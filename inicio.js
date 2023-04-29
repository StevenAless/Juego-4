var fondo;
var inicio;
var Inicio = {
    
    preload: function(){
        juego.load.bitmapFont('ice', 'fonts/arcade.png', 'fonts/arcade.xml');
		juego.load.image('inicio','img/pantallaInicio.png');
        juego.load.image('start','img/start2.png');

        
    },
    
    create: function(){
        fondo = juego.add.tileSprite(0, 0, 290, 550,'inicio');
        juego.add.bitmapText(55,45, 'ice', 'Steven Amaya',20);
        juego.add.bitmapText(55,515, 'ice', '1622172',20);
        inicio = juego.add.sprite(50, 200, 'start');
        
    },
    update: function(){
        if (juego.input.activePointer.isDown) {
			juego.state.start('Juego');
		}

    }
    
};
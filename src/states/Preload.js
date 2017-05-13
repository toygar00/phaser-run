class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
		//
		this.game.load.spritesheet('myguy', 'assets/player/player-spritemap-v9.png', 46, 50);
		// this.game.load.spritesheet('player', 'assets/greenninja.png', 38, 48);
   		this.game.load.tilemap('tilemap', 'assets/level2.json', null, Phaser.Tilemap.TILED_JSON);
   		this.game.load.image('tiles', 'assets/tilesheet1.png');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;

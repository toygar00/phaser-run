import ExampleObject from 'objects/ExampleObject';

let mysprite;

class Main extends Phaser.State {

	create() {

	}

	update() {
		mysprite = this.game.add.sprite(15, 30, 'myguy');
		mysprite.animations.add('left', [21, 22, 23, 24, 25, 26, 27], 10, true);
		mysprite.animations.play('left');
	}

}

export default Main;

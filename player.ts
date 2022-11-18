class GameScene extends Phaser.Scene {

  private VELOCITY = 100;
  private wsClient?: WebSocket;

  // delete this
  // private player?: Phaser.GameObjects.Sprite;
  // ...

  private id = uuid();
  private players: {[key: string]: Phaser.GameObjects.Sprite} = {};

  // ...

// Refactor your code such that all references to this.player
// becomes this.players[this.id]

// create
public create() {
  // ...
  this.players[this.id] = this.physics.add.sprite(48, 48, "player", 1);
  this.physics.add.collider(this.players[this.id], layer);
  this.cameras.main.startFollow(this.players[this.id]);
}


// update
public update() {
  if (this.players[this.id]) {
    const player = this.players[this.id];
    let moving = false;

    if (this.leftKey && this.leftKey.isDown) {
      (player.body as Phaser.Physics.Arcade.Body).setVelocityX(-this.VELOCITY);
      player.play("left", true);
      moving = true;
    }
    // ...
    player.update();
  }
}

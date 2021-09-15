class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

  life() {
    push()
     fill("white");
     textSize(20);

     stroke("black");
     text("Player",player.body.position.x ,player.body.position.y - 150);

     fill(this.life1)
     rect(player.body.position.x - 105, player.body.position.y - 135, 70, 30);

     fill(this.life1)
     rect(player.body.position.x - 35, player.body.position.y - 135, 70, 30);

     fill(this.life1)
     rect(player.body.position.x + 35, player.body.position.y - 135, 70, 30);
    pop()
  }
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

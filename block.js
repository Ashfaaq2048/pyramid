class Block{
    constructor(x,y,width,height){
     var options = {
       isStatic:false,
       restitution:0.5,
       friction:1,
       density:0.5
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width - width;
     this.height = height;
     World.add(world,this.body);
    }
    display(){
        fill('blue');
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}

class Bob {
  constructor (x,y,diameter){
   
    var option = {
      restitution : 0,
      isStatic : true,
    }

    this.body = Bodies.circle(x,y,diameter,option);
    this.diameter = diameter;
    
    World.add(world,this.body);
 }
 display(){
   var pos =this.body.position;   
   fill("blue");
   ellipse(pos.x,pos.y,0,0,this.diameter,this.diameter)
 }
}
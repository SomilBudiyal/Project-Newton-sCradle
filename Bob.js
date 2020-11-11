class Bob {
  constructor (x,y,diameter){
   
    this.body = Bodies.circle(x,y,diameter);
    this.diameter = diameter;
    
    World.add(world,this.body);
 }
 display(){
   var pos =this.body.position;   
   fill("blue");
   ellipse(pos.x,pos.y,0,0,this.diameter,this.diameter)
 }
}
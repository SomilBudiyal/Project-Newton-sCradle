class Bob {
  constructor (x,y,diameter){
   
    var option = {
       'restitution' : 0,
       'density' : 0.8,
    }

    this.body = Bodies.circle(x,y,diameter/2,option);
    this.diameter = diameter;
    
    World.add(world,this.body);
 }
 display(){
   var pos =this.body.position; 
  push();
   translate(pos.x,pos.y);  
   fill("blue");
   ellipse(0,0,this.diameter,this.diameter);
   pop();
 }
}
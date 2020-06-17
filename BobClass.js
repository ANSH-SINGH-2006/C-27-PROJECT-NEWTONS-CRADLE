//class BobClass{
  //  constructor(x,y,radius){
     //   var options = {
       //     isStatic: false,
        //    'restitution':1,    
         //   'friction':2.5,
          //  'density':1.3
            
        //}

        this.image=loadImage("sprites/ball1.png");
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.Radius=radius;
      
      World.add(world, this.body);
      
      

    }
    
    display(){
        var pos =this.body.position;
        
        //fill("red");
        //circle(pos.x,pos.y,this.Radius);
       
        image(this.image,this.body.position.x-50,this.body.position.y-40,100,100);
      }


    }
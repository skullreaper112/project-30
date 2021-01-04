const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    polygon=new Polygon(80,200,50);

    slingshot=new SlingShot(polygon.body,{x:90,y:400});

    ground = new Ground(450,510,350,15);
    Platform = new Platform(890,370,240,15);

    box1 = new Box(330,480,40,60);
    box2 = new Box(370,480,40,60);
    box3 = new Box(410,480,40,60);
    box4 = new Box(450,480,40,60);
    box5 = new Box(490,480,40,60);
    box6 = new Box(530,480,40,60);
    box7 = new Box(570,480,40,60); 

    box8 = new RedBox(370,420,40,60);    
    box9 = new RedBox(410,420,40,60);
    box10 = new RedBox(450,420,40,60);
    box11 = new RedBox(490,420,40,60);
    box12 = new RedBox(530,420,40,60);

    box13 = new BlueBox(410,360,40,60);
    box14 = new BlueBox(450,360,40,60);
    box15 = new BlueBox(490,360,40,60);

    box16 = new OrangeBox(450,300,40,60);

    box17 = new RedBox(810,335,40,60);
    box18 = new BlueBox(850,335,40,60);
    box19 = new OrangeBox(890,335,40,60);
    box20 = new RedBox(930,335,40,60);
    box21 = new BlueBox(970,335,40,60);

    box22 = new OrangeBox(850,275,40,60);
    box23 = new BlueBox(890,275,40,60);
    box24 = new RedBox(930,275,40,60);

    box25 = new Box(890,215,40,60);




}

function draw(){
    background(183,28,204);
    Engine.update(engine); 
    debug:true;
    box1.display();
    box2.display();   
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();


    ground.display();
    Platform.display();
    polygon.display();
    slingshot.display();

  
   
    //slingshot.display();    
}

function mouseDragged(){
   
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    function mouseReleased(){
        slingshot.fly();
        
    }
    
   /*function keyPressed(){
        if(keyCode === ){
           
        }*/
var song
var songIsplay=false //false代表音樂沒撥放`,true撥放
var amp
function preload(){
  song = loadSound("Pachelbel - Canon in D (Best Piano Version).mp3");
}


function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}



var face_x = []
var face_y =[]
var face_size =[]
var face_num


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  //face_size = random(200,230)
  //face_x = random(0,width)
  //face_y = random(0,height)
  face_num =6
  for (var i =0;i<face_num;i++){
    face_size[i] = random(20,100)
    face_x[i] = random(100,width)
    face_y[i] = random(100,height)
  }


}

function draw() {
  background("#EBDCEC");
  //textSize(50)
  //text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++)
  {
  push()
  translate(face_x[j],face_y[j])
  let f_s = face_size[j]
  noStroke()
  fill(255)
  ellipse(-f_s/4,-f_s/2,f_s/4,f_s/1.25) //耳
  ellipse(f_s/4,-f_s/2,f_s/4,f_s/1.25)

  fill(255)
  //ellipse(windowWidth/2,windowHeight/2,300,300) //身體
  ellipse(0,0,f_s) //臉
  
  fill("#F9E0E8")
  ellipse(-f_s/3.07,f_s/5,f_s/5.5,f_s/10) //腮紅
  ellipse(f_s/3.07,f_s/5,f_s/5.5,f_s/10)

  fill("#B9D3EE")
  //fill("#F9E0E8")
  ellipse(-f_s/3.6,0,f_s/4.3) //眼影
  ellipse(f_s/3.6,0,f_s/4.3)

  fill(0)
  //ellipse(-f_s/3.77,0,f_s/7.69,f_s/7.69) //左眼睛
  //ellipse(f_s/3.77,0,f_s/7.69,f_s/7.69) //右眼
  ellipse(0,f_s/13.3,f_s/11.1,f_s/20) //鼻頭
  ellipse(0,f_s/10,f_s/66.6,f_s/10) //鼻線
  noFill()
  stroke(0)
  strokeWeight(2)
  //ellipse(0,f_s/5.5,f_s/33.3,f_s/15.3) //嘴巴
//動眼睛
  fill(0)
  ellipse(-f_s/3.77+map(mouseX,0,width,-f_s/33.3,f_s/66.6),map(mouseY,0,height,-f_s/33.3,f_s/66.6),f_s/7.69) 
  ellipse(f_s/3.77+map(mouseX,0,width,-f_s/33.3,f_s/66.6),map(mouseY,0,height,-f_s/33.3,f_s/66.6),f_s/7.69)



 fill("#FF8C00")
  noStroke()
ellipse(-f_s/3.84,-f_s/1.81,f_s/5.71) //花朵
ellipse(-f_s/3.63,-f_s/2.5,f_s/5.71)
ellipse(-f_s/2.98,-f_s/2.04,f_s/5.72)
ellipse(-f_s/5.26,-f_s/2.29,f_s/5.71)
ellipse(-f_s/5.71,-f_s/1.92,f_s/5.71)


//fill("#FFFF00") //花蕊
  //noStroke()
//ellipse(-f_s/3.84,-f_s/2,f_s/10)

noFill()
stroke(0)
strokeWeight(1)
 if(mouseIsPressed)
    {   //mouseIsPressed為true，代表有按下滑鼠
      ellipse(0,f_s/5.5,f_s/33.3,f_s/25)
      fill("#FFFF00")
      noStroke()
      ellipse(-f_s/3.84,-f_s/2,f_s/6.66)
    }
    else
    {   //mouseIsPressed為false，代表沒有按下滑鼠
      ellipse(0,f_s/5.5,f_s/33.3,f_s/15.3)
      fill("#FFFF00")
      noStroke()
      ellipse(-f_s/3.84,-f_s/2,-f_s/10)
    }
    
    noFill()
  pop()
  
 

  


}
}
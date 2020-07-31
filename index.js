"use script"
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const colors = new Array("red","green","blue","yellow","orange","purple","pink");


class Blob {
    constructor(color, size){ //this is your init
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.color = color
        this.size = size
        this.xChange = Math.random();
        this.yChange = Math.random();
    }


    //dont wanna clear per blob draw.
    draw(){
        context.beginPath();
        context.arc(this.x, this.y,this.size, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    };


    
    move(){
      if(this.x >= canvas.width || this.x <= 0){
          this.xChange *= -1
        }

      if(this.y >= canvas.height || this.y <= 0){
          this.yChange *= -1
        }

      this.x += this.xChange;
      this.y += this.yChange;
    };



};

//Creating Array of blobs
let blobs = new Array();
let btnAdd = document.getElementById("btnClick");

btnAdd.onclick = function() {

  function canvasDraw(){ 
    context.clearRect(0, 0, canvas.width, canvas.height);
    blobs.forEach(
       function(obj){
        obj.draw();
        obj.move();
  });
  };

   function randomChoice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
};



for (let i = 0; i<10; i++){
    let randColor = randomChoice(colors)
    let newBlob = new Blob(randColor,25);
    blobs.push(newBlob);
};

setInterval(
  function() {
canvasDraw();
  });
};



 let removeBtn = document.getElementById("btnClick");
  //Removing single Blob Object
  function  removeBlob(){
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    blobs.pop()
};

//console.log (removeBlob);
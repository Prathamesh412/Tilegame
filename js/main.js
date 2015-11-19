var tile = function(r,c){
  this.row = r;
  this.col = c;
  
};

var player = function(name, sign){
  this.name = name;
  this.sign = sign
};
var players =[];
players[0]= new player('Surya','X');
players[1]= new player('Darshan','0');
var playerCounter=0;

var board = function(){
  this.tiles =[];
  //create tic and toe tile array
  this.init = function(){
    for(var i = 0; i<3; i++)
      for(var j=0; j<3; j++)
        this.tiles.push(new tile(i,j));
  };
  //Draw the tic tac toc board
  this.drawBoard = function(){
    var boardDiv = document.createElement('div');
    boardDiv.className = 'board';
    boardDiv.setAttribute('id','board');
    var row=0;
    var rowDiv= [];
    for(var i = 0; i<3; i++)
    {
      rowDiv[i] = document.createElement('div');
      rowDiv[i].className = 'row';      
    }
    //9 tiles
    for(var i = 0; i<this.tiles.length; i++)
    {
      var tileDiv = document.createElement('span');
      tileDiv.className = 'tile';
      tileDiv.setAttribute('id','tile['+i+']');
      tileDiv.setAttribute('data-row',this.tiles[i].row);
      tileDiv.setAttribute('data-col',this.tiles[i].col);
      tileDiv.addEventListener('click',function(){
        this.innerHTML = players[playerCounter].sign;
        playerCounter= 1- playerCounter;
      });
      rowDiv[row].appendChild(tileDiv);
    // this.tiles[i].div = tileDiv;
      if(i==2 || i==5 || i==8)
        row++;
    }    
    for(var i = 0; i<3; i++)
    {
      boardDiv.appendChild(rowDiv[i]);
    }
    document.body.appendChild(boardDiv);
     
    
//      messageDiv = document.createElement('div');
//  messageDiv.setAttribute('id','messages');
//  messageDiv.innerHTML= players[0].name +', this is your turn';
//  document.body.appendChild(messageDiv);
      
    this.checkWinner = function(){
        
       for(var z=0;z<=1;z++){
      
         //  console.log(tile[0].innerHTML)
          // console.log(this.tile[0])
          // console.log("itssssssss")
        if(this.tiles[0].innerHTML == players[z].sign &&
          this.tiles[1].innerHTML == players[z].sign &&
          this.tiles[2].innerHTML == players[z].sign)
            //document.getElementById("messages").innerHTML =players[playerCounter].name
          console.log("Inside");
        
        if(this.tiles[3].innerHTML == players[z].sign &&
          this.tiles[4].innerHTML == players[z].sign &&
          this.tiles[5].innerHTML == players[z].sign)
          console.log("Inside");
        
        if(this.tiles[6].innerHTML == players[z].sign &&
          this.tiles[7].innerHTML == players[z].sign &&
          this.tiles[8].innerHTML == players[z].sign)
          console.log("Inside");
        
        if(this.tiles[0].innerHTML == players[z].sign &&
          this.tiles[3].innerHTML == players[z].sign &&
          this.tiles[6].innerHTML == players[z].sign)
          console.log("Inside");
        
        if(this.tiles[1].innerHTML == players[z].sign &&
          this.tiles[4].innerHTML == players[z].sign &&
          this.tiles[7].innerHTML == players[z].sign)
          console.log("Inside");
        
        if(this.tiles[2].innerHTML == players[z].sign &&
          this.tiles[5].innerHTML == players[z].sign &&
          this.tiles[8].innerHTML == players[z].sign)
          console.log("Inside");
        
        if(this.tiles[0].innerHTML == players[z].sign &&
          this.tiles[4].innerHTML == players[z].sign &&
          this.tiles[8].innerHTML == players[z].sign)
          console.log("Inside");
        
        if(this.tiles[2].innerHTML == players[z].sign &&
          this.tiles[4].innerHTML == players[z].sign &&
          this.tiles[7].innerHTML == players[z].sign)
          console.log("Inside");
    
           else
               console.log("outside");
       }
    }; 
        
      
   // isGameOver = this.checkWinner();
    
   // console.log(isGameOver)
    
  };
    
  


};


var myBoard = new board();
myBoard.init();
myBoard.drawBoard();
myBoard.checkWinner();
//myBoard.checkWinner(tile, player);
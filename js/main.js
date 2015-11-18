//var game = function(){
// // var a = 3;
//  //var b = 3;
// // var tile = [];
// 
// //   var row,cell;
//  
//var board = document.createElement("table");
//    board.border=1;
//  for (i = 0; i < 3; i += 1) {
//           var row = document.createElement("tr");
//            board.appendChild(row);
//            for (j = 0; j < 3; j += 1) {
//            var cell = document.createElement("td");
//                row.appendChild(cell);
//               }
//  }
//};

var player = function(name){
  this.name = name;
  this.score = 0;
}
var players =[];

players[0]= new player("prath");
players[1] = new player("Surya");

var tile = function(value){
  this.value = value;
 
};

var game = function(){
  this.rows = r;
  this.columns = q;
  var tiles = [];
    
    var r = ['x','0','x'];
    var q = 3;
  //52 loops = 4 *13
  
  for(var i = 0; i< 3;i++)
    {
    for(var j = 0; j< this.rows.length;j++){
        var tileObject = new tile(j+1, this.rows[j]);
        tiles.push(tileObject);
        }
      
     }

  return tiles;
};

var mytitles = new game();

var init = function() {

      for (var i = 0; i < mytitles.length; i++) {
        div = document.createElement('div');
        div.className ='scores';
          
        div.innerHTML = '<span class="player">' + "hey" +'<br/></span>';
        
          
        document.body.appendChild(div);
    }
   

};

init();
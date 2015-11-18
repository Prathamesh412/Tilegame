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
var player = function(name) {
    this.name = name;
    this.score = 0;
};
var players = [];

players[0] = new player("prath");
players[1] = new player("Surya");

var tile = function(r,c){
 this.row =r;
  this.col = c;

};

var game = function(row, column) {
    this.rows = row;
    this.columns = column;
    this.tiles = [];

    this.initialize = function() {

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var tileObject = new tile(i, j);
                this.tiles.push(tileObject);
            }

        }
        // return tiles;
        console.log("Heyyy");
    };

    this.drawBoard = function() {
        console.log(this.tiles);
        for (var i = 0; i < this.tiles.length; i++) {
            div = document.createElement('div');
            div.className = 'tic';
            div.innerHTML = '<span>' + "Hey" + '</span>';
            document.body.appendChild(div);
        }

    };
    
//    this.drawBoard = function(){
//		for(i=0;i<tiles.length;i++){
//			tileDiv = document.createElement('div');
//			tileDiv.className = 'tic';
//			tileDiv.addEventlistener('click', function(event){
//
//					if(player[playerCounter == 0]){
//						drawTileDiv.innerHTML = '<span onclick="">X</span>';
//						playerCounter++;
//					}
//					else if(player[playerCounter == 1]){
//						drawTileDiv.innerHTML = '<span onclick="">Y</span>';
//						playerCounter--;
//					}					
//			});
//		}
//		document.body.appendChild(tileDiv);
//	};
    
//    var test = function(){
//		 for(i = 0; i<3; i++){
//			for(j=0; j<3; j++){
//			  	if(tile(1,1)=="X" && tile(i+i,j+1)=="X" && tile()=="X"){
//                    console.log("this")
//		  	}
//		  		if(tile(1,1)=="Y" && tile(i+i,j+1)=="Y" && tile()=="Y"){
//                    console.log("yes")
//	  		}
//	  
//	    }
//    }
//        
//    };
//
//};
    
    
// end of game function
var mytitles = new game(3,3);
mytitles.initialize();
mytitles.drawBoard();




function beerOnTheWall() {
	for (var j = 99; j >= 1; j--) {
	    if (j === 1) {
	        console.log("1 bottle of beer on the wall, one bottle of beer. Take one down, pass it around, 0 bottles of beer on the wall.");
	    } else if (j === 2) {
	        console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall.");
	    } else {
	        console.log(j + " bottles of beer on the wall, take one down, pass it around, " + (j - 1) + " bottles of beer on the wall.");
	    } 
	};
};

beerOnTheWall();
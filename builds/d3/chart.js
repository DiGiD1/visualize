function drawChart(){
	//array med objekt
	d3.jason("data.json"), function (jsonData) {
	
	var xs = [];
	var ys = [];
	for (var i=0; i <jsonDta.lenght ; i++){
		xses.push(jsonDta[i].x)
		yses.push([i].y)
	}
	
	//skapa ritunderlag
	var width = 800;
	var height = 500;
	
	var canvas = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);
									
	var pathString = d3.line()
		.x(function(data,i){return data.x})
		.y(function (data,i){return data.y})
	
	canvas.append("path")
		.attr("fill", "none")
		.attr("stroke", "blue")
		.attr("d", pathString(dataArray));
		console.log(pathString(dataArray))
	}
}
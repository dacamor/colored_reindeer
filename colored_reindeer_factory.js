// Return an object with both a reindeer and color
const createColoredReindeer = function (reindeer, color){
	return Object.create(null,{
		"reindeer": {
			enumerable: true,
			value: reindeer,
		},
		"color":{
			enumerable: true,
			value: color,
		}
		}
	)
}
// Get the next color from the array
const getNextColor = function* (){
	const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
	let i = 0
	while(true)
	{
		yield colors[i]
		i++
	}
}
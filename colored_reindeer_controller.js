const coloredReindeerBuilder = function () {
	const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"] //array of reinder

	const nextColor = getNextColor() //gets next color in an array
	const result = []
	// A for loop that looks at each reindeer
	for (let i = 0; i < reindeer.length; i++) {
		// Invoke factory function to create reindeer object
		// Put new reindeer object in coloredReindeer array
		result.push(createColoredReindeer(reindeer[i], nextColor.next().value))
	}

	// Return coloredReindeer array
	return result
}


let bodyEle = document.getElementsByTagName("body")[0]
bodyEle.innerHTML += `
<article id="colored-reindeer">`
let colReinArray = coloredReindeerBuilder()
for (let i = 0; i < colReinArray.length; i++) {
	// Write object to the DOM
	bodyEle.innerHTML += `
	<section style="color: ${colReinArray[i].color}">${colReinArray[i].reindeer}</section>
	`
}


bodyEle.innerHTML += "</article>"
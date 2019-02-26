// todoList function used on button click to get user input 
function noteList() {
	// store user value
	var item    = document.getElementById('noteInput').value
	// create a text node from the user input
	var text    = document.createTextNode(item)
	// create a li tag
	var newItem = document.createElement('li')
	// add the user input to the li tag
	newItem.appendChild(text)
	// append the li to the html todoList id tag
	document.getElementById('noteList').appendChild(newItem)
}
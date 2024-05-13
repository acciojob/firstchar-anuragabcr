function firstChar(text) {
  // your code here
	text = text.trim()
return text.length > 0 ? text[0] : ''
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

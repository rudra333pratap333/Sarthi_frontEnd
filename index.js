function openForm() {
	document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function del(){
	var x = document.getElementById('{{count}}');
	x.remove();
}

var myNodelist = document.getElementsByTagName("LI")
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
	var div = this.parentElement;
	div.style.display = "none";
  }
}
function newElement() {
	var x = document.getElementById("my_form");
	inputValue = " ";
	
	var i;
	var count = 0;
	for(i = 0; i<x.length-2; i++){
		if(x.elements[i].value == ""){
			count+=1;
		}
		inputValue = inputValue + x.elements[i].value + ",	";
	}
	if(count == x.length-2){
		alert("form must be filled");
		return false;
	}
	
	var li = document.createElement("li");
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	console.log(t);
	if (inputValue =='') {
	alert("You must write something!");
	} else {
	document.getElementById("mylist").appendChild(li);
	}

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
	  var div = this.parentElement;
	  div.style.display = "none";
	}
	}
	closeForm();
}


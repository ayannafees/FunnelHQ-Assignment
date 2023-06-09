function allowDrop(event) {
  event.preventDefault();
  // Prevents the default behavior of the element being dragged over (in this case, the div)
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  // Sets the data (in this case, the id of the dragged element) to be transferred during the drag operation
}

function drop(event) {
  event.preventDefault();
  // Prevents the default behavior of the element being dropped (in this case, the div)

  var data = event.dataTransfer.getData("text");
  // Retrieves the transferred data (id of the dragged element)

  event.target.appendChild(document.getElementById(data));
  // Appends the dragged element to the target element (div) where it is dropped
}

function resetDivs() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var img = document.getElementById("drag1");
  var par = document.getElementById("drag2");
  var icon = document.getElementById("drag3");
  // Retrieve the necessary elements by their respective ids

  div1.appendChild(img);
  div1.appendChild(par);
  div1.appendChild(icon);
  // Append the image, paragraph, and icon elements back to div1

  div2.innerHTML = "";
  // Clear the contents of div2
}

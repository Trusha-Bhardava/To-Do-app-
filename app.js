const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");


addButton.addEventListener("click", function(){

    // Get text from input
    let task = inputBox.value;


    // Stop empty tasks
    if(task === ""){
        alert("Please write a task");
        return;
    }


    // Create list item
    let li = document.createElement("li");


    // Create checkbox
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    // Add text
    li.appendChild(checkbox);

    li.appendChild(document.createTextNode(task));

    // Add task to list
    listContainer.appendChild(li);

    checkbox.addEventListener("click", function(){

    li.classList.toggle("checked");

}); 
    // Clear input
    inputBox.value = "";

});


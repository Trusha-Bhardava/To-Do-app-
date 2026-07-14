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

            // changes the input element into a clickable checkbox instead of a normal text input.
            checkbox.type = "checkbox";

            // Add text
            li.appendChild(checkbox);

            li.appendChild(document.createTextNode(task));

            // Add task to list
            listContainer.appendChild(li);

            checkbox.addEventListener("click", function()
            {
                
            // adds the "checked" CSS class to the list item if it doesn't have it, and removes it if it already has it.    
            li.classList.toggle("checked");

        }); 
            // Clear input
            inputBox.value = "";

        }); 
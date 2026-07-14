In this File, understand the problem, break it into smaller actions, decide the data flow, then convert each action into code.

Step 1: Think about the user's action

Ask: What does the user do?
user:
    1.Types a task
    2.Clicks Add button
    3.Task appears in the list
    4.User can mark it complete
    5. show it on screen

 Step 2: Identify the things you need
  developer ask: what element do i need to control?
  input: Where does data come from
  button: What starts the action?
  List container: Where should the result go?

 Step 3: Decide the workflow before coding
   A developer writes a mental algorithm:
     WHEN button is clicked:

    Get input value

    IF input is empty:
        show error

    ELSE:
        create new list item
        put task text inside it
        add it to the list
        clear input

 Step 4: Convert each thought into code 
    Run code when button is clicked -
    addButton.addEventListener("click", function(){
        });   

    Get the user's task -
    let task = inputBox.value;

    What if the user gives nothing? - 
    if(task === ""){
    alert("Please write a task");
    return; 
    }

    I need a new HTML element -
    let li = document.createElement("li");

    I need to put text inside my new element -
    li.appendChild(document.createTextNode(task));

    Show it on the page -
    listContainer.appendChild(li);
             
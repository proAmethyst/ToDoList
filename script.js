var inputBtn = document.getElementById("btn-add");      // import Add Task button
var inputText = document.getElementById("todo-add");    // import input text field
var ul = document.querySelector("ul");                  // import unordered empty list
var queue = document.getElementById("queue");           // import queue text indicator




function inputLength(){                                             // get length of value what was inputed
    return inputText.value.length;
}

function deleteListElement(){                                       // remove the parent of button from it's grand parent
    this.parentNode.parentNode.removeChild(this.parentNode);
    console.log(listLength());
    var removeBtn = document.getElementById("remove-all-btn");

    if(listLength() < 2){                                           // set "remove all btn" to be displayed just for 1 or more task
        removeBtn.style.display = "none";
    }

    if(listLength() === 1){                                         // set task "queue" text to be displayed just when all inputed task are deleted. 
        ul.innerHTML="<li id='queue'>Your task here...</li>";       // attention! first inputed task added will be always index 2.
    }
}

function taskDone(){                                                // toggle task
	this.classList.toggle("done");
}


function listLength(){                                              // get length of all task - how many task was inputed.
    var allList = document.querySelectorAll("li");
    return allList.length;
}


function deleteAllList(){                                           // set delete All button function and set queue status again.
    ul.innerHTML="";
    if(listLength() < 1){
        ul.innerHTML="<li id='queue'>Your task here...</li>";
    }}


function removeAllBtn(){                                            // create delete all button and assign it's functionality 
    console.log(listLength());                                      // first we want to see how many task we have and what index get first task inputed
    var raBtn = document.getElementById("remove-all-btn");      // import remove all button
    if(listLength() < 3){                                         // now we know first task index [2] so we will set the button to show up just after the second task inputed [index 3].
        raBtn.style.display = "none";
    }else{
        raBtn.style.display = "block";
        raBtn.addEventListener("click", deleteAllList);             // set remove button functionality
    }
}



function noTextAdd(){                                                   // alert user he has to type something
    if(inputLength() === 0){
        alert("You must to write something!");
    }}   





function createListElement(){                                   
    var li = document.createElement("li");                          // create unorderd list element
    var rem = document.createElement("button");                     // for every list element create delete button
    var queue = document.getElementById("queue");                   // import queue text indicator

    if(listLength() > 0){
        queue.style.display = "none";                               // before the first element is created set queue text to disappear
    }else {
        queue.style.display = "block";
    }

    li.appendChild(document.createTextNode(inputText.value));       // create list element with it`s own value
    rem.appendChild(document.createTextNode("X"));             // next after create remove button
    ul.appendChild(li);                                             // set list element it belongs to unorderd list
    li.appendChild(rem);                                            // set remove button it belongs to list element
    rem.classList.add("remove-btn");                                // add class for remove button
    rem.type = "button";                                            // set type for remove button
    rem.addEventListener("click", deleteListElement);               // set remove button functionality
    li.addEventListener("click", taskDone);                         // set toggle for task
    inputText.value = "";                                           // set input field at empty
}



function addListAfterClick(){                                       // function that create new list element after click
    if(inputLength() > 0){                                          // length value inputed needs to be > 0
        createListElement();
        removeAllBtn();
    }else{
        noTextAdd();
    }
    
}

function addListAfterKeypress(event){                               // function that create a new list element after keypress [key: enter]
    if(inputLength()> 0 && event.which === 13){                     // length value inputed needs to be > 0 and set key code 13 (enter) to be === 13.
        createListElement();
        removeAllBtn();
    }
}


inputBtn.addEventListener("click", addListAfterClick);              // function execute at button click
inputText.addEventListener("keypress", addListAfterKeypress);       // function execute on the input field with key eneter 

window.localStorage.setItem("ul", "taskDone");
var savedTasks = window.localStorage.getItem("ul");
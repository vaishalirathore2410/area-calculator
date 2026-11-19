
const inputBox = document.getElementById("input-box");//input box type....
const listContainer = document.getElementById("list-container");//list

// by add event listener
// const btnn = document.getElementById("btn");

// btnn.addEventListener("click",()=>{
//     if(inputBox.value === ''){
//        alert("You must write something!"); 
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//     }
//     inputBox.value = "";
// })

//directly thorugh the function
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // cross sign *
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

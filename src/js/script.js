const inputElement = document.querySelector("input");
const toDoSection = document.getElementById("to-do-section");
const toDoList = document.getElementById("to-do-list");

const handleEmptyMessage  = () => {
    if(toDoList.querySelector(".to-do-item")){
        const emptyMessage = document.querySelector(".empty-message");
        emptyMessage.classList.add("hide");
    }

    if(!toDoList.querySelector(".to-do-item")){
        const emptyMessage = document.querySelector(".empty-message");
        emptyMessage.classList.remove("hide");
    }
}

const updateToDos = (element) => {
    toDoList.appendChild(element)
    handleEmptyMessage();
}

const mountToDo = (text) => {
    const toDoElement = document.createElement("div");
    toDoElement.classList.add("to-do-item");

    const paragraphyElement = document.createElement("p");
    paragraphyElement.innerText = text;

    const checkButton = document.createElement("button");
    checkButton.classList.add("check-to-do");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-to-do");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    toDoElement.appendChild(paragraphyElement);
    toDoElement.appendChild(checkButton);
    toDoElement.appendChild(deleteButton);

    updateToDos(toDoElement);
}

const clearInput = () => {
    inputElement.value = "";
}

const toggleStateToDo = (eventElement) => {
    if(eventElement.classList.contains("check-to-do")){
        const parentElement = eventElement.closest(".to-do-item");
        parentElement.classList.toggle("completed")
    }
}

const deleteToDo = (eventElement) => {
    if(eventElement.classList.contains("delete-to-do")){ 
        const parentElement = eventElement.closest(".to-do-item");
        parentElement.remove();
        handleEmptyMessage();
    }
}

window.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = inputElement.value;
    if(text){
        mountToDo(text);
        clearInput();   
    }
})

window.addEventListener("click", (event) => {
    const eventElement = event.target;
    toggleStateToDo(eventElement);
    deleteToDo(eventElement);
})
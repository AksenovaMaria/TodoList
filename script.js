// инициализируем переменные из HTML
const inputData = document.querySelector("#task-input");
const btnAdd = document.querySelector("#add-task");
const list = document.querySelector(".todo-list");


function createTodoItem(text, completed = false){
    const todoItem = document.createElement("div"); //создаем сам элемент
    todoItem.classList.add("todo-item");

    //Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => toggleItemComplection(todoItem, checkbox));

    //текст задачи 
    const textElem = document.createElement("span");
    textElem.textContent = text;


    // кнопка удаления
    const deleteButton = document.createElement ("span");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => deleteItem(todoItem));


    todoItem.append (checkbox); // добавление окошка "выполнено"
    todoItem.append(textElem); // добавление текста задачи
    todoItem.append (deleteButton); // добавление кнопки "удалить"
     
    return todoItem;
}

function deleteItem(item){
    item.remove();
}

   //  переключение состояний
function toggleItemComplection(item, checkbox){
    item.classList.toggle("completed");}

// Добавляет новый элемент в список дел
function addItem(item){
    const newItem = createTodoItem(item);
    list.append(newItem);
}


btnAdd.addEventListener("click", () =>{
    const inputText = inputData.value.trim();
    if(inputText !== ""){
        addItem(inputText);
        inputText.value = "";
    }
    else{
        alert("В строке ввода нет задачи!")
    }
});

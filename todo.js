// make the variable

const addTask = document.getElementById('add-task');

const taskContainer = document.getElementById('task-container');

const inputTask= document.getElementById('input-task');


//add eventlistner for add button

addTask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class=" fa fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class=" fa fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    //make the validation if not inset nothing:

    if(inputTask.value === "") {


        alert('Please typing some one task..')

    } else {

        taskContainer.appendChild(task);
    } 

    inputTask.value = "";


    //for the check boton

    checkButton.addEventListener('click', function(){

        checkButton.parentElement.style.textDecoration = "line-through";

    });

    //for delete boton

    deleteButton.addEventListener('click', function(){


        //let target = e.target;

        deleteButton.parentElement.remove();

        // parentElement two times for transparent the dom. the botton and the list 

    })

})

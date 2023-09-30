const btn=document.getElementById('btn');
const input=document.getElementById('input');
const taskContainer=document.getElementsByClassName('taskContainer');

btn.addEventListener('click',function(e){
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText=`${input.value}`;
    task.appendChild(li);

    let checkButton=document.createElement('button');
    checkButton.innerHTML='<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton=document.createElement('button');
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(input.value==""){
        alert("Please Enter the task");
    }
    else{
        taskContainer[0].appendChild(task);
    }
    input.value="";

    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration="line-through";
    });
    deleteButton.addEventListener('click',function(){
        deleteButton.parentElement.remove();
    });
});
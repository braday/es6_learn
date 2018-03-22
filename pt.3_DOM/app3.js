    // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
    // console.log(listItems);

// HTML COLLECTION NEEDS CONVERT TO ARRAY

// NODE LIST NO NEED TO CONVERT TO ARRAY

// pt.3
// HOW TO ADD, REMOVE, REPLACE ELEMENT. HANDLE CLASS, ATTRIBUTE


// REMOVE ELEMENT
  // const lis = document.querySelectorAll('li');
  // const list = document.querySelector('ul');

// // REMOVE list item
    // lis[0].remove();

    // // REMOVE child element
    // list.removeChild(lis[2]);

// BINDING
    // const heading = document.querySelector('h5');
    // const taskInput = document.getElementById('task');

    // taskInput.value = '';

    // taskInput.addEventListener('keydown', showEvent);
    // function showEvent(e) {
    //   heading.innerText = e.target.value;
    // }


// EVENT DELGATION
    // const delItem = document.querySelector('.delete-item');
    // delItem.addEventListener('click', deleteItem);


    // document.body.addEventListener('click', deleteItem);
    // function deleteItem(e) {
    //   if(e.target.parentElement.classList.contains('delete-item')){
    //     e.target.parentElement.parentElement.remove();
    //   }
    // }

// LOCAL/SESSION USE GET, SET METHOD

// SAVE TASK and store in array
document.querySelector('form').addEventListener('submit', addTask);

function addTask(e) {
  const task = document.getElementById('task').value;
  
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');

  e.preventDefault();  
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
})
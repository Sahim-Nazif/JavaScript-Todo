const add = document.querySelector('.add');
const todo = document.querySelector('.todo');


const templateForNewSprint=sprint=>{
    const list=
     `<li class='list-group-item d-flex justify-content-between align-items-center'>
        <span>${sprint}</span>
         <i class="fas fa-trash delete"></i>
    </li>`  

      todo.innerHTML +=list;
}


add.addEventListener('submit', event => {

    event.preventDefault();
    const sprint = add.addSprint.value;
    //console.log(sprint)
    if (sprint.length) {
      
        templateForNewSprint(sprint)
        add.reset();
    }
  
})

//deleting sprint
todo.addEventListener('click', event=>{

    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
})


const add = document.querySelector('.add');
const todo = document.querySelector('.todo');


add.addEventListener('submit', event => {

    event.preventDefault();
    const sprint = add.addSprint.value;
    //console.log(sprint)
    todo.innerHTML += ` <li class='list-group-item d-flex justify-content-between align-items-center'>
                        <span>${sprint}</span>
                        <i class="fas fa-trash delete"></i>
                        </li>`
})

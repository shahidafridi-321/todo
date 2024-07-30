
function updateTodoItem() {
  let updateBtn = document.querySelectorAll('.update-btn');
  updateBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let title = document.querySelector('form #title');
      let gettitle = document.querySelector('div .title');

      let description = document.querySelector('form #description');
      let getDescription = document.querySelector('div .description');

      let dueDate = document.querySelector('form #duedate');
      let getDuedate = document.querySelector('form .duedate');

      title.value = gettitle.textContent;
      description.value = getDescription.textContent;
      dueDate.value = getDuedate.textContent;
    });
  });
}

updateTodoItem();

let submitBtns = document.querySelectorAll('#submit-btn');
submitBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.querySelector('form #title'); // selects input title of form element
    let settitle = document.querySelector('div .title');

    let description = document.querySelector('form #description'); // selects input decsption of form element
    let setdescription = document.querySelector('div .description');

    let dueDate = document.querySelector('form #duedate');
    let setDuedate = document.querySelector('form .duedate');


    if (title.value && description.value) {
      settitle.textContent = title.value;
      setdescription.textContent = description.value;
      setDuedate.textContent = dueDate.value;
      title.value = '';
      description.value = '';
      dueDate.value = '';
    }
  });
});


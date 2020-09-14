const noteTitle = document.querySelector('#note-title');
const noteContent = document.querySelector('#note-content');
const noteContainer = document.querySelector('.container_sec');
const addIcon = document.querySelector('.plus');
const removeBtn = document.querySelector('.remove');

const checkIfEmpty = () => {
    if (noteTitle.value == '' || noteContent.value == '') {
        alert('Title and content has to be given');
        return false;
    }
    return true;
};

const clearInputs = () => {
    noteTitle.value = '';
    noteContent.value = '';
}

const createNote = () => {
    const mainNote = document.createElement('div');
    mainNote.classList.add('note');
    const title = document.createElement('h2');
    const content = document.createElement('p');
    title.classList.add('noteH2');
    content.classList.add('noteP');
    title.textContent = noteTitle.value.toUpperCase();
    content.textContent = noteContent.value;
    mainNote.appendChild(title);
    mainNote.appendChild(content);
    noteContainer.appendChild(mainNote);
};

const removeAllNotes = () => {
    const notes = document.querySelectorAll('.note');
    notes.forEach(element => element.remove());
};

addIcon.addEventListener('click', () => {
    if (checkIfEmpty()) createNote();
    clearInputs();
});

removeBtn.addEventListener('click', () => {
    let result = confirm('Are you suer you want to delete ALL your notes?')
    if (result) removeAllNotes();
    else return;
});
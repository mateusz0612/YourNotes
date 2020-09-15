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

const createNote = (title, content) => {
    //creating elements
    const mainNote = document.createElement('div');
    const h2Element = document.createElement('h2');
    const pElement = document.createElement('p');
    const closeMark = document.createElement('div');
    //adding classes
    mainNote.classList.add('note');
    h2Element.classList.add('noteH2');
    pElement.classList.add('noteP');
    closeMark.classList.add('note-close-mark');
    //eventlistener that handles removing note
    closeMark.addEventListener('click', () => {
        mainNote.remove();
    })
    //adding content
    h2Element.textContent = title.toUpperCase();
    pElement.textContent = content;
    mainNote.appendChild(closeMark);
    mainNote.appendChild(h2Element);
    mainNote.appendChild(pElement);
    noteContainer.appendChild(mainNote);
    //adding value
    const valueObject = {
        "title": title,
        "content": content
    }
    mainNote.value = valueObject;
};

const removeAllNotes = () => {
    const notes = document.querySelectorAll('.note');
    notes.forEach(element => element.remove());
};

const addToStorage = () => {
    const notes = document.querySelectorAll('.note');
    const counter = notes.length;
    localStorage.setItem("items", JSON.stringify(notes));
    localStorage.setItem("counter", counter);
};

const displayStorageItems = () => {
    const notes = JSON.parse(localStorage.getItem("items"));
    const counter = localStorage.getItem("counter");
    for (let i = 0; i < counter; i++) {
        const title = notes[i]['value']['title'];
        const content = notes[i]['value']['content'];
        createNote(title, content);
    }
};

//event listeners
addIcon.addEventListener('click', () => {
    if (checkIfEmpty()) {
        const title = noteTitle.value;
        const content = noteContent.value;
        createNote(title, content);
    }
    clearInputs();
});

removeBtn.addEventListener('click', () => {
    let result = confirm('Are you sure you want to delete ALL your notes?')
    if (result) removeAllNotes();
    else return;
});


window.addEventListener('beforeunload', addToStorage);
window.addEventListener('onload', displayStorageItems());
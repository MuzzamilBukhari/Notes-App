let notesContainer = document.querySelector(".notes-container");
const createNote = () => {
    let note = document.createElement("div");
    note.setAttribute("class", "note");
    note.innerHTML = "<p contentEditable='true'></p><img src='images/delete.png'>";
    notesContainer.appendChild(note);
    saveData();
}


notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "P"){
        let notes = document.querySelectorAll("p");
        notes.forEach((note) => {
            note.onkeyup = () => {
                saveData();
            }
        })

    } 
})

const saveData = () => {
    localStorage.setItem("data", notesContainer.innerHTML);
}

const displayData = () => {
    notesContainer.innerHTML = localStorage.getItem("data");
}

displayData();
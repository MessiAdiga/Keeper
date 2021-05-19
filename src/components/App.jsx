import React, {useState} from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js"
import CreateArea from "./CreateArea.jsx"



function App() {

    const [notes, setNotes] = useState([]);

    //Pass the newNote from CreateArea
    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            });    
        });
    }

    return <div>

        <Header />

        <CreateArea 
            onAdd={addNote}
        />
       { notes.map((noteItem, index) => {
            return <Note 
                key = {index}
                id = {index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />
        })}

        {/* {notes.map(note =>  <Note
            key = {note.key}
            title = {note.title}
            content = {note.content} />
        )} */}
        <Footer />
    </div>
}

export default App;
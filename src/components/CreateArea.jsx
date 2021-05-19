import React, {useState} from "react";

function CreateArea(props) {

    //Create a constant that keeps tract of name and title
    const [note, setNote] = useState({
        title : "",
        content : ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        //add the new note to existing notes
        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        });
    }

    function submitNote(event){
        props.onAdd(note);

        //empty the title and text areaz once a note is submitted
        setNote({
            title : "",
            content : ""
        });
        event.preventDefault();
    }



    return <div>
        <form>
            <input name="title" 
            onChange={handleChange} 
            placeholder="Title" 
            value={note.title}
            />
            <textarea name="content" 
            onChange={handleChange} 
            value={note.content}
            placeholder="Take notes..." 
            rows="4"></textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
}

export default CreateArea;
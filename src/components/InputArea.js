import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const InputArea = (props) => {
    const [note, setNote] = useState({ title: "", content: "" })

    function handleChange(event) {
        const { value, name } = event.target
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div className="flex flex-col justify-center items-left m-2 p-2 h-1/3 w-1/3 border-2 rounded-sm">
            <input
                className="text-lg m-2 rounded-sm opacity-70"
                type="text"
                name="title"
                placeholder="Title.."
                onChange={handleChange}
                value={note.title} />
            <input
                className="text-lg m-2 rounded-sm opacity-70"
                type="text"
                name="content"
                placeholder="Write down a note..."
                onChange={handleChange}
                value={note.content} />
            <AddIcon
                className="ml-screen"
                type="submit"
                onClick={() => {
                    props.addNote(note)
                    setNote({ title: "", content: "" })
                }}>Add Note</AddIcon>
        </div>
    )
}

export default InputArea

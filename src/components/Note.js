import React from 'react'

const Note = (props) => {
    return (
        <div className="flex flex-col bg-gray-300 rounded-sm m-4 w-1/6">
            <h1 className="text-2xl text-blue-400 p-2">{props.title}</h1>
            <p className="text-lg text-medium-purple p-2">{props.content}</p>
            <button className="text-lg text-white hover:bg-gray-400 p-2" onClick={() => { props.deleteNote(props.id) }}>Delete</button>
        </div>
    )
}

export default Note

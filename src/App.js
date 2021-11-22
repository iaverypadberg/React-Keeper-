import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import InputArea from "./components/InputArea";

function App() {
  const [notes, setNotes] = useState([])

  function handleClick(item) {
    setNotes((prev => {
      return [...prev, item]
    }))
  }

  function delNote(id) {
    setNotes(prev => {
      return prev.filter((item, index) => {
        return id !== index
      })
    })
  }

  return (
    <div className="">
      <Header />
      <div className="flex flex-row justify-center h-1/2 w-screen">
        <InputArea
          addNote={handleClick}
        />
      </div>

      <div className="flex flex-row justify-around wrap">

        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={delNote}
          />))
        }

      </div>
      <Footer />
    </div>
  );
}

export default App;

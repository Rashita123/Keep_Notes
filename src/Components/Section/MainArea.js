import { TagsDiv } from "./TagsDiv";
import { Note } from "./Note";
import "./section.css";
import { useState } from "react";

const initialNotesDatabase = [
  {
    title: "First Heading",
    note: "Lorem Ipsum somthing somthing",
    color: "#86bbd8"
  }
];

const initialTagsDatabase = [
  {
    tag: "Work",
    bgcolor: "#86bbd8",
    clas: "work"
  },
  {
    tag: "Inpiration",
    bgcolor: "#EFD0CA",
    clas: "inspiration"
  },
  {
    tag: "To-Do",
    bgcolor: "#D7F9F1",
    clas: "todo"
  }
];

export const MainArea = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [customBgColor, setCustomBgColor] = useState("#f2f2f2");
  const [notesDatabase, setNotesDatabase] = useState(initialNotesDatabase);
  const [tagsDatabase, setTagsDatabase] = useState(initialTagsDatabase);
  const setNoteBgHandler = (color) => {
    setCustomBgColor(color);
  };
  const addNoteHandler = () => {
    if (newTitle === "" && newNote === "") return;
    setNotesDatabase([
      ...notesDatabase,
      { title: newTitle, note: newNote, color: customBgColor }
    ]);
    setCustomBgColor("#f2f2f2");
    setNewTitle("");
    setNewNote("");
  };
  const ResetButtonHandler = () => {
    setNewTitle("");
    setNewNote("");
    setCustomBgColor("#f2f2f2");
  };
  return (
    <div class="main-area">
      <div class="add-note-section">
        <div
          class="add-note-input-section"
          style={{ background: [customBgColor] }}
        >
          <input
            style={{ background: [customBgColor] }}
            onChange={(event) => setNewTitle(event.target.value)}
            placeholder="Title"
            type="text"
            value={newTitle}
            class=" input title-input"
          />
          <textarea
            style={{ background: [customBgColor] }}
            onChange={(event) => setNewNote(event.target.value)}
            placeholder="Take a note"
            type="text"
            value={newNote}
            class=" placeholder note-text-input"
          ></textarea>
        </div>
        <div class="note-properties">
          <div class="add-note-properties-section">
            {/* 4 circles on the input area */}
            <div
              onClick={() => setNoteBgHandler("#86bbd8")}
              class="color-circle circle-one"
            ></div>
            <div
              onClick={() => setNoteBgHandler("#efd0ca")}
              class="color-circle circle-two"
            ></div>
            <div
              onClick={() => setNoteBgHandler("#d7f9f1")}
              class="color-circle circle-three"
            ></div>
            <div
              onClick={() => setNoteBgHandler("#fb8f67")}
              class="color-circle circle-four"
            ></div>
          </div>
          <div class="properties-pin-add">
            <img
              alt="pin-icon"
              class="pin-icon"
              src="https://img.icons8.com/ios/24/000000/pin3.png"
            />
            <img
              onClick={ResetButtonHandler}
              alt="delete-icon"
              class="pin-icon"
              src="https://img.icons8.com/ios/24/000000/delete-trash.png"
            />
            <button onClick={addNoteHandler} class="add-button">
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="tags-div">
        <TagsDiv tag={"Random Tag"} bgcolor={"#E56B70"} clas={"randomTag"} />
        {tagsDatabase.map(({ tag, bgcolor, clas }) => (
          <TagsDiv tag={tag} bgcolor={bgcolor} clas={clas} />
        ))}
      </div>
      <div class="display-notes">
        {notesDatabase.map(({ title, note, color }) => {
          if (color === "#f2f2f2") color = "#86bbd8";
          return <Note title={title} note={note} color={color} />;
        })}
      </div>
    </div>
  );
};

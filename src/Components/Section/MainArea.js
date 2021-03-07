import { TagsDiv } from "./TagsDiv";
import { Note } from "./Note";
// import { TagsDatabase } from "./TagsDatabase";
import "./section.css";
import { useChangeTagsDatabase } from "./TagsDatabase";
import { useState } from "react";

export const MainArea = () => {
  const setDatabase = useChangeTagsDatabase;
  const [database, setdatabase] = useState([]);
  const addNewData = () => {
    const newDatabase = useChangeTagsDatabase("yes", "OK");
    setDatabase(newdatabase);
  };
  return (
    <div class="main-area">
      <div class="add-note-section">
        <div class="add-note-input-section">
          <input placeholder="Title" type="text" class=" input title-input" />
          <textarea
            placeholder="Take a note"
            type="text"
            class=" placeholder note-text-input"
          ></textarea>
        </div>
        <div class="note-properties">
          <div class="add-note-properties-section">
            <div class="color-circle circle-one"></div>
            <div class="color-circle circle-two"></div>
            <div class="color-circle circle-three"></div>
            <div class="color-circle circle-four"></div>
          </div>
          <div class="properties-pin-add">
            <img
              alt=""
              class="pin-icon"
              src="https://img.icons8.com/ios/24/000000/pin3.png"
            />
            <img
              alt=""
              class="pin-icon"
              src="https://img.icons8.com/ios/24/000000/delete-trash.png"
            />
            <button onClick={addNewData} class="add-button">
              Add
            </button>
          </div>
        </div>
      </div>
      <TagsDiv />
      <div class="display-notes">
        {database.map(({ title, note }) => {
          return <Note />;
        })}
      </div>
    </div>
  );
};

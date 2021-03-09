import { TagsDiv } from "./TagsDiv";
import { Note } from "./Note";
import "./section.css";
import { useState } from "react";
import { Toast } from "./Toast";
const initialNotesDatabase = [
  {
    title: "First Heading",
    note: "Lorem Ipsum somthing somthing",
    color: "#86bbd8",
    tag: "Random"
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
    tag: "ToDo",
    bgcolor: "#D7F9F1",
    clas: "todo"
  },
  {
    tag: "Personal",
    bgcolor: "#fb8f67",
    clas: "personal"
  }
];

const colorsAvailable = [
  {
    color: "#98DFAF",
    clas: "random-one"
  },
  {
    color: "#BEB7DF",
    clas: "random-two"
  },
  {
    color: "#BCAB79",
    clas: "random-three"
  },
  {
    color: "#DDE2C6",
    clas: "random-four"
  },
  {
    color: "#F1D6B8",
    clas: "random-five"
  }
];
export const MainArea = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [customBgColor, setCustomBgColor] = useState("#f2f2f2");
  const [notesDatabase, setNotesDatabase] = useState(initialNotesDatabase);
  const [tagsDatabase, setTagsDatabase] = useState(initialTagsDatabase);
  const [currentTag, setCurrentTag] = useState("");
  const [newTag, setNewTag] = useState("");
  const [randomColorIndex, setRandomColorIndex] = useState(0);
  const [displayToast, setDisplayToast] = useState("none");
  const [toastText, setToastText] = useState("");
  const setNoteBgHandler = (color) => {
    setCustomBgColor(color);
  };
  const addNoteHandler = () => {
    if (newTitle === "" && newNote === "") {
      setToastText("Write something to ADD");
      setDisplayToast("block");
      return;
    }
    setNotesDatabase([
      ...notesDatabase,
      {
        title: newTitle,
        note: newNote,
        color: customBgColor,
        tag: currentTag === "" ? "Random" : currentTag
      }
    ]);
    setCustomBgColor("#f2f2f2");
    setNewTitle("");
    setNewNote("");
    setCurrentTag("");
  };
  const ResetButtonHandler = () => {
    setNewTitle("");
    setNewNote("");
    setCustomBgColor("#f2f2f2");
    setCurrentTag("");
  };
  const TagClickHandler = (bgcolor, tag) => {
    setCustomBgColor(bgcolor);
    setCurrentTag(tag);
  };
  const enterNewTagHandler = (e) => {
    setNewTag(e.target.value);
  };
  const checkIfEnterTag = (e) => {
    let isTagPresent = false;
    if (newTag === "") return;
    tagsDatabase.map(({ tag, ...rest }) => {
      if (newTag.toLowerCase() === tag.toLowerCase()) isTagPresent = true;
    });

    const newobj = {
      tag: newTag,
      bgcolor: colorsAvailable[randomColorIndex].color,
      clas: colorsAvailable[randomColorIndex].clas
    };
    if (e.keyCode === 13) {
      if (isTagPresent === true) {
        setNewTag("");
        setDisplayToast(true);
        setToastText("Tag Already present");
        return;
      }
      setTagsDatabase([newobj, ...tagsDatabase]);
      setNewTag("");
      if (randomColorIndex === 4) setRandomColorIndex(0);
      else setRandomColorIndex(randomColorIndex + 1);
    }
  };
  const hideButtonHandler = () => {
    setDisplayToast("none");
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
          {currentTag !== "" && <span>Tag : {currentTag}</span>}
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
        {/* Random Tag Enter input */}
        <div
          class="tag"
          style={{
            borderBottom: "3px solid",
            borderColor: colorsAvailable[randomColorIndex].color,
            minHeight: "50px"
          }}
        >
          <img
            class={colorsAvailable[randomColorIndex].clas}
            style={{ marginRight: "0.5rem" }}
            alt=""
            src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png"
          />
          <input
            onChange={enterNewTagHandler}
            class="new-tag-input"
            placeholder="Enter Tag"
            onKeyUp={checkIfEnterTag}
            value={newTag}
            maxLength="10"
          ></input>
        </div>

        {/* Input Tag done */}
        {tagsDatabase.map(({ tag, bgcolor, clas }) => (
          <span
            onClick={() => {
              TagClickHandler(bgcolor, tag);
            }}
          >
            <TagsDiv tag={tag} bgcolor={bgcolor} clas={clas} />
          </span>
        ))}

        {/* Random Tag */}
        <span
          onClick={() => {
            TagClickHandler("#E56B70", "Random");
          }}
        >
          <TagsDiv tag={"Random"} bgcolor={"#E56B70"} clas={"randomTag"} />
        </span>

        {/* Random Tag end */}
      </div>
      <div class="display-notes">
        {notesDatabase.map(({ title, note, color, tag }) => {
          if (color === "#f2f2f2") color = "#86bbd8";
          return <Note title={title} note={note} color={color} tag={tag} />;
        })}
      </div>

      <span style={{ display: displayToast }} onClick={hideButtonHandler}>
        <Toast text={toastText} />
      </span>
    </div>
  );
};

import "./section.css";
import { Tag } from "./Tag";
export const Note = ({
  title,
  note,
  color,
  tag,
  pinned,
  database,
  setDatabase
}) => {
  const getStyle = (pinned, color) => {
    if (pinned) {
      return {
        background: color,
        color: "black",
        borderColor: "white",
        position: "relative"
      };
    } else {
      return {
        borderColor: color,
        position: "relative"
      };
    }
  };
  const notePinnedHandler = (title) => {
    let newDatabase = [];
    database.map((obj) => {
      if (obj.title !== title) {
        newDatabase.push(obj);
      } else {
        newDatabase.push({ title, note, color, tag, pinned: !obj.pinned });
      }
    });
    setDatabase(newDatabase);
  };
  return (
    <div class="note" style={getStyle(pinned, color)}>
      <h1 style={{ color: "black", marginTop: "1rem" }}>{title}</h1>
      <p>{note}</p>
      {tag !== "" && <Tag text={tag} />}
      <div class="note-properties">
        <div class="palette">
          <img
            alt=""
            src="https://img.icons8.com/windows/24/000000/paint-palette.png"
          />
        </div>
        <div class="add-note-properties-section colors-in-note">
          <div class="color-circle circle-one"></div>
          <div class="color-circle circle-two"></div>
          <div class="color-circle circle-three"></div>
          <div class="color-circle circle-four"></div>
        </div>
        <div class="properties-pin-add">
          {pinned ? (
            <img
              onClick={() => notePinnedHandler(title)}
              src="https://img.icons8.com/ios-filled/24/000000/pin3.png"
              alt="pin-icon"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer"
              }}
            />
          ) : (
            <img
              onClick={() => notePinnedHandler(title)}
              src="https://img.icons8.com/ios/24/000000/pin3.png"
              alt="pin-icon"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer"
              }}
            />
          )}

          <img
            alt="delete icon"
            class="pin-icon"
            src="https://img.icons8.com/ios/24/000000/delete-trash.png"
          />
          <button class="add-button">Edit</button>
        </div>
      </div>
    </div>
  );
};

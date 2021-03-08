import "./section.css";

export const Note = (props) => {
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.note}</p>
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
          <button class="add-button">Edit</button>
        </div>
      </div>
    </div>
  );
};

import "./section.css";
export const Note = (props) => {
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
        borderColor: [props.color],
        position: "relative"
      };
    }
  };
  return (
    <div class="note" style={getStyle(props.pinned, props.color)}>
      <h1 style={{ color: "black", marginTop: "1rem" }}>{props.title}</h1>
      <p>{props.note}</p>
      {props.tag !== "" && (
        <p
          style={{
            background: props.color,
            padding: "1rem",
            borderRadius: "5px",
            color: "black"
          }}
        >
          Tag : {props.tag}
        </p>
      )}
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
          {props.pinned ? (
            <img
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

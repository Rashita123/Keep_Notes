import "./section.css";

export const TagsDiv = ({ tag, bgcolor, clas }) => {
  return (
    <div
      class="tag"
      style={{ borderBottom: "3px solid", borderColor: [bgcolor] }}
    >
      <img
        class={clas}
        style={{ marginRight: "0.5rem" }}
        alt=""
        src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png"
      />
      <p style={{ wordWrap: "break-word", textOverflow: "ellipses" }}>{tag}</p>
    </div>
  );
};

import "./section.css";

export const TagsDiv = ({ tag, bgcolor, clas }) => {
  return (
    <div
      class="tag"
      style={{ borderBottom: "3px solid", borderColor: [bgcolor] }}
    >
      <img
        class={clas}
        alt=""
        src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png"
      />
      <p>{tag}</p>
    </div>
  );
};

import { Tag } from "./Tag";
import "./section.css";
export const Trash = ({ title, note, color, tag }) => {
  return (
    <div class="note" style={{ borderColor: [color] }}>
      <h1 style={{ color: "black", marginTop: "1rem" }}>{title}</h1>
      <p>{note}</p>
      <Tag text={tag} />
    </div>
  );
};

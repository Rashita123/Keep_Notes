import { SideNav } from "./SideNav";
import { MainArea } from "./MainArea";
import "./section.css";
import { useState } from "react";
export const Section = () => {
  const [notesOrTrash, setNotesOrTrash] = useState("notes");
  return (
    <div class="section">
      <SideNav notesOrTrash={notesOrTrash} setNotesOrTrash={setNotesOrTrash} />
      <MainArea notesOrTrash={notesOrTrash} />
    </div>
  );
};

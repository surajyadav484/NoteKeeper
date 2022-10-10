import { useState } from "react";
import { EditModal } from "./EditModal";
import { editNotes } from "../notesSlice";
import { useDispatch } from "react-redux";
export const DisplayNotes = ({ _id, title, tagLine, body, pinned }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isPinned, setIsPinned] = useState(pinned);
  const dispatch = useDispatch();

  const pinNote = () => {
    console.log({ _id, title, tagLine, body, pinned: !pinned });
    dispatch(editNotes({ _id, title, tagLine, body, pinned: !pinned }));
  };

  return (
    <>
      <div className="displayNote">
        <div className="display-card" onClick={() => setIsOpen(true)}>
          <h4>{title}</h4>
          <h5>{tagLine}</h5>
          <p>{body}</p>
        </div>

        <i className="fa fa-thumb-tack" onClick={pinNote}></i>
      </div>
      <EditModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        tagLine={tagLine}
        body={body}
        _id={_id}
        pinned={pinned}
      >
        Hello
      </EditModal>
    </>
  );
};

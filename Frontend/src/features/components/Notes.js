import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../notesSlice";
import { DisplayNotes } from "./DisplayNotes";
import { Pagination } from "./Pagination";

export const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  // const [page, setPage] = useState(1);
  // const [limit] = useState(6);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  // const handleLeftClick = () => {
  //   setPage(page - 1);
  // };
  // const handleRightClick = () => {
  //   setPage(page + 1);
  // };

  // const startIndex = (page - 1) * limit;
  // const lastIndex = page * limit;

  const pinnedNotes = notes?.filter((note) => note.pinned === true);
  const otherNotes = notes?.filter((note) => note.pinned === false);

  const displayPinnedNotes = pinnedNotes?.map((note) => (
    <DisplayNotes {...note} key={note._id} />
  ));
  const displayOtherNotes = otherNotes?.map((note) => (
    <DisplayNotes {...note} key={note._id} />
  ));

  if (pinnedNotes.length > 0 && otherNotes.length > 0) {
    return (
      <>
        <div>Pinned Notes</div>
        <div className="allNotes">{displayPinnedNotes}</div>
        <div>Other Notes</div>
        <div className="allNotes">{displayOtherNotes}</div>
        {/* <Pagination /> */}
      </>
    );
  } else if (pinnedNotes.length > 0) {
    return (
      <>
        <div>Pinned Notes</div>
        <div className="allNotes"> {displayPinnedNotes}</div>;
      </>
    );
  } else {
    return <div className="allNotes">{displayOtherNotes}</div>;
  }
};

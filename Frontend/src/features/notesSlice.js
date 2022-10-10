import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_NOTES = "http://localhost:5000/";
const POST_NOTES = "http://localhost:5000/addNote";
const EDIT_NOTES = "http://localhost:5000/editNote";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await axios.get(GET_NOTES);
  //console.log(response.data.movieList);
  return response.data.notes;
});

export const addNewNote = createAsyncThunk(
  "notes/addNotes",
  async (initialState) => {
    const response = await axios.post(POST_NOTES, initialState);
    return response.data;
  }
);

export const editNotes = createAsyncThunk(
  "notes/editNotes",
  async (initialState) => {
    const response = await axios.put(EDIT_NOTES, initialState);
    return response.data;
  }
);

export const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        //console.log(action.payload);
        state.notes = action.payload;
      })

      .addCase(addNewNote.fulfilled, (state, action) => {
        //console.log(action.payload);
        state.notes.unshift(action.payload);
      })
      .addCase(editNotes.fulfilled, (state, action) => {
        state.notes = state.notes.map((note) => {
          if (note._id === action.payload._id) note = action.payload;
          return note;
        });
      });
  },
});

// export const selectAllAnimes = (state) => state.mvies.movies;
// export const { setShowInputFalse, setShowInputTrue } = notesSlice.actions;
export default notesSlice.reducer;
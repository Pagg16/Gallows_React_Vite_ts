import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  guessWord: string;
  enteredLetters: string[];
};

const initialState: InitialState = {
  guessWord: "",
  enteredLetters: [],
};

const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    addGuessWord(state, action: PayloadAction<string>) {
      state.guessWord = action.payload;
    },
    addEnteredLetters(state, action: PayloadAction<string>) {
      state.enteredLetters.push(action.payload);
    },
  },
});

export const { addGuessWord, addEnteredLetters } = appSlice.actions;
export default appSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  guessWord: string;
  enteredLetters: string[];
  guessedСharacters: number;
  guessedWords: number;
};

const initialState: InitialState = {
  guessWord: "",
  enteredLetters: [],
  guessedСharacters: 0,
  guessedWords: 0,
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
    resetEnteredLetters(state) {
      state.enteredLetters = [];
    },
    addGuessedWords(state) {
      state.guessedWords += 1;
    },

    addGuessedСharacters(state) {
      state.guessedСharacters += 1;
    },
  },
});

export const {
  addGuessWord,
  addEnteredLetters,
  resetEnteredLetters,
  addGuessedWords,
  addGuessedСharacters,
} = appSlice.actions;
export default appSlice.reducer;

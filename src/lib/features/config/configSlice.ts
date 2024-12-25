import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  title: string;
  description: string;
  theme: "light" | "dark";
}

const initialState: ConfigState = {
  title: "Default Title",
  description: "Default Description",
  theme: "light",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const { setTitle, setDescription, setTheme } = configSlice.actions;

export default configSlice.reducer;

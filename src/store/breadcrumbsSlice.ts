// store/breadcrumbsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[];
}

const initialState: BreadcrumbsState = {
  breadcrumbs: [],
};

const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadcrumbs: (state, action: PayloadAction<Breadcrumb[]>) => {
      state.breadcrumbs = action.payload;
    },
  },
});

export const { setBreadcrumbs } = breadcrumbsSlice.actions;
export default breadcrumbsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageIndex: 0,
  isFront: true,
  headerData: {
    title: `Feel free to inject any fun copies here.`,
    image: {
      url: "/custom/blank.png",
      alt: "card_image_alt",
      width: 250,
      height: 250
    }
  },
  isGlassmorphismBackgroundIsCroppedVerticaly: false,
  isSideContentShowed: false
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsFront: (state, action) => {
      state.isFront = action.payload;
    },
    setHeaderData: (state, action) => {
      state.headerData = action.payload;
    },
    setGlassmorphismBackgroundIsCroppedVerticaly: (state, action) => {
      if (state.isGlassmorphismBackgroundIsCroppedVerticaly !== action.payload)
        state.isGlassmorphismBackgroundIsCroppedVerticaly = action.payload;
    },
    setPageIndex: (state, action) => {
      state.isFront = action.payload === 0;
      state.pageIndex = action.payload;
    },
    setSideContentShowed: (state, action) => {
      state.isSideContentShowed = action.payload;
    }
  }
});

export const {
  setIsFront,
  setHeaderData,
  setGlassmorphismBackgroundIsCroppedVerticaly,
  setPageIndex,
  setSideContentShowed
} = layoutSlice.actions;

export default layoutSlice.reducer;

import { useEffect } from "react";
import useGlassmorphismCropSide from "./useGlassmorphismCropSide";
import { useDispatch } from "react-redux";
import {
  setPageIndex,
  setSideContentShowed
} from "@redux/features/layoutSlice";

const usePageData = (pageId, sideContentShowed, glassmorphismSide) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setPageIndex(pageId)), []);
  useEffect(() => dispatch(setSideContentShowed(sideContentShowed)), []);
  useGlassmorphismCropSide(glassmorphismSide);
};

export default usePageData;

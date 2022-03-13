import { useEffect } from "react";
import useGlassmorphismCropSide from "./useGlassmorphismCropSide";
import useHeader from "./useHeader";
import { useDispatch } from "react-redux";
import {
  setPageIndex,
  setSideContentShowed
} from "@redux/features/layoutSlice";

const usePageData = (
  pageId,
  { icon_path, text },
  sideContentShowed,
  glassmorphismSide
) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setPageIndex(pageId)), []);
  useEffect(() => dispatch(setSideContentShowed(sideContentShowed)), []);
  useHeader(icon_path, text);
  useGlassmorphismCropSide(glassmorphismSide);
};

export default usePageData;

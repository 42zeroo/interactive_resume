import { useDispatch, useSelector } from "react-redux";
import { setGlassmorphismBackgroundIsCroppedVerticaly } from "@redux/features/layoutSlice";
import { useEffect } from "react";

const useGlassmorphismCropSide = (side) => {
  const dispatch = useDispatch();
  useEffect(
    () =>
      dispatch(
        setGlassmorphismBackgroundIsCroppedVerticaly(
          side !== "horizontal" ? true : false
        )
      ),
    []
  );
};

export default useGlassmorphismCropSide;

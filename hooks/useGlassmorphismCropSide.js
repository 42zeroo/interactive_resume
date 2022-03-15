import { useDispatch, useSelector } from "react-redux";
import { setGlassmorphismBackgroundIsCroppedVerticaly } from "@redux/features/layoutSlice";
import { useEffect } from "react";

const useGlassmorphismCropSide = (side) => {
  const dispatch = useDispatch();
  useEffect(
    () =>
      setTimeout(
        () =>
          dispatch(
            setGlassmorphismBackgroundIsCroppedVerticaly(
              side !== "horizontal" ? true : false
            )
          ),
        500
      ),
    []
  );
};

export default useGlassmorphismCropSide;

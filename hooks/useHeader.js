import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHeaderData } from "@redux/features/layoutSlice";
const useHeader = (icon_path, text) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setHeaderData(icon_path, text)), []);
};

export default useHeader;

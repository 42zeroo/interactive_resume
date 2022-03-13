import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHeaderData } from "@redux/features/layoutSlice";
const useHeader = (headerData) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setHeaderData(headerData)), []);
};

export default useHeader;

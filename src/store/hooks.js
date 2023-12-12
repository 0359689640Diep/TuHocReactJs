import { useContext, useRef  } from "react";
import Context from "./Context";


export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    const ref = useRef();

    return [state, dispatch, ref];
}

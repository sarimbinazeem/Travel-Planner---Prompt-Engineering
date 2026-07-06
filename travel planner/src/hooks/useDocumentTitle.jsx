import { useEffect } from "react";
import { APP_NAME } from "../constants/app";

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = `${APP_NAME} | ${title}`;
    }, [title]);
}

export default useDocumentTitle;
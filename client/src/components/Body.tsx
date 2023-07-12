import { ReactNode, useEffect  } from "react";

export default function Body({ children }:  { children: ReactNode }) {
    useEffect(() => {
        document.body.style.background = "#212121";
        return () => {
        document.body.style.background = "";
        };
    }, []);

  return <div>{children}</div>;
}

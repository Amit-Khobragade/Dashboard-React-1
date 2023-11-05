import { ReactNode } from "react";

interface Props {
  children?: ReactNode[] | ReactNode;
}

function MainContent({ children }: Props): ReactNode {
  return <>{children}</>;
}

export default MainContent;

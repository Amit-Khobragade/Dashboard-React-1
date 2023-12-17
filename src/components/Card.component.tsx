import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode[] | ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => <div className={"flex-grow bg-accent-2 rounded-lg " + className}>{children}</div>;

export default Card;

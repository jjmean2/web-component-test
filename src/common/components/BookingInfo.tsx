import { ReactElement, ReactNode } from "react";

interface Props {
  className?: string;
  title?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function BookingInfo(props: Props): ReactElement {
  const { className, title, onClick, children } = props;
  return (
    <div className={className}>
      <h1>{title}</h1>
      <button onClick={onClick}>안녕하세요</button>
      {children}
    </div>
  );
}

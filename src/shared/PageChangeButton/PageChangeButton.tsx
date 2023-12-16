import cn from "classnames";
import "./PageChangeButton.scss";

interface Props {
  direction: "prev" | "next";
  selected: number;
}

export const PageChangeButton: React.FC<Props> = ({ direction, selected }) => {
  return (
    <button type="button" className={cn("pageChangeButton",
      {
        "left-disabled": direction === "prev" && selected === 1,
        "right-disabled": direction === "next" && selected === 5,
        "left": direction === "prev",
        "right": direction === "next",
      }
    )}></button>
  );
};

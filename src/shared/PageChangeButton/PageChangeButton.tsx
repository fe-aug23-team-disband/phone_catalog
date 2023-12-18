import cn from "classnames";
import "./PageChangeButton.scss";

interface Props {
  direction: "prev" | "next";
  selected: number;
  onPageChange: React.Dispatch<React.SetStateAction<string>>;
  maxPage?: string;
}

export const PageChangeButton: React.FC<Props> = ({ direction, selected, onPageChange, maxPage }) => {
  return (
    <button
      type="button"
      className={cn(
        "pageChangeButton",
        {
          "left-disabled": direction === "prev" && selected === 0,
          "right-disabled": direction === "next" && selected === +(maxPage || 0) - 1,
          "left": direction === "prev",
          "right": direction === "next",
        }
      )}
      disabled={selected === +(maxPage || 1)}
      onClick={() => onPageChange((prevPage: string) => (direction === "prev" ? (+prevPage - 1) : (+prevPage + 1)).toString())}
    />
  );
};

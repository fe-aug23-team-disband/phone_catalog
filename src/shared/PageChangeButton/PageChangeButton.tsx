import cn from "classnames";
import "./PageChangeButton.scss";
import { scrollToTop } from "../ScrollToTop/ScrollToTop";

interface Props {
  direction: "prev" | "next";
  selected: number;
  onPageChange: React.Dispatch<React.SetStateAction<string>>;
  maxPage?: string;
}

export const PageChangeButton: React.FC<Props> = ({ direction, selected, onPageChange, maxPage }) => {
  const isMaxPage = selected === +(maxPage || 0) - 1;

  const handlePageChange = () => {
    scrollToTop();

    onPageChange((prevPage: string) => {
      return (direction === "prev"
        ? (+prevPage - 1)
        : (+prevPage + 1)).toString();
    });
  };

  return (
    <button
      type="button"
      className={cn(
        "pageChangeButton",
        {
          "left-disabled": direction === "prev" && selected === 0,
          "right-disabled": direction === "next" && isMaxPage,
          "left": direction === "prev",
          "right": direction === "next",
        }
      )}
      disabled={isMaxPage && direction === "next"
        || selected === 0 && direction === "prev"}
      onClick={handlePageChange}
    />
  );
};

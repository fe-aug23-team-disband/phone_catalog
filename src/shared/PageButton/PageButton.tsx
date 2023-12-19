import cn from "classnames";
import "./PageButton.scss";
import { scrollToTop } from "../ScrollToTop/ScrollToTop";

interface Props {
  pageNumber: number;
  selected: number;
  onPageChange: React.Dispatch<React.SetStateAction<string>>;
}

export const PageButton: React.FC<Props> = ({pageNumber, selected, onPageChange}) => {
  const handlePageClick = () => {
    scrollToTop();

    onPageChange(pageNumber.toString());
  };

  return (
    <button
      type="button"
      className={cn(
        "pageButton",
        {
          "selected": selected === pageNumber
        }
      )}
      onClick={handlePageClick}
    >
      {pageNumber + 1}
    </button>
  );
};

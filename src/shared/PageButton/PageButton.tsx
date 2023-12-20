import cn from "classnames";
import "./PageButton.scss";

interface Props {
  pageNumber: number;
  selected: number;
  onPageChange: React.Dispatch<React.SetStateAction<string>>;
}

export const PageButton: React.FC<Props> = ({pageNumber, selected, onPageChange}) => {
  return (
    <button
      type="button"
      className={cn(
        "pageButton",
        {
          "selected": selected === pageNumber
        }
      )}
      onClick={() => onPageChange(pageNumber.toString())}
    >
      {pageNumber + 1}
    </button>
  );
};

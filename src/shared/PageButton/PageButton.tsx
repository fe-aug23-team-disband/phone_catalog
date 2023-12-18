import cn from "classnames";
import "./PageButton.scss";

interface Props {
  pageNumber: number;
  selected: number;
}

export const PageButton: React.FC<Props> = ({pageNumber, selected}) => {
  return (
    <button type="button" className={cn("pageButton", {"selected": selected === pageNumber})}>{pageNumber}</button>
  );
};

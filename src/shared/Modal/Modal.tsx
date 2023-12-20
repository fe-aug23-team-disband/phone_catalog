import React, { FC, ReactNode, useContext } from "react";
import styled from "./Modal.module.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import closeIcon from "../../static/Modal/button-close.png";
import closeIconLight from "../../static/Modal/button-close_light.png";
import { ThemeContext } from "../../app/providers/ThemeProvider";
import globalVariables from "../../static/variables";
interface ModalProps {
  setIsOpenModal: (state: boolean) => void;
  title: string;
  children: ReactNode;
  bottomButtons?: boolean;
  successBtnTitle?: string;
  onClickSuccess?: () => void;
  cancelBtnTitle?: string;
  showCloselBtn?: boolean;
}

const Modal: FC<ModalProps> = ({
  setIsOpenModal,
  title,
  children,
  bottomButtons = true,
  successBtnTitle,
  onClickSuccess,
  cancelBtnTitle,
  showCloselBtn = true
}) => {
  const { theme } = useContext(ThemeContext);

  const hanlerCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      className={styled.modal_background}
      onClick={() => setIsOpenModal(false)}
    >
      <div
        className={styled.modal_container}
        onClick={e => e.stopPropagation()}
      >
        {showCloselBtn && (
          <div className={styled.modal_button_close__wraper}>
            <ButtonIcon
              size="small"
              icon={`${theme === globalVariables.themeLight ? closeIconLight : closeIcon}`}
              onClick={hanlerCloseModal}
              customStyles={styled.modal_button_close}
            />
          </div>
        )}

        <h1 className={styled.modal_title}>{title}</h1>

        <form className={styled.modal_form}>
          {children}
          {bottomButtons && (
            <div className={styled.modal_buttons_wrapper}>
              <button
                className={styled.modal_button_cancel}
                onClick={hanlerCloseModal}
              >
                {cancelBtnTitle}
              </button>
              <button
                className={styled.modal_button_success}
                onClick={onClickSuccess}
              >
                {successBtnTitle}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;

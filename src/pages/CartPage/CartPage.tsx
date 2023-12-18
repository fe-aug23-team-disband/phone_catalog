import styles from "./CartPage.module.scss";
import { CartItem } from "../../widgets/CartItem/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";

import {
  cartSelector,
  createOrder,
  remove
} from "../../app/store/slices/cart.slice";
import { useCallback, useEffect, useState } from "react";
import Modal from "../../shared/Modal/Modal";
import globalVariables from "../../static/variables";
export const CartPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const { items, sum, order } = useAppSelector(cartSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const countTotalItems = useCallback(() => {
    return items.reduce((acc, { count }) => {
      return acc + count;
    }, 0);
  }, [items]);

  const handleCheckout = useCallback(() => {
    setIsOpenModal(false);
    setIsSecondModalOpen(true);

  }, []);

  useEffect(() => {

    if (isSecondModalOpen === true) {
      const timeoutId = setTimeout(() => {
        setIsSecondModalOpen(false);
        for (const item of items) {
          dispatch(remove({ id: item.item.id }));
        }
        dispatch(createOrder({ items, sum, order }));
        navigate(globalVariables.patchToPhones);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }

  }, [isSecondModalOpen]);

  return (
    <>
      <Link to=".." className={styles.button_back}>
        <div className={styles.button_back__icon}></div>
        <p className={styles.button_back__text}>Back</p>
      </Link>
      <div className={styles.cart}>
        <h1 className={styles.cart__title}>Cart</h1>
        <div className={styles.cart__items}>
          {items.map(({ item, count }) => (
            <CartItem product={item} count={count} key={item.id} />
          ))}
        </div>
        <div className={styles.cart__order}>
          <div className={styles.cart__info}>
            <h2 className={styles.cart__price}>{sum}</h2>
            <p className={styles.cart__item_count}>
              {`Total for ${countTotalItems()} items`}
            </p>
          </div>

          <div className={styles.cart__line}></div>

          <button
            disabled={items.length === 0}
            type="button"
            className={styles.cart__button}
            onClick={() => setIsOpenModal(true)}
          >
            Checkout
          </button>

          {isOpenModal && (
            <Modal
              title="Are you sure you want to buy?"
              cancelBtnTitle="Cancel"
              successBtnTitle="Buy"
              setIsOpenModal={setIsOpenModal}
              onClickSuccess={handleCheckout}
            >
              <p>
                After clicking the &apos;Buy&apos; button, your order will be
                processed.
              </p>
            </Modal>
          )}

          {isSecondModalOpen && (
            <Modal
              showCloselBtn={false}
              bottomButtons={false}
              title="Processing..."
              setIsOpenModal={setIsSecondModalOpen}
            >
              <p>Your order is being processed. Please wait...</p>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

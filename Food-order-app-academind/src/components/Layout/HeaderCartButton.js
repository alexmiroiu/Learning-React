import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const cartContext = useContext(CartContext);

    const numberOfCardItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const {items} = cartContext;

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return <button className={btnClasses} onClick={props.btnClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
}

export default HeaderCartButton;
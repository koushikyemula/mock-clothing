import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-action";

const CartIcon = () => {
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const dispatch = useDispatch();
	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
	return (
		<div className="cart-icon-container" onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;

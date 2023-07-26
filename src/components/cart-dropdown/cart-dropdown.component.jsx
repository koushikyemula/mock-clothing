import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-items/cart-items.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown= () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate("checkout")
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />))) : (
                    <span className="empty-message">Your cart is empty</span>
                ) }
            </div>
            <Button onClick={goToCheckout}>Go To CheckOut</Button>
        </div>
    )
}

export default CartDropdown;
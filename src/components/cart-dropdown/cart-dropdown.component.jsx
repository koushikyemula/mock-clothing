import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-items/cart-items.component";

const CartDropdown= () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {[].map(item => <CartItem cartItem={item}/>)}
            </div>
            <Button>Go To CheckOut</Button>
        </div>
    )
}

export default CartDropdown;
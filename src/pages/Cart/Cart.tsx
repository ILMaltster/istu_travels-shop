import classNames from "classnames";
import { appPaths } from "entities/Router";
import { useTripsCartStore } from "entities/Trip";
import { Link } from "react-router";
import { CartTable } from "widgets/Cart";

export const Cart = () => {
    const tripsCart = useTripsCartStore((state) => state.tripsCart)

    return (
        <div className="container">
            {
                tripsCart.length !== 0 && (
                    <Link to={appPaths.cart.makeOrder.$path} className={classNames('btn', 'btn-primary', 'mb-2')}>
                        Оформить заказ
                    </Link>
                )
            }

            <CartTable />
        </div>
    );
}
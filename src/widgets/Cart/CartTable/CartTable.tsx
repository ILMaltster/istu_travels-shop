import { useTripsCartStore } from "entities/Trip";
import { EmptyTable } from "./EmptyTable/EmptyTable";
import classNames from "classnames";
import { FC } from "react";

interface ICartTableProps {
}

export const CartTable: FC<ICartTableProps> = ({}) => {
    const tripsCart = useTripsCartStore((state) => state.tripsCart)
    const removeTripFromCart = useTripsCartStore((state) => state.removeTripFromCart);
    const setQuantityTripToCart = useTripsCartStore((state) => state.setQuantityTripToCart);

    const removeTrip = (id: string) => {
        removeTripFromCart(id)
    }

    const onChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        let findedValue = tripsCart.find((item) => item.id === id);
        if (!findedValue) return;
        setQuantityTripToCart(findedValue.id, Number(event.target.value));
    }

    if (tripsCart.length === 0) return (
        <EmptyTable />
    )

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Путевка</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Сумма</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tripsCart && tripsCart.map((trip) => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{trip.title}</td>
                                <td>{trip.price}Р</td>
                                <td>
                                    <input
                                        type="number"
                                        onChange={(event) => onChangeQuantity(event, trip.id)}
                                        className="form-control cart-number" value={trip.quantity} min="1" />
                                </td>
                                <td>{trip.quantity * trip.price}Р</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => removeTrip(trip.id)}
                                        className="btn btn-danger"
                                    >
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
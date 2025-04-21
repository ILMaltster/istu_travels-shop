import { ITrip, useGetTrip, useTripsCartStore } from "entities/Trip";
import { useParams } from "react-router";
import city from 'assets/img/city.jpg'
import classNames from "classnames";
import style from './tripItem.module.scss';

export const TripItem = () => {
    const { id = '' } = useParams()
    const { data: trip, isLoading: isLoadingTrip, error: errorTrip } = useGetTrip(id);
    const tripsCart = useTripsCartStore((state) => state.tripsCart);
    const addTripToCart = useTripsCartStore((state) => state.addTripToCart);
    const removeTripFromCart = useTripsCartStore((state) => state.removeTripFromCart);
    const addTrip = (trip: ITrip) => {
        addTripToCart({
            ...trip,
            quantity: 1,
        })
    }

    const removeTrip = (id: string) => {
        removeTripFromCart(id)
    }

    const isCartedTrip = (id: string) => !!tripsCart.find((tripCart) => tripCart.id === id);

    if (!trip) return <>Такой путёвки не существует</>
 
    return (
        <div className="card text-center card-product">
            <div className="card-product__img">
                <img className={classNames('card-img', style.img)} src={trip?.imageUrl || city} alt="" />
            </div>
            <div className="card-body">
                <p>{trip.country.name}</p>
                <h4 className="card-product__title">{trip.title}</h4>
                <p className="card-product__price">{trip.price} ₽</p>
                <p className="card-product__duration">
                    <b>Длительность:</b>
                    {trip.duration} дней / {trip.duration - 1} ночей
                </p>
                <div className="card-product__description" dangerouslySetInnerHTML={{ __html: trip?.description || '' }} />
                {
                    isCartedTrip(id) ? (
                        <button type="button" onClick={() => removeTrip(id)} className="btn btn-danger">
                            Отменить
                        </button>
                    ) : (
                        <button type="button" onClick={() => addTrip(trip)} className="btn btn-primary">
                            В корзину
                        </button>
                    )
                }
            </div>
        </div>
    );
}
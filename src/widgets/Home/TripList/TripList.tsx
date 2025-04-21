import { ITrip, useGetTrips, useTripsCartStore } from "entities/Trip";
import { FC } from "react";
import style from './tripList.module.scss';
import classNames from "classnames";
import img from 'assets/img/city.jpg';
import { appPaths } from "entities/Router";
import { Link } from "react-router";
import { IPaged } from "shared";

interface ITripList {
    tripsPaged?: IPaged<ITrip[]>;
    isLoading: boolean;
}

export const TripList: FC<ITripList> = ({isLoading, tripsPaged}) => {
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


    return (
        <section className="pb-40">
            <div className={style['card-grid']}>
                {
                    !isLoading && tripsPaged ? tripsPaged.data.map((trip) => (
                        <div key={trip.id} className={classNames('card', 'text-center')}>
                            <Link to={appPaths.tripsCatalog.$path + `/${trip.id}`}>
                                <div className={classNames(style['card-product__img'])}>
                                    <img className={classNames(style['card-img'])} src={trip.imageUrl || img} alt={`${trip.country.name}`} />
                                </div>
                            </Link>
                            <div className="card-body">
                                <p>{trip.country.name}</p>
                                <Link to={appPaths.tripsCatalog.$path + `/${trip.id}`}>
                                    <h4 className="card-product__title">{trip.title}</h4>
                                </Link>
                                <p className="card-product__price">{trip.price} ₽</p>
                                {
                                    isCartedTrip(trip.id) ? (
                                        <button type="button" onClick={() => removeTrip(trip.id)} className="btn btn-danger">
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
                    )) : (
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
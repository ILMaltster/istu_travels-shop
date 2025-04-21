import classNames from "classnames"
import { appPaths } from "entities/Router"
import { Link } from "react-router"
import style from './makeOrder.module.scss'
import { IOrderTrip, usePostTrip, useTripsCartStore } from "entities/Trip"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

interface IInputs {
    fio: string;
    number: string;
  }

export const MakeOrder = () => {

    const {
        register,
        handleSubmit,
    } = useForm<IInputs>()
    const [isSuccess, setIsSuccess] = useState(false);
    const {trigger, isMutating, error} = usePostTrip(() => setIsSuccess(true))
    const tripsCart = useTripsCartStore((state)=>state.tripsCart)

    const onSubmit: SubmitHandler<IInputs> = (data) => {
        const readyData: IOrderTrip = {
            fio: data.fio,
            phone: data.number,
            trips: tripsCart.map((trip)=>({
                quantity: trip.quantity,
                tripId: trip.id
            }))
        }
        trigger(readyData).catch(()=>{})
    }

    console.log(error);

    return (
        <div className={classNames('container')}>
            <Link to={appPaths.cart.$path} className={classNames('btn', 'btn-primary', 'mb-2')}>
                ← В корзину
            </Link>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">ФИО</label>
                <input type="text" className="form-control" placeholder="Петров Иван Денисович" {...register("fio")}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Номер телефона</label>
                <input type="tel" className="form-control" placeholder="7 999 999 99 99" {...register("number")}/>
            </div>
            <button className={classNames('btn', 'btn-primary', style.makeOrderBtn)} onClick={handleSubmit(onSubmit)}>
                {isMutating && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>}

                Оформить заказ
                </button>
            {
                isSuccess && <div className="text-success text-center mt-3">Заказ успешно оформлен</div>
            }
        </div>
    )
}
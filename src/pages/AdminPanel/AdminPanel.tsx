import { useGetUsersOrders } from "entities/UserOrder/api";
import style from './adminPanel.module.scss'
import classNames from "classnames";
import { useNavigate } from "react-router";
import { useUserLoginStore } from "entities/User/store/store";
import { appPaths } from "entities/Router";

export const AdminPanel = () => {
    const { data, isLoading, error } = useGetUsersOrders();
    let navigate = useNavigate();
    const userRole = useUserLoginStore((state)=> state.userRole);

    if(userRole !== 'Admin') {
        navigate(appPaths.home.$path)
    }

    return (
        <div>
            <div className={classNames(style['table-header-container'])}>
                <table className={classNames(style['table-header'])}>
                    <tbody>
                        <tr>
                            <td width='30%'>Номер Заказа</td>
                            <td width='30%'>ФИО</td>
                            <td width='20%'>Номер телефона</td>
                            <td width='20%'>Сумма</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classNames(style.collapsible)} id="accordionExample">
                {
                    data && data.data.map((orderInfo) => (
                        <div className={classNames(style['collapsible-accordion'])}>
                            <div className={classNames(style["collapsible-item"])}>
                                <input className={classNames(style.input)} type="checkbox" id={orderInfo.id} />
                                <label className={classNames(style["collapsible-item-label"])} htmlFor={orderInfo.id}>
                                    <table className={classNames(style['table-header-content'])}>
                                        <tbody>
                                            <tr>
                                                <td scope="col" width='30%'>{orderInfo.id}</td>
                                                <td scope="col" width='30%'>{orderInfo.fio}</td>
                                                <td scope="col" width='20%'>{orderInfo.phone}</td>
                                                <td scope="col" width='20%'>{orderInfo.sum}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </label>
                                <div className={classNames(style["collapsible-item-content"])}>
                                    <table className={classNames(style['table-content'])}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Город</th>
                                                <th scope="col">Страна</th>
                                                <th scope="col">Длительность</th>
                                                <th scope="col">Цена</th>
                                                <th scope="col">Кол-во</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orderInfo.trips && orderInfo.trips.map((trip) => (
                                                    <tr>
                                                        <td scope="col">{trip.country}</td>
                                                        <td scope="col">{trip.title}</td>
                                                        <td scope="col">{trip.duration} дней</td>
                                                        <td scope="col">{trip.price} ₽</td>
                                                        <td scope="col">{trip.quantity}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    );
}
import { Link } from 'react-router'
import { appPaths } from 'entities/Router'

export const EmptyTable = () => {
    return (
        <div>
            <h3>Корзина пуста! </h3>
            <div>Набрать её можно на <Link to={appPaths.home.$path}>главном экране</Link>.</div>
        </div>
    )
}
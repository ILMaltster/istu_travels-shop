import classNames from 'classnames'
import style from './header.module.scss'
import { Link } from 'react-router'
import { appPaths } from 'entities/Router'
import { useTripsCartStore } from 'entities/Trip'

export const Header = () => {
    const tripsCart = useTripsCartStore((state) => state.tripsCart)

    return (
        <header className={style['site-header']}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to={appPaths.home.$path} className={classNames("navbar-brand", style['site-header-logo'])}>
                        Путевки онлайн
                    </Link>
                    <div className={classNames(style.btnContainer)}>
                        <Link to={appPaths.login.$path} className={classNames("btn",)}>
                            Войти 
                        </Link>
                        <Link to={appPaths.cart.$path} className={classNames("btn", "btn-primary",)}>
                            Корзина 
                            {
                                tripsCart.length > 0 && (
                                    <span className={classNames("badge", "badge-danger", "position-absolute", style.badge)}>{tripsCart.length}</span>
                                )
                            }
                        </Link>
                    </div>
                </div>
            </nav>
       </header>
    )
}
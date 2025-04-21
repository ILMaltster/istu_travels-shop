import { Outlet } from 'react-router'
import style from './loginLayout.module.scss'
import classNames from 'classnames'

export const LoginLayout = () => {
    return(
        <section className={style['site-main']}>
        <div className={classNames("container", style.loginContainer)}>
            <Outlet/>
        </div>
        </section>
    )
}
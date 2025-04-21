import { Outlet } from "react-router";
import { Footer, Header } from "widgets/layouts";
import style from './defaultLayout.module.scss';
import classNames from "classnames";

export const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <section className={style['site-main']}>
                <div className={classNames("container", style.wrapper)}>
                    <Outlet/>
                </div>
            </section>
            <Footer/>
        </>
    )
}
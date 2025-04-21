import { FC } from "react"
import style from './tripSearch.module.scss';
import classNames from "classnames";

interface ITripSearchProps {
    onChange: (data: string) => void;
}

export const TripSearch: FC<ITripSearchProps> = ({onChange}) => {
    const onChangeForm: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value)
    }
    return (
        <div className={style['filter-bar']}>
            <div>
                <div className={classNames(style['input-group'], "input-group")}>
                    <input type="text" onChange={onChangeForm} className="form-control" placeholder="Название города" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Искать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
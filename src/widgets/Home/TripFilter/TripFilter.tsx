import { useGetTripsFilter } from "entities/Trip/api/useGetTripsFilter"
import { FC } from "react";
import styles from './tripFilter.module.scss';

interface ITripFilterProps {
    onChange: (text: string) => void
}

interface IFilter {
    categoryId?: string | undefined;
    name: string;
    quantity: number;
    onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
}
const Filter: FC<IFilter> = (props) => {
    return (
        <div className="form-check">
            <input className="form-check-input" onChange={props.onChangeInput} type="radio" value={props.categoryId} name={"country"} id={props.categoryId} />
            <label className="form-check-label" htmlFor={props.categoryId}>
                {`${props.name} (${props.quantity})`}
            </label>
        </div>
    )
}

export const TripFilter: FC<ITripFilterProps> = ({ onChange }) => {
    const { data: filters, isLoading, error } = useGetTripsFilter();

    const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
        onChange(e.target.value)
    }
    return (
        <div className="col-xl-3 col-lg-4 col-md-5">
            <div>
                <div className={styles['filter-sidebar-header']}>Страны:</div>
                <div className={styles['filter-sidebar-content']}>
                    <Filter onChangeInput={onChangeInput} categoryId={"Все"}  name={'Все'} quantity={filters ? filters.reduce((acc, curr) => acc + curr.quantity, 0) : 0} />
                    {
                        filters && filters.map((filter) => (
                            <Filter key={filter.categoryId} categoryId={filter.categoryId} onChangeInput={onChangeInput} name={filter.name} quantity={filter.quantity} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
import classNames from 'classnames';
import style from './login.module.scss';
import { useNavigate } from 'react-router';
import { useLogin } from 'entities/User/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { appPaths } from 'entities/Router';
import { useUserLoginStore } from 'entities/User/store/store';

interface ILoginForm {
    login: string;
    password: string;
  }

export const Login = () => {
    let navigate = useNavigate();
    const setUserRole = useUserLoginStore((state)=> state.setUserRole);
    const {data, isMutating, trigger, error} = useLogin();
    const {
        register,
        handleSubmit,
    } = useForm<ILoginForm>()

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        trigger(data).then((success) => {
            setUserRole(success.data.roles[0].name)
            navigate(appPaths.admin.$path)
        }).catch(()=>{})
    }


    return (
        <div className={classNames(style.loginForm)}>
            <button onClick={() => navigate(-1)} className={classNames(style.backBtn)}>
                ← Назад
            </button>
            <div className={classNames(style.title)}>Форма авторизации</div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Логин</label>
                <input type="text" className="form-control" {...register("login")}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Пароль</label>
                <input type="password" className="form-control" {...register("password")}/>
            </div>
            <button className={classNames('btn', 'btn-primary', style.enterBtn)} onClick={handleSubmit(onSubmit)}>Войти</button>
            {
                error && <div className='text-danger'>Неправильный логин или пароль</div>
            }
        </div>
    );
}
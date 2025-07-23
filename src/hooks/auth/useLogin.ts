import { useDispatch, useSelector } from 'react-redux';
import { login } from 'reduxFolder/authSlice';

export default function useLogin() {
    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.authState.user);
    const error = useSelector((state: any) => state.authState.error);

    const loginHandler = (credentials: { email: string; password: string }) => {
        (dispatch as any)(login(credentials));
    };

    return [user, error, loginHandler];
}

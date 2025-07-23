import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../reduxFolder/authSlice'; // update path as needed
import { logout as logoutApi } from '../../helpers'; // optional backend logout call

export default function useLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = useCallback(() => {
        logoutApi()
            .catch((e) => console.error('Logout API failed:', e))
            .finally(() => {
                dispatch(logoutAction()); // ✅ Redux clears user/token/localStorage
                navigate('/auth/login');
            });
    }, [dispatch, navigate]);

    return [logout];
}

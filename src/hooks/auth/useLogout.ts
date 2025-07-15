import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout as logoutApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

export default function useLogout() {
    const navigate = useNavigate();

    const logout = useCallback(() => {
        const api = new APICore(); // ✅ moved inside callback

        logoutApi()
            .then(() => {
                api.setLoggedInUser(null);
                setAuthorization(null);
                navigate('/auth/login');
            })
            .catch((e) => {
                console.error('Logout error:', e);
                api.setLoggedInUser(null);
                setAuthorization(null);
                navigate('/auth/login');
            });
    }, [navigate]);

    return [logout];
}

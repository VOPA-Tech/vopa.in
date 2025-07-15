import { useState } from 'react';
import { login as loginApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

export default function useLogin() {
    const api = new APICore();

    const [user, setUser] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const login = async ({ email, password }: { email: string; password: string }) => {
        try {
            console.log('Calling loginApi...');
            const response = await loginApi({ email, password });

            console.log('Raw login response:', response); // 👈 Add this
            if (!response || !response.data) {
                console.error('No response or response.data is undefined!');
                return;
            }

            const { token, admin } = response.data;
            console.log('Token:', token, 'Admin:', admin); // 👈 Add this too

            const session = {
                token,
                role: 'Admin',
                ...admin,
            };

            setUser(session);
            api.setLoggedInUser(session);
            setAuthorization(token);
        } catch (e) {
            console.error('Login failed:', e);
            setError(e);
        }
    };

    return [user, error, login] as const;
}

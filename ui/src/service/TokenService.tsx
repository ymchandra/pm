import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

export default async function TokenService() {
    const {getAccessTokenSilently} = useAuth0();
    const token = await getAccessTokenSilently({});
    console.log(token);
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

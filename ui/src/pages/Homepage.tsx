import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@chakra-ui/react";
import SearchWithList from "./SearchWithList";

export default function Homepage() {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    if (isAuthenticated) {
        return (
            <div>
                Hello {' '}{' '}
                <Button
                    borderRadius={0}
                    type="submit"
                    variant="outline"
                    colorScheme="teal"
                    width="auto"
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    Logout
                </Button>
                <SearchWithList/>
            </div>
        );
    } else {
        return (
            <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={() => loginWithRedirect()}
            >
                Login
            </Button>
        );
    }
}

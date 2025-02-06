import React, {useEffect, useState} from 'react';
import {Input, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";

export default function SearchWithList() {
    const [items, setItems] = useState<any[]>([]);
    const {getAccessTokenSilently} = useAuth0();
    useEffect(() => {
        (async () => {
            const token = await getAccessTokenSilently({});
            console.log(token);
            const headers =  {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const result = await axios("http://localhost:8080/pm/api/v1/list", headers);
            setItems(result.data);
        })();
    }, []);
    return (
        <div>
            <Input placeholder='Search' size='lg'/>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Category</Th>
                        <Th>Login</Th>
                        <Th>Password</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map(item => {
                        return (<Tr>
                            <Td>{item.name}</Td>
                            <Td>{item.description}</Td>
                            <Td>{item.category.name}</Td>
                            <Td>{item.login}</Td>
                            <Td>{item.password}</Td>
                        </Tr>)
                    })}
                </Tbody>
            </Table>
        </div>
    );
}

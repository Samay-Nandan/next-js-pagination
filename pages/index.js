import { useState } from "react";
import { toast } from 'react-toastify';
import { arrayPagination } from '../utils/pagination'
import { Button, H1, Layout, UnOrderList, List, Card, CardHeader, Image, CardBody } from "../styles/index"

const  NO_OF_USERS_TO_SHOW_PER_PAGE = 4;

const Index = () => {

    const [ users, setusers ] = useState([]);
    const [ isUsersFetched, setisUsersFetched ] = useState(false);
    const [ pageNumber, setpageNumber ] = useState(1);
    const [ activeUserIndex, setactiveUserIndex ] = useState(0);

    const partialUsersArray = arrayPagination( users, NO_OF_USERS_TO_SHOW_PER_PAGE, pageNumber )

    const fetchUsers = async () => {

        try {
            const response = await import('../data/users.json');
            setusers(response.default)
            setisUsersFetched(true)

        } catch (error) {
            toast.error(error.message)
            setisUsersFetched(false)
        }

    }

    const nextUserHandler = () => {

        if( activeUserIndex < NO_OF_USERS_TO_SHOW_PER_PAGE - 1 ) 
            setactiveUserIndex( activeUserIndex + 1 )

        if( users.length > pageNumber * NO_OF_USERS_TO_SHOW_PER_PAGE && activeUserIndex === NO_OF_USERS_TO_SHOW_PER_PAGE - 1 ) {
            setpageNumber(pageNumber + 1)
            setactiveUserIndex(0)
        }

        if( partialUsersArray.length < NO_OF_USERS_TO_SHOW_PER_PAGE ) 
            setactiveUserIndex( partialUsersArray.length - 1 )

    }

    const previousUserHandler = () => {

        if( activeUserIndex > 0 ) 
            setactiveUserIndex( activeUserIndex - 1 )

        if( activeUserIndex === 0 ) {
            setpageNumber( pageNumber > 1 ? pageNumber - 1 : 1 )
            setactiveUserIndex( pageNumber === 1 ? 0 : NO_OF_USERS_TO_SHOW_PER_PAGE - 1 )
        }

    }

    return (
        <Layout bg={ isUsersFetched }>
            <CardHeader>
                <H1 display={'inline-block'}>Users</H1>
                <Button bg={ isUsersFetched }
                        color={ isUsersFetched }
                        cursor={ isUsersFetched }
                        onClick={ fetchUsers }
                        disabled={ isUsersFetched }> Load Users </Button>
                <Button onClick={ nextUserHandler }> Next User </Button>
                <Button onClick={ previousUserHandler }> Previous User </Button>
            </CardHeader>
            {
                isUsersFetched && 
                <Card>
                <UnOrderList>
                    {
                        partialUsersArray.map(({ id, name }, index) => {
                            return <List key={ id } 
                                         border={ activeUserIndex === index }>
                                         { name }
                                   </List>
                        })
                    }
                </UnOrderList>
                <UnOrderList>
                    <CardBody>
                        <Image src={ partialUsersArray[activeUserIndex].image }
                               alt={'User Image'}/>
                        <List>{ partialUsersArray[activeUserIndex].name }</List>
                    </CardBody>
                </UnOrderList>
                </Card>
            }
        </Layout>
    )
}


export default Index

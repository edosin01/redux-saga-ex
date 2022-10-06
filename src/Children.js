import useUser from "./redux/hook/useUser";

export default function Children() {
    const {data: {userList}, actions} = useUser();

    const onSuccess = (response) => {
        console.log('Response: ', response);
    }

    const onError = (error) => {
        console.log('Error: ', error);
    }

    const handleClick = (e) => {
        e.preventDefault();

        // Thực hiện dispatch một action (GET_USER_STATE_START) = dispatch({type: 'GET_USER_STATE_START'})
        actions.getUser(userList, onSuccess, onError);
    }

    return (
        <>
            <h1>Redux Saga</h1>
            <button onClick={(e) => handleClick(e)}>Get Users</button>
            <div>
                {userList && <ul>
                    {
                        userList.map((user, index) => {
                            return (
                                <li key={index}>{user?.name}</li>
                            )
                        })
                    }
                </ul>
                }
            </div>
        </>
    )
}
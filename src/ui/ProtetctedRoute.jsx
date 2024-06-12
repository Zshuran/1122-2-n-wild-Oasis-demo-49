import styled from "styled-components"
import { useUser } from "../features/authentication/useUser"
import { useNavigate } from "react-router-dom"
import Spinner from "./Spinner"
import { useEffect } from "react"
const FullPage = styled.div`
    height : 100vh;
    background-color : var(--color-gray-50);
    display : flex;
    justify-content : center;
    align-items : center;
`
const ProtetctedRoute = ({children}) => {
    const {user,isLoading,isAuthenticated} = useUser();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isLoading && !isAuthenticated){
            navigate('/login');
        }
    },[isLoading,isAuthenticated,navigate]);

    if (isLoading) return (
        <FullPage>
            <Spinner />
        </FullPage>
    )
    if (isAuthenticated) return children;
}

export default ProtetctedRoute
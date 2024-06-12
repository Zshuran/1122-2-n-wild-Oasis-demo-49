import { useMutation,useQueryClient } from '@tanstack/react-query';
import { login as loginApi} from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

export const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate:login,isLoading} = useMutation({
        mutationFn:({email,password}) => loginApi({email,password}),
        onSuccess:(data)=>{
            console.log('useLogin() user',data);
            queryClient.setQueryData(['user_49'],data.user);
            navigate('/dashboard'),{replace:true};
        },
        onError:(error)=>{
            console.error('Error',error);
            toast.error("provide email or password are incorrect");
        }
    });
    return {login,isLoading};
};
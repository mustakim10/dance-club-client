import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiousSecure';

const useSelectedClass = () => {
    const {user, loading} = useContext(AuthContext);
//const token = localStorage.getItem('access-token');
const [axiosSecure] = useAxiosSecure();


    const { isLoading,refetch, data: selected = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const response = await fetch(`https://dance-club-server.vercel.app/selectedClasses?email=${user?.email}`,{
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },
        queryFn: async() => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data ;
        }
      })

      return [selected, isLoading, refetch]
  
};

export default useSelectedClass;
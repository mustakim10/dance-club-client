import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
const token = localStorage.getItem('access-token');


    const { isLoading,refetch, data: selected = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        },
      })

      return [selected, isLoading, refetch]
  
};

export default useSelectedClass;
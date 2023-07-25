import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCollege = ()=>{
    const [axiosSecure] = useAxiosSecure();

    const{
        data: admittedCollege = [],
        isLoading: loading,
        refetch
    } = useQuery({
        queryKey: ['amissions'],
        queryFn: async ()=>{
            try{
                const res = await axiosSecure.get('/admission');
                return res.data;
            }catch(error){
                console.error('Error fetching admittedCollege:', error);
                return []
            }
        }
    })
    return [admittedCollege,loading, refetch]
}

export default useCollege;
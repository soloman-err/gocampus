import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useReview = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: review = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/review');
        return res.data;
      } catch (error) {
        console.error('Error fetching review:', error);
        return [];
      }
    },
  });
  return [review, loading, refetch];
};

export default useReview;
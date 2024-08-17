import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const usePost = (userId: string) => {
	const { data, error, isLoading, mutate } = useSWR(
		userId ? `/api/posts/${userId}` : null,
		fetcher,
	);

	return { data, error, isLoading, mutate };
};

export default usePost;

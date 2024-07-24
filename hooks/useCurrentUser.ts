import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
	// current is the api route (current.ts)
	// SWR replaces the need for redux,the whole validation shtick
	const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useCurrentUser;

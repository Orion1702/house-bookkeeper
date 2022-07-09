import { useMemo } from "react";


// Sort for select - doesn't used
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
		// console.log('Отработала функция getSortedPosts')
		if(sort) {
			return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
		}
		return posts;
	}, [sort, posts])

    return sortedPosts;
}

export const usePostsByDate = (data, dateFrom, dateTo) => {
	const dateStart = new Date(dateFrom)
	const dateEnd = new Date(dateTo)

	const sortedData = useMemo(() => {
			return [...data].filter((a) => {
				const dataDate = new Date(a.date)
				return (dataDate >= dateStart && dataDate <= dateEnd);
			})
	}, [data, dateFrom, dateTo])
	return sortedData;
}

export const usePosts = (data, sort, query, dateFrom, dateTo) => {
	const sortByDate = usePostsByDate(data, dateFrom, dateTo);
	const sortByDateAndSearch = useMemo(() => {
		return sortByDate.filter(el => el.name.toLowerCase().includes(query.toLowerCase()) )
	}, [query, sortByDate])

	return sortByDateAndSearch;
}
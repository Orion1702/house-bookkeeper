import { useMemo } from "react";

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
		// if(dateFrom && dateTo) {
			return [...data].filter((a) => {
				// console.log(`a.date -> ${new Date(a.date)} : dateStart = ${dateStart} dateEnd = ${dateEnd}`)
				const dataDate = new Date(a.date)
				return (dataDate >= dateStart && dataDate <= dateEnd);
			})
		// }
	}, [data, dateFrom, dateTo])
	console.log('sortedData')
	console.log(sortedData)
	return sortedData;
}

export const usePosts = (data, sort, query, dateFrom, dateTo) => {
    /*
	const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo ( () => {
		return sortedPosts
		// return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
	}, [query, sortedPosts])
    
    return sortedAndSearchedPosts;
	*/
	const dataFiltered = usePostsByDate(data, dateFrom, dateTo);
	return dataFiltered;
}
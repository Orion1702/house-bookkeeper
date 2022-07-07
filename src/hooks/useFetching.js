import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetching = (callback) => {
    // const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.isLoading);
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            // setIsLoading(true)
            dispatch({type: 'UPDATE_ISLOADING', payload: true})
            await callback(...args)
        } catch(e) {
            setError(e.message);
        } finally {
            setTimeout( () => {
                dispatch({type: 'UPDATE_ISLOADING', payload: false})
                // setIsLoading(false)
            }, 1450)
        }
    }

    return [fetching, isLoading, error]
}
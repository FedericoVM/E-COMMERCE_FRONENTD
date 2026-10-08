import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            cacheTime: 0,
            staleTime: 0
        }
    }
})

const ApiReactQuery = ({children}) =>{
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ApiReactQuery
import { useIsFetching } from 'react-query'
 
 function Globalloader() {
   const isFetching = useIsFetching()
 
   return isFetching ? (
     <div style={{color: 'white', backgroundColor: 'black'}}>Queries are fetching in the background...</div>
   ) : null
 }

 export default Globalloader;
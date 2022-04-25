

import { Tables } from "./Table"
import { useSelector} from "react-redux"
import{Login} from "./Login"



export const Home = () => {
  const data  = useSelector((store) => (store.reducer.isLoggedIn));
  console.log(data)



  return (
    <>
      {data?<Tables/>:<Login/>}
    </>
  )
}
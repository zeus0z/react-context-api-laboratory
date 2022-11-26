import { useContext } from "react";
import { LotrContext } from "../context/LotrContext";

const Home = () => {

  const {name} = useContext(LotrContext);

  




  return (
      <div>
      <h1>HOME</h1>
     <h2>Nome do filme: {name}</h2>
      
    </div>
  )

}


export default Home;
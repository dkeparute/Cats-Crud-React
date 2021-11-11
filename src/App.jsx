import axios from "axios";
import { useEffect, useState } from "react";
import CatsList from "./Components/CatsList";
import NewCat from "./Components/NewCat";

function App() {


  //4.  sukuriamas allcats hookas nurodantis STATE 
  const [allCats, setAllCats] = useState([]);



  //2. Atvaizduojami visi duomenys is duomenu bazes
  useEffect(() => {
    axios.get('http://localhost:3003/cats')
      .then(res => {
        // 5. pasetinam visas kates
        setAllCats(res.data)
        console.log(res.data);
      })

  }, [])

  return (
    <div className='cats'>
      <NewCat/>
      <CatsList allCats={allCats} />
    </div>
  );
}
export default App;
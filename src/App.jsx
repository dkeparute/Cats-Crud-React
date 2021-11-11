import axios from "axios";
import { useEffect, useState } from "react";
import CatsList from "./Components/CatsList";
import NewCat from "./Components/NewCat";

function App() {


  //4.  sukuriamas allcats hookas nurodantis STATE 
  const [allCats, setAllCats] = useState([]);

// 9. Irasymas i duomenu baze, gauta gyvuna siuncia i serveri

const create = oneCat => {
  axios.post('http://localhost:3003/cats', oneCat)
  .then(res => {
    console.log(res.data);
  })
}

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
      {/* 11. create perduodame kaip propsa */}
      <NewCat create={create}/>
      <CatsList allCats={allCats} />
    </div>
  );
}
export default App;
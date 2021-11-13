import axios from "axios";
import { useEffect, useState } from "react";
import CatFilter from "./Components/CatFilter";
import CatModal from "./Components/CatModal";
import CatsList from "./Components/CatsList";
import NewCat from "./Components/NewCat";

function App() {

  // 18. sukuriamas STATE skirta sparodyti arba paslepti modala ir perduodame per APP i modal komponenta
  const [showModal, setShowModal] = useState(false);

  // 13. tam kad pasikeistu informacija tada kai ji tikrai pasikeicia
  const [update, setUpdate] = useState(Date.now());

  //4.  sukuriamas allcats hookas nurodantis STATE 
  const [allCats, setAllCats] = useState([]);

  // 29 pasidarom state kuris rodysi modal kate ir perduodam per APP i modalo komponenta
  const [modalInput, setModalInput] = useState({
    breed: '',
    size: '',
    behaviour: '',
    age: ''
  })

  // 20. sukuriam modala ir perduodam modal per catslist iki onecat komponento
  // 28 modal perduos katina
  const modal = (oneCat) => {
    setShowModal(true);

    // 30 pastinam modalo inputa
    setModalInput(oneCat);
  }

  // 26. sukuriam hide funkcija jog paspaudus mygtuka modalas dingtu
  const hide = () => {
    setShowModal(false);
  }

  //  38. istriname gyvuna
  const remove = (id) => {
    setShowModal(false);
    axios.delete('http://localhost:3003/cats/' + id)
      .then(res => {
        setUpdate(Date.now());
        console.log(res.data);
      })
  }

  // 33 sukuriam hooka jog butu galima editing kate, perduodam per APP i modal komponenta
  const edit = (oneCat, id) => {
    // 36. pasetinam jog po edito modalas isijungtu
    setShowModal(false);
    axios.put('http://localhost:3003/cats/' + id, oneCat)
      .then(res => {
        setUpdate(Date.now());
        console.log(res.data);
      })
  }

  // 9. Irasymas i duomenu baze, gauta gyvuna siuncia i serveri
  const create = oneCat => {
    axios.post('http://localhost:3003/cats', oneCat)
      .then(res => {
        // 15 setinam naujausia update
        setUpdate(Date.now());
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
    //  14. seka update
  }, [update])

  return (
    <div className='cats'>
      {/* 11. create perduodame kaip propsa */}
      <CatFilter />
      <NewCat create={create} />
      <CatsList allCats={allCats} modal={modal} />
      <CatModal showModal={showModal} hide={hide} modalInput={modalInput} edit={edit} remove={remove} />
    </div>
  );
}
export default App;
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import CatFilter from "./Components/CatFilter";
import CatModal from "./Components/CatModal";
import CatsList from "./Components/CatsList";
import NewCat from "./Components/NewCat";
// 66.
import catsSort from "./Common/catsSort";
import CatsMessage from "./Components/CatsMessage";
import CatsStatistic from "./Components/CatsStatistic";

function App() {

  //4.  sukuriamas allcats hookas nurodantis STATE 
  const [allCats, setAllCats] = useState([]);

  // 13. tam kad pasikeistu informacija tada kai ji tikrai pasikeicia
  const [update, setUpdate] = useState(Date.now());

  // 18. sukuriamas STATE skirta sparodyti arba paslepti modala ir perduodame per APP i modal komponenta
  const [showModal, setShowModal] = useState(false);

  // 29 pasidarom state kuris rodysi modal kate ir perduodam per APP i modalo komponenta
  const [modalInput, setModalInput] = useState({
    breed: '',
    size: '',
    behaviour: '',
    age: ''
  })

  // 42.sukuriamas steitas tam kad butu galima fiksuoti filtravimo rezultatus
  const [breed, setBreed] = useState([]);

  // 45.sukuriamas filtras, kai jis pasikeis paleisime filtravima.
  // kai filtras pasikeicia mes turesime siusti uzklausa i serveri ir is serverio gausime atsakyma su jau nufiltruotais duomenimis
  const [filter, setFilter] = useState('');

  // 58.
  const [search, setSearch] = useState('');

  // 62. steitas pasakos pagal ka mes rusiuojam perduodam per APP i komponenta
  // const [sort, setSort] = useState('');

  const sort = useRef('');

  // statistika
  const [stats, setStats] = useState({
    count: 0,
    size: 0,
    average: 0
  });

  // group statistika
  const [groupStats, setGroupStats] = useState([]);

  // zinute
  const [showMsg, setShowMsg] = useState(false);
  const msg = useRef('labas');
  const addMsg = text => {
    msg.current = text;
    setShowMsg(true);
    setTimeout(() => { clearMsg() }, 2000);
  }
  const clearMsg = () => {
    setShowMsg(false);
  }

  useEffect(() => {
    axios.get('http://localhost:3003/stats')
      .then(res => {
        setStats(res.data[0]);
        console.log(res.data);
      })
  }, [update])

  // group by statistika
  useEffect(() => {
    axios.get('http://localhost:3003/group-stats')
      .then(res => {
        setGroupStats(res.data)
        console.log(res);
      })
  }, [update])

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

  // 52. paspaudus reset atnaujinama informacija
  const reset = () => {
    setUpdate(Date.now());
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
        addMsg('Item was added');
        setUpdate(Date.now());
        console.log(res.data);
      })
  }

  // 64-65.
  const bigSort = (by) => {
    setAllCats(catsSort(allCats, by))
    sort.current = by;
  }

  // 47. useffect kai pasikeicia fillter
  useEffect(() => {
    if (filter) {
      axios.get('http://localhost:3003/cats-filter/' + filter)
        .then(res => {
          setAllCats(res.data);
          console.log(res.data);
        })
    }
  }, [filter])

  // 59. useffect kai pasikeicia search
  useEffect(() => {
    if (search) {
      axios.get('http://localhost:3003/cats-behaviour/?s=' + search)
        .then(res => {
          setAllCats(res.data);
          console.log(res.data);
        })
    }
  }, [search])

  // 43. suteikiam reaktui galimybe optimatizuotis, jeigu sudetume i viena vieta, reaktas negaletu optimatizuotis, filtro metu reaktas atsinaujins
  useEffect(() => {
    axios.get('http://localhost:3003/cats-breed')
      .then(res => {
        // 44. pasetinam setbreed ir atiduodame i komponenta cat filter per APP
        setBreed(res.data);
        console.log(res.data);
      })
  }, [update])

  // //2. Atvaizduojami visi duomenys is duomenu bazes
  // useEffect(() => {
  //   axios.get('http://localhost:3003/cats')
  //     .then(res => {
  //       // 5. pasetinam visas kates
  //       setAllCats(res.data);
  //       console.log(res.data);
  //     })
  //   //  14. seka update
  // }, [update])

  // veikiantis sortas
  useEffect(() => {
    axios.get('http://localhost:3003/cats')
      .then(res => {
        setAllCats(catsSort((res.data), sort.current));
      })
  }, [update])

  return (
    <div className='cats'>
      {/* 11. create perduodame kaip propsa */}
      {/*48. kai keiciasi filtras tai turi pasisetinti elementai */}
      <CatsMessage msg={msg.current} showMsg={showMsg} />
      <CatsStatistic stats={stats} groupStats={groupStats} />
      <CatFilter breed={breed} setFilter={setFilter} reset={reset} setSearch={setSearch} bigSort={bigSort} />
      <NewCat create={create} />
      <CatsList allCats={allCats} modal={modal} />
      <CatModal showModal={showModal} hide={hide} modalInput={modalInput} edit={edit} remove={remove} />
    </div>
  );
}
export default App;
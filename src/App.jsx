import axios from "axios";
import { useEffect } from "react";

function App() {

//2. Atvaizduojami visi duomenys is duomenu bazes
  useEffect(() => {
    axios.get('http://localhost:3003/cats')
      .then(res => {
        console.log(res.data);
      })
  }, [])

  return (
    <div>

    </div>
  );
}
export default App;
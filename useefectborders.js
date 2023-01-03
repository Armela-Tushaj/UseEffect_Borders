import './App.css';
import { useState} from "react";
function App() {
  const [hasBorder, setHasBorder] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  return (
    <div 
      onClick={() => {
        console.log("Clicked");
        setHasBorder(!hasBorder);
        setHasValue(!hasValue);
       
      }}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "red",
        border: hasBorder ? "10px solid gray" : "none"
      }}
    />
   
  );
}
export default App;

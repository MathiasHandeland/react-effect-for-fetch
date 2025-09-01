import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {

  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState([]);
  const [savedAdvices, setSavedAdvices] = useState([]);

  const getAdvice = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdvice(data.slip.advice); 
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  const saveAdvices = () => {
    setSavedAdvices((prev) => [...prev, advice]);
  };

  // Fetch a advice when component mounts
  useEffect(() => {
    getAdvice();
  }, []);
  
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} onGetAdvice={getAdvice} onSaveAdvice={saveAdvices} />
      <FavouriteSlipsList savedAdvices={savedAdvices} />
    </section>
  )
}

export default AdviceSection

import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";

function App() {
  return (
    <>
      <SetCoffeeBean coffeeBeans={coffeeBeans} />
      <SelectedCoffeeBean />
    </>
  );
}

export default App;
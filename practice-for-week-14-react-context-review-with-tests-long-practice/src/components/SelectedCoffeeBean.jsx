import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const SelectedCoffeeBean = () => {
  //{console.log(CoffeeContext)};
  const {coffeeBean, setCoffeeBeanId} = useContext(CoffeeContext);

  console.log(coffeeBean);
  return(
    <div className="selected-coffee">
      <h2>Set Bean</h2>
      <p>{coffeeBean.name}</p>
      
    </div>
  )
}

export default SelectedCoffeeBean;
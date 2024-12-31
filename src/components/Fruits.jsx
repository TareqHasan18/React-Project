//The recommended way to create a component is to
// export default function ComponentName() {
//     return <div></div>

import Fruit from './Fruit';

// }
export default function Fruits() {
  //const fruits = ['Apple', 'Mango', 'Orange', 'Banana', 'Pineapple'];
  const fruits = [
    { name: 'Apple', price: 10, emoji: '🍎', soldOut: true },
    { name: 'Mango', price: 7, emoji: '🥭', soldOut: false },
    { name: 'Banana', price: 2, emoji: '🍌', soldOut: true },
    { name: 'Orange', price: 5, emoji: '🍊', soldOut: false },
    { name: 'Pineapple', price: 8, emoji: '🍍', soldOut: true },
  ];

  //only for my practice
  // const cars = [
  //   { name: 'Hyundai', price: 100000 },
  //   { name: 'Toyota', price: 90000 },
  // ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
      {/* only for my practice
      <ul>
        {cars.map((car) => (
          <MyCar key={car.name} name={car.name} price={car.price} />
        ))}
      </ul>
      */}
    </div>
  );
}

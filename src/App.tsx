import React from "react";

interface IAppProps {
  children: React.ReactNode;
}

interface User {
  name: string;
  age: number;
}

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

interface Point {
  x: number;
  y: number;
}

// declare const backpack: Backpack<string>;

// backpack.add("10");
// const Hola = backpack.get();
// console.log(Hola);

function App(props: IAppProps) {
  const helloWord = 9;
  console.log(helloWord);

  function logPoint(p: Point) {
    console.log("x : " + p.x + ", y : " + p.y);
  }

  const point = { x: 10, y: 16 };

  logPoint(point);

  // console.log(Hola);

  const user: User = {
    name: "Halo",
    age: 10,
  };

  console.log(user);

  return (
    <div className="App">
      <div className="text-2xl text-red-400">{user.name}</div>
    </div>
  );
}

export default App;

import { useContext, useState } from "react";
import { InputValueContext } from "./context/InputContext";
import { User } from "./interfaces";
import { Datagrid } from "./components/Datagrid";

interface IAppProps {
  headerText: string;
  extraText?: string;
}

const defaultFormData = {
  title: "",
  body: "",
};

function App({ headerText, extraText = "Oke default text" }: IAppProps) {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;
  const { state, dispatch } = useContext(InputValueContext);
  const users = [
    { id: 1, firstName: "Reza", lastName: "Augusdi", age: 20 },
    { id: 2, firstName: "Reza", lastName: "Augusdi", age: 20 },
    { id: 3, firstName: "Reza", lastName: "Augusdi", age: 20 },
  ];

  const fetchUser = () =>
    setUser({
      name: "Haji",
      age: 15,
      address: {
        street: "My Street .",
        number: 99,
        zip: "123454",
      },
      admin: false,
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      <button onClick={fetchUser}>Fetch User</button>
      {user && <p>{user.name}</p>}
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">First Text (title)</label>
          <input type="text" value={title} id="title" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="body">Second Text (body)</label>
          <input type="text" value={body} id="body" onChange={onChange} />
        </div>
      </form>

      <Datagrid items={users} />

      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET VALUE TO 100
      </button>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-2 w-full">
      <Header />
      <Content />
    </div>
  );
}

export default App;

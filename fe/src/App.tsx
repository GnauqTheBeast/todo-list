import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-auto">
      <Header />
      <Content />
    </div>
  );
}

export default App;

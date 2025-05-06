import { Status, Filter, Charts } from "../components";

const App = () => {
  return (
    <div className="container max-w-[1440px] mx-auto px-[30px] ml-[90px] my-8 flex flex-col gap-y-5">
      <Status />
      <Filter />
      <Charts />
    </div>
  );
};

export default App;

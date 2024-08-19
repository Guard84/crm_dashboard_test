import "./styles/app.scss";
import Sidebar from "./components/Sidebar";
import Customers from "./components/Customers";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div>
        <Header />
        <Customers />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import CentralBlock_Content from './components/DashBoard/CentralBlock_Content';
import CentralBlock_Find from './components/DashBoard/CentralBlock_Find';
import CentralBlock_Input from './components/DashBoard/CentralBlock_Input';
import Header from './components/DashBoard/Header';
import LogOut from './components/DashBoard/LogOut';
import Player from './components/DashBoard/Player';
import SideBar from './components/DashBoard/SideBar';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">

          <Header></Header>

          <div className="main__centerblock centerblock">
            <CentralBlock_Input />
            <CentralBlock_Find />
            <CentralBlock_Content />
          </div>

          <div className="main__sidebar sidebar">
            <LogOut />
            <SideBar />
          </div>

        </main>
          
        <Player></Player>

        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;

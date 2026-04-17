import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" width="40" height="40" className="me-2" style={{background: '#fff', borderRadius: '8px', padding: '2px'}} />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h2 className="display-5 mb-3">Bem-vindo ao OctoFit Tracker!</h2>
                <p className="lead">Acompanhe atividades, equipes, usuários, treinos e o ranking dos super-heróis!</p>
                <Link to="/activities" className="btn btn-primary btn-lg m-2">Ver Atividades</Link>
                <Link to="/leaderboard" className="btn btn-success btn-lg m-2">Ver Leaderboard</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

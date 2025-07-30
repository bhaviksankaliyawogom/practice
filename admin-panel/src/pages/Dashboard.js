import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCustomersClick = () => {
    navigate('/customers');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <div className="user-info">
            <span>Welcome, {user?.username}</span>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <span className="nav-icon">📊</span>
              Dashboard
            </li>
            <li className="nav-item" onClick={handleCustomersClick}>
              <span className="nav-icon">👥</span>
              Customers
            </li>
            <li className="nav-item">
              <span className="nav-icon">📦</span>
              Products
            </li>
            <li className="nav-item">
              <span className="nav-icon">📈</span>
              Analytics
            </li>
            <li className="nav-item">
              <span className="nav-icon">⚙️</span>
              Settings
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            <span className="nav-icon">🚪</span>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome to your admin dashboard</p>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Total Customers</h3>
              <span className="card-icon">👥</span>
            </div>
            <div className="card-content">
              <div className="stat-number">1,247</div>
              <div className="stat-change positive">+12% from last month</div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Total Products</h3>
              <span className="card-icon">📦</span>
            </div>
            <div className="card-content">
              <div className="stat-number">89</div>
              <div className="stat-change positive">+5% from last month</div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Revenue</h3>
              <span className="card-icon">💰</span>
            </div>
            <div className="card-content">
              <div className="stat-number">$24,580</div>
              <div className="stat-change positive">+18% from last month</div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Orders</h3>
              <span className="card-icon">📋</span>
            </div>
            <div className="card-content">
              <div className="stat-number">456</div>
              <div className="stat-change negative">-3% from last month</div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-actions">
          <div className="action-card" onClick={handleCustomersClick}>
            <div className="action-icon">👥</div>
            <h3>View Customers</h3>
            <p>Manage and view all customer information</p>
            <button className="action-button">Go to Customers →</button>
          </div>
          
          <div className="action-card">
            <div className="action-icon">📦</div>
            <h3>Manage Products</h3>
            <p>Add, edit, and organize your products</p>
            <button className="action-button">Go to Products →</button>
          </div>
          
          <div className="action-card">
            <div className="action-icon">📈</div>
            <h3>View Analytics</h3>
            <p>Check detailed analytics and reports</p>
            <button className="action-button">Go to Analytics →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
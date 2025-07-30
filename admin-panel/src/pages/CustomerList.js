import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CustomerList.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    // Filter customers based on search term
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    );
    setFilteredCustomers(filtered);
  }, [customers, searchTerm]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError('');
      // Using JSONPlaceholder API for demo data
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setCustomers(response.data);
    } catch (err) {
      setError('Failed to fetch customers. Please try again.');
      console.error('Error fetching customers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="customer-list-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading customers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-list-container">
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
            <li className="nav-item" onClick={handleBackToDashboard}>
              <span className="nav-icon">📊</span>
              Dashboard
            </li>
            <li className="nav-item active">
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
          <div className="header-left">
            <h1>Customer Management</h1>
            <p>Manage and view all customer information</p>
          </div>
          <div className="header-actions">
            <button className="refresh-button" onClick={fetchCustomers}>
              🔄 Refresh
            </button>
          </div>
        </div>

        {error && (
          <div className="error-banner">
            <span>⚠️ {error}</span>
            <button onClick={fetchCustomers}>Try Again</button>
          </div>
        )}

        <div className="customer-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search customers by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="customer-count">
            Showing {filteredCustomers.length} of {customers.length} customers
          </div>
        </div>

        <div className="customer-table-container">
          <table className="customer-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="customer-row">
                  <td className="customer-id">#{customer.id}</td>
                  <td className="customer-name">
                    <div className="name-container">
                      <div className="avatar">
                        {customer.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="name">{customer.name}</div>
                        <div className="username">@{customer.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="customer-email">{customer.email}</td>
                  <td className="customer-phone">{customer.phone}</td>
                  <td className="customer-website">
                    <a href={`http://${customer.website}`} target="_blank" rel="noopener noreferrer">
                      {customer.website}
                    </a>
                  </td>
                  <td className="customer-company">{customer.company.name}</td>
                  <td className="customer-address">
                    {customer.address.city}, {customer.address.zipcode}
                  </td>
                  <td className="customer-actions">
                    <button className="action-btn view-btn" title="View Details">
                      👁️
                    </button>
                    <button className="action-btn edit-btn" title="Edit Customer">
                      ✏️
                    </button>
                    <button className="action-btn delete-btn" title="Delete Customer">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCustomers.length === 0 && !loading && (
            <div className="no-customers">
              <div className="no-customers-icon">👥</div>
              <h3>No customers found</h3>
              <p>
                {searchTerm 
                  ? `No customers match your search for "${searchTerm}"`
                  : 'No customers available at the moment'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
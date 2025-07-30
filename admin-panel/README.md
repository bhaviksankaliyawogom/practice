# React Admin Panel

A modern, responsive admin panel built with React.js featuring authentication, dashboard, and customer management.

## Features

- **🔐 Authentication System**: Secure login with demo credentials
- **📊 Dashboard**: Overview with statistics and quick actions
- **👥 Customer Management**: View and manage customer data from public API
- **🎨 Modern UI**: Beautiful, responsive design with gradient themes
- **🔍 Search & Filter**: Real-time customer search functionality
- **📱 Mobile Responsive**: Optimized for all device sizes

## Demo Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Technology Stack

- **Frontend**: React.js 18
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS3 with modern features
- **Data Source**: JSONPlaceholder API

## Project Structure

```
src/
├── components/          # Reusable components
│   └── ProtectedRoute.js
├── context/            # React contexts
│   └── AuthContext.js
├── pages/             # Page components
│   ├── Login.js
│   ├── Login.css
│   ├── Dashboard.js
│   ├── Dashboard.css
│   ├── CustomerList.js
│   └── CustomerList.css
├── App.js
├── App.css
└── index.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd admin-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Login
1. Navigate to the login page
2. Enter the demo credentials:
   - Username: `admin`
   - Password: `admin123`
3. Click "Sign In" to access the dashboard

### Dashboard
- View overview statistics
- Navigate to different sections using the sidebar
- Click on action cards to navigate to specific features

### Customer Management
1. Click on "Customers" in the sidebar or dashboard
2. View the complete customer list fetched from JSONPlaceholder API
3. Use the search bar to filter customers by name, email, or phone
4. View customer details including contact information and company data

## API Integration

The application fetches customer data from the JSONPlaceholder API:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Data**: User information including name, email, phone, website, company, and address

## Features in Detail

### Authentication
- Context-based state management
- Protected routes
- Persistent login state during session
- Secure logout functionality

### Dashboard
- Statistics cards with mock data
- Quick action buttons
- Responsive grid layout
- Modern card-based design

### Customer List
- Real-time API data fetching
- Loading states and error handling
- Search and filter functionality
- Responsive table design
- Action buttons for future CRUD operations

### Responsive Design
- Mobile-first approach
- Flexible sidebar navigation
- Adaptive table layouts
- Touch-friendly interface

## Customization

### Styling
- CSS custom properties for easy theming
- Gradient color schemes
- Modern shadows and animations
- Consistent spacing system

### Adding New Features
1. Create new components in the `components/` directory
2. Add new pages in the `pages/` directory
3. Update routing in `App.js`
4. Add navigation items in sidebar components

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

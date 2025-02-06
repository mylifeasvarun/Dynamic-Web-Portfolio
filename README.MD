# Dynamic Web Portfolio

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) portfolio application with admin panel for dynamic content management. Built with React.js for the frontend, Node.js/Express.js for the backend, and MongoDB for the database.

## 🌟 Features

- **Dynamic Content Management**: Admin panel to manage all portfolio content
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Secure Authentication**: Admin login system
- **Sections Include**:
  - Introduction
  - About
  - Experience
  - Education
  - Projects
  - Contact
- **Real-time Updates**: Changes reflect immediately without page reload
- **Smooth Animations**: Polished user experience
- **Secure API**: Backend API with proper error handling

## 🛠️ Tech Stack

### Frontend

- React.js
- Redux Toolkit (State Management)
- Ant Design (UI Components)
- Tailwind CSS (Styling)
- Axios (HTTP Client)

### Backend

- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)

### Deployment

- Vercel (Hosting)
- MongoDB Atlas (Database Hosting)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB
- Git

### Local Development Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/dynamic-web-portfolio.git
cd dynamic-web-portfolio
```

2. **Install dependencies**

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. **Environment Variables**

Create .env files in both server and client directories:

Server (.env):

```env
MONGO_URL=your_mongodb_connection_string
NODE_ENV=development
```

4. **Start Development Servers**

```bash
# Run both frontend and backend (from root directory)
npm run dev

# Or run them separately:
# Terminal 1 - Backend
npm run dev:server

# Terminal 2 - Frontend
npm run dev:client
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:5001

## 📝 Project Structure

```
/
├── api/                    # Serverless API functions for production
│   └── index.js
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux state management
│   │   └── axiosConfig.js # Axios configuration
│   └── package.json
├── server/                # Backend Node.js/Express application
│   ├── config/           # Configuration files
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── server.js         # Server entry point
├── vercel.json           # Vercel deployment configuration
└── package.json          # Root package.json
```

## 🌐 Deployment

### Deploying to Vercel

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. **Connect to Vercel**

- Create a Vercel account
- Import your GitHub repository
- Configure environment variables:
  - MONGO_URL
  - NODE_ENV=production

3. **Deploy**

- Vercel will automatically deploy your application
- Any future pushes to main branch will trigger automatic deployments

### Custom Domain Setup

1. **Add Domain in Vercel**

- Go to Project Settings → Domains
- Add your domain
- Follow Vercel's nameserver or DNS configuration instructions

2. **Update DNS Records**

- Use Vercel's nameservers
  ```
  ns1.vercel-dns.com
  ns2.vercel-dns.com
  ```

## 👨‍💻 Development Workflow

1. **Create Feature Branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make Changes**

- Make your code changes
- Test locally using `npm run dev`

3. **Commit Changes**

```bash
git add .
git commit -m "Description of changes"
```

4. **Push to GitHub**

```bash
git push origin feature/your-feature-name
```

5. **Deploy**

- Merge to main branch
- Vercel will automatically deploy changes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Sai Varun Reddy Gangasani

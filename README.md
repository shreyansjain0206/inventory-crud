# inventory-crud

This is a simple full-stack CRUD application built with **Node.js (Express)** for the backend and **vanilla HTML/JavaScript** for the frontend. It demonstrates **CORS handling**, **sequential IDs**, and basic CRUD operations using an in-memory data store.

## 🔧 Features

- ✅ Create, Read, Update, and Delete items
- 🌐 CORS enabled (frontend can run on `localhost:5500`, backend on `localhost:5000`)
- 🆔 Sequential ID generation (no duplicates, no Date.now)
- 💡 Minimal and easy-to-understand frontend using HTML + JavaScript
- 🧪 Great for learning/testing Express APIs

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cors-crud-demo.git
cd cors-crud-demo
npm install
node server.js

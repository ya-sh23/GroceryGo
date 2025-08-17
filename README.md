# GroceryGo 🛒

**GroceryGo** is a full-stack grocery e-commerce platform built with the **MERN stack**.  
It provides a smooth shopping experience for users and a powerful dashboard for sellers.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite, React Router, Context API, TailwindCSS, react-hot-toast)  
- **Backend:** Node.js, Express, JWT Authentication  
- **Database:** MongoDB + Mongoose  
- **Integrations:** Cloudinary (image upload), Stripe (payments), Multer (file handling)  
- **Deployment:** Vercel (frontend & backend)

---

## ✨ Features

### 🛍️ User Side
- Register/Login with secure JWT authentication  
- Browse/search products by category or details  
- Add/remove items from cart with live updates  
- Save addresses and place orders  
- Checkout with **Cash on Delivery** or **Stripe online payments**  
- Track orders in "My Orders"  

### 🛒 Seller Dashboard
- Secure seller login (protected routes)  
- Add new products with image uploads (Cloudinary)  
- Manage stock (toggle availability)  
- View and manage orders  

---

## ⚙️ Backend API
- **Users:** Register, login, logout, authentication check  
- **Sellers:** Secure login, add products, manage stock & orders  
- **Products:** Create, list, view by ID  
- **Cart & Orders:** Sync cart with DB, create/retrieve orders  
- **Payments:** Stripe checkout sessions + webhooks  

---

## 🔐 Key Practices
- JWT stored in **HTTP-only cookies** for secure sessions  
- Middleware for protecting user/seller routes  
- Real-time cart sync across devices  
- Secure handling of env variables (DB, Stripe keys, JWT secrets)  

---

## 📦 Deployment
- **Frontend & Backend** hosted on **Vercel**  
- Environment-specific configs with CORS & HTTPS enabled  

---

## ✅ End Result
- Responsive and user-friendly grocery shopping site  
- Secure authentication for users & sellers  
- Full shopping cart + order lifecycle with payments  
- Seller dashboard for complete product & sales management  
- Scalable, production-ready MERN application  

---

## 🛠️ Setup (Quick Start)

```bash
# Clone repo
git clone https://github.com/ya-sh23/GroceryGo
cd GroceryGo

# Install frontend
cd client
npm install
npm run dev

# Install backend
cd ../server
npm install
npm start


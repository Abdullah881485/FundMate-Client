# FundMate – Client Side

🌐 **Live Site:** https://fund-mate.netlify.app

## 📌 Project Overview

FundMate is a modern loan management web application built with **React**. The client side focuses on a smooth user experience, secure authentication, and responsive UI with light/dark theme support.

Users can:

- Browse available loans
- Apply for loans
- Track their loan applications
- Pay application fees securely
- View payment and application details

---

## 🛠 Tech Stack

- **React 18**
- **React Router DOM** – Routing & private routes
- **TanStack React Query** – Data fetching & caching
- **Axios** – API requests
- **Firebase Authentication** – User authentication
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – UI components & theming
- **Framer Motion** – Animations
- **SweetAlert2** – Alerts & confirmations
- **Stripe Checkout** – Payment handling

---

## 🎨 UI & Styling

- Fully responsive (mobile, tablet, desktop)
- Light / Dark mode using **DaisyUI themes**
- CSS variables for brand colors
- Glassmorphism effects
- Smooth scrolling & animations

---

## 🔐 Authentication & Security

- Firebase Authentication (Email / Google)
- JWT token sent via **Authorization header**
- Secure API calls using a custom `useAxiosSecure` hook
- Private routes protected based on auth state

---

## 📂 Folder Structure

```
src/
│── components/
│── pages/
│── layouts/
│── hooks/
│   └── useAxiosSecure.jsx
│── provider/
│   └── AuthContext.jsx
│── routes/
│── assets/
│── index.css
│── main.jsx
```

---

## 🌐 Environment Variables

Create a `.env` file in the root:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_SERVER_URL=https://fundmate-server.vercel.app
```

---

## ▶️ Installation & Run

```bash
npm install
npm run dev
```

---

## 🔁 API Integration

- Axios base URL configured
- Authorization token added using interceptor
- React Query used for:

  - Automatic refetch
  - Loading & error handling
  - Cache management

---

## 💳 Payment Flow (Stripe)

1. User clicks **Pay Fee**
2. Redirects to Stripe Checkout
3. On success → redirected back to dashboard
4. Payment data stored & status updated

---

## 🚀 Key Features

- Secure login & logout
- Loan application management
- Real-time status updates
- Payment verification
- Animated UI interactions
- Dark mode support

---

## 📜 License

This project is for **educational and academic purposes**.

---

### 👤 Author

**Abdullah Al Asad**

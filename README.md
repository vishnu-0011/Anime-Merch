
# 🛒 **AnimeMerch - Full Stack Anime Merchandise Store**

### **Overview**
AnimeMerch is a full-stack web application that allows users to explore and purchase anime-themed merchandise such as T-shirts, hoodies, accessories, and collectibles. The platform provides a seamless shopping experience with modern features like user authentication, cart management, profile updates, and password reset functionality.

Whether you're a Naruto fan or a One Piece enthusiast, this project combines performance and aesthetics for both casual users and anime lovers alike.

---


### 🔗 Live Demo

**Frontend**: [https://anime-merch-fe.onrender.com](https://anime-merch-fe.onrender.com)  
**Backend API**: [https://anime-merch.onrender.com](https://anime-merch.onrender.com)

🧪 Demo Credentials:
- **Email**: demo@anime.com
- **Password**: demo123

---


### **Introduction**
AnimeMerch is developed using the MERN stack and demonstrates practical skills in building scalable, user-friendly e-commerce applications. The project features secure backend integration, Redux-powered cart state management, and responsive UI design using Bootstrap. It is a well-rounded demonstration of full-stack web development tailored for anime product merchandising.

---

### **Problem Statement**
Anime fans often lack a unified platform for buying high-quality anime merchandise. This project aims to bridge that gap by providing a modern, responsive, and secure e-commerce platform that includes features expected in a professional retail site: login, registration, cart updates, profile management, and dynamic routing.

---

### **Proposed Solution & Functionalities**
The AnimeMerch solution includes the following key functionalities:

- **User Authentication**: Register, login, and reset password securely.
- **Product Display**: Scrollable product sections categorized by merchandise type.
- **Cart Management**: Add, update quantity, and remove items using Redux state.
- **Profile Management**: View and edit profile details like name, email, address, and phone.
- **Logout Control**: Conditional navbar and session management using `localStorage`.
- **Responsive Design**: Bootstrap-integrated for mobile and desktop devices.

---

### **Tech Stack**

| Layer        | Technology |
|--------------|------------|
| **Frontend** | React.js, Redux Toolkit, React Router, Bootstrap 5 |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Security** | bcrypt for password hashing |
| **Tools**    | Postman (API testing), localStorage (state persistence) |

---

### **Architecture Workflow**

1. Users register and log in via the frontend forms.
2. Backend securely stores hashed passwords and authenticates users.
3. Redux manages cart actions and keeps the state synced.
4. MongoDB stores user information and cart-related data.
5. Conditional rendering and localStorage ensure the correct session and navigation flow.

---

### **Core Backend Routes**

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| `POST`| `/upload`           | Registers a new user         |
| `POST`| `/login`            | Logs in an existing user     |
| `PUT` | `/reset-password`   | Allows password change       |
| `GET` | `/`                 | Health check for server      |

All routes use proper validation and error handling for a secure experience.

---


### **Screenshots (Optional)**


- 🖼️ Product Carousel and Cards  
- 🔐 Login and Registration Forms
- 🛒 Cart View with Quantity Controls
- 👤 Profile Update Page 

---

### **Installation & Usage**
Follow these steps to set up and run the project locally.


#### **🛠️ Backend Setup**
Navigate to the project directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
node index.js
```
#### **🎨 Frontend Setup**
Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```
Install frontend dependencies:

```bash
npm install
```
Start the React development server:

```bash
npm start
```
Once everything is running:

Visit http://localhost:3000 in your browser

- Register or log in as a user

- Browse products and manage your cart

- Edit your profile

- Reset password if needed

---
### **Future Enhancements**

💳 Payment Gateway Integration (Stripe/Razorpay)

🔍 Product Search and Filters

🛠️ Admin Dashboard for Inventory Management

📦 Order History & Tracking

❤️ Wishlist/Favorites Feature

---
### **License**

This project is open-source and available under the MIT License.








# 🛒 **AnimeMerch - Full Stack Anime Merchandise Store**

### **Overview**
AnimeMerch is a full-stack web application that allows users to explore and purchase anime-themed merchandise such as T-shirts, hoodies, accessories, and collectibles. The platform provides a seamless shopping experience with modern features like user authentication, cart management, profile updates, and password reset functionality.

Whether you're a Naruto fan or a One Piece enthusiast, this project combines performance and aesthetics for both casual users and anime lovers alike.

---


### 🔗 Live Demo

**Frontend**: [https://anime-merch-fe.onrender.com](https://anime-merch-fe.onrender.com)  
**Backend API**: [https://anime-merch.onrender.com](https://anime-merch.onrender.com)

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


### **Screenshots**


- 🖼️ Product Carousel and Cards
  <img width="1920" height="936" alt="image" src="https://github.com/user-attachments/assets/f6dd2cd5-c389-499d-b99b-e2312dd96995" />
  <img width="1920" height="929" alt="image" src="https://github.com/user-attachments/assets/ebb4ec1a-fe85-47b9-9149-bb2491afa4c4" />


   
- 🔐 Login and Registration Forms
  <img width="1920" height="936" alt="image" src="https://github.com/user-attachments/assets/2856a6d2-6e35-43b3-b9d2-3a5624b99311" />
  <img width="1920" height="922" alt="image" src="https://github.com/user-attachments/assets/f45b4a62-bdcb-4749-979a-4872555dd789" />


  
- 🛒 Cart View with Quantity Controls
  <img width="1920" height="930" alt="image" src="https://github.com/user-attachments/assets/a195f0a2-282c-4edf-95c3-984d9f08767e" />

  

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







# Rent Space
go to [Main project repo](https://github.com/Ali-Hassan-2000/Rent-space)

# Rent Space – Front-End (React)
The **Rent Space Back-End** is a secure RESTful API that provides all server-side logic for the Rent Space platform. It manages user authentication, space listings, bookings, image uploads, and communication with the MongoDB database and Cloudinary.


## 🚀 Features

- REST API for all platform operations  
- CRUD for spaces  
- Secure booking system  
- Cloudinary image upload  
- MongoDB Atlas cloud database  
- Authentication using JWT  
- Input validation and error handling  
- City-based filtering  


## 🛠 Technologies Used

- **Node.js** – JavaScript runtime used to build the backend server  
- **Express.js** – Lightweight web framework for building RESTful APIs  
- **MongoDB Atlas** – Cloud database for storing users, spaces, and bookings  
- **Mongoose** – ODM for modeling MongoDB data and handling schema validation  
- **Cloudinary** – Cloud-based media storage for handling image uploads  
- **JSON Web Tokens (JWT)** – Secure authentication and authorization  
- **bcryptjs** – Password hashing for secure user credential storage  
- **dotenv** – Environment variable management  
- **Cors** – Handling cross-origin requests between frontend & backend  
- **Nodemon** (dev) – Auto-restarting server during development  


## 🔧 Core Functions Overview

### 🔹 `getAllSpaces()`
Retrieves all available spaces from the database and returns them to the client.

### 🔹 `getSpaceById(id)`
Fetches a single space by its unique ID, including details like images, owner info, and pricing.

### 🔹 `createSpace(data, images)`
Creates a new space listing.  
- Validates input  
- Uploads images to Cloudinary  
- Saves the space to MongoDB  

### 🔹 `updateSpace(id, updatedData, newImages)`
Updates an existing space’s information and replaces or adds new images if provided.

### 🔹 `deleteSpace(id)`
Deletes a space by ID and removes associated images from Cloudinary.

### 🔹 `getCities()`
Retrieves all cities available in the database for filtering and navigation.

### 🔹 `createBooking(bookingData)`
Handles booking creation, validates availability, and stores the booking in MongoDB.

### 🔹 `getUserBookings(userId)`
Returns all bookings made by a specific user.

### 🔹 `getOwnerSpaces(ownerId)`
Returns all spaces created by a specific owner.

### 🔹 `registerUser(data)`
Creates a new user account with hashed password using bcrypt.

### 🔹 `loginUser(credentials)`
Authenticates users using JWT and returns an access token.

### 🔹 `authMiddleware()`
Protects private routes by validating JWT tokens.

### 🔹 `errorHandler(err)`
Centralized error-handling middleware to catch server errors and send clean responses.



## 🔮 Planned Future Enhancements

### 1. Advanced Booking System
- Implement conflict detection to prevent overlapping bookings.
- Add booking modification and cancellation rules.
- Introduce dynamic pricing based on demand or season.

### 2. Payment Integration
- Integrate secure online payments (Stripe, PayPal, or Tap).  
- Generate invoices/receipts for completed bookings.

### 3. Admin Dashboard (Backend Tools)
- Add admin roles for monitoring users, spaces, and bookings.
- Tools for handling reports, violations, and platform analytics.

### 4. Review & Rating System
- Implement user reviews and star ratings for spaces.
- Add moderation tools for reporting inappropriate content.

### 5. Email & Notification System
- Booking confirmation emails.
- Password reset flow.
- Real-time notifications for owners and customers.

### 6. Enhanced Image Handling
- Add automatic image optimization.
- Add batch deletion and versioning of uploaded images.

### 7. Search & Filtering Upgrades
- Add backend-level filtering for price range, availability, amenities, etc.
- Implement full-text search indexing (e.g., MongoDB Atlas Search).

### 8. Security Improvements
- Add refresh tokens for long-term authentication.
- Improve rate limiting and brute-force protection.

### 9. Logging & Monitoring
- Add error tracking with tools like Sentry.
- Add request performance monitoring and database profiling.

### 10. API Documentation
- Create full API documentation using Swagger or Postman Collections.
- Add automated API tests.

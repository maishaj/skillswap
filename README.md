# Skill Exchange Platform

A web application that allows users to explore and book skills offered by various providers. Users can sign up, log in (including via Google), view skill details, and book sessions. This project demonstrates authentication, route protection, interactive UI, and real-time feedback using React, Firebase, and modern frontend libraries.

## Live Demo
https://dragon-news-project-ea068.web.app

## Project Purpose
The purpose of this project is to provide a platform for users to browse skills, interact with providers, and book sessions. It focuses on:

- Authentication & Authorization (Firebase)
- Protected routes and user-specific content
- Interactive UI with sliders, animations, and toasts
- JSON-based skill listings

## Features

### Layout Structure
- **Navbar**
  - Logo, Home, My Profile
  - Login & Signup buttons when logged out
  - Logout button when logged in
  - User avatar shows display name on hover
- **Footer**
  - Contact information
  - Social links
  - Privacy policy
- **Persistent Navbar/Footer** across all pages

### Home Page
- **Hero Slider** using Swiper.js
- **Popular Skills Section**
  - Skill cards with image, name, rating, price, and “View Details” button
- **Top Rated Providers Section**
- **How It Works Section**
- **Extra Section** (custom section relevant to skill exchange)

### Skill Details Page (Protected)
- Displays all information from JSON data
- "Book Session" form with Name, Email, Submit button
- Form submission shows success toast and clears inputs
- Only accessible when logged in; redirects to login if not authenticated

### Authentication
- **Login Page**
  - Email & Password login
  - Google Login button
  - Forgot Password link
  - Error toast messages for failed login
- **Signup Page**
  - Name, Email, Photo URL, Password
  - Password validation:
    - Must include at least one uppercase & lowercase letters
    - Minimum 6 characters
  - Google Signup
  - Error toasts for invalid inputs

### My Profile Page
- Shows user info (Name, Email, Image)
- Update Profile button to edit Name & Image
- Form uses `updateProfile()` method for Firebase users

### Additional Functionalities
- Password toggle (eye icon) on login & signup
- Forgot password functionality with pre-filled email
- Form validations and success/error feedback via react-hot-toast
- Animated components using Animate.css
- Smooth scroll and UI animations with AOS (or similar library)


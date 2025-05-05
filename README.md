# FindMyProvider

FindMyProvider is a mobile app built with React Native (Expo). It allows users to search for healthcare providers based on specialty, ZIP code, credential and location using real CMS NPI Registry API data.

---

## 📱 Features

- Clean UI with Sign In / Sign Up screens
- Search by Name or Specialty
- ZIP Code filtering (5-digit)
- Filters by:
  - Gender (Male / Female)
  - Specialty (taxonomy dropdown)
  - Entity Type (Individual / Organization)
  - Number of Results (limit selector)
- Results list with provider name, specialty, and city/state
- Detailed provider view with credential, NPI number, address, phone, status
- Input validation and error handling
- “No results found” fallback screen
- About screen with app + developer info

---

## 📸 Screenshots

| Sign In | Sign Up | Search |
|---------|---------|--------|
| ![SignIn](screenshots/signin.png) | ![SignUp](screenshots/signup.png) | ![Search](screenshots/search.png) |

| Results | Details | Profile | About |
|---------|---------|---------|--------|
| ![Results](screenshots/results.png) | ![Details](screenshots/details.png) | ![Profile](screenshots/profile.png) | ![About](screenshots/about.png) |

---

## 🧰 Tech Stack

- **React Native (Expo SDK 53)**
- **React Navigation** (stack + bottom tabs)
- **CMS NPI Registry API** – for healthcare provider data (https://npiregistry.cms.hhs.gov/api-page)
- State management with React Hooks

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/LakshayMunjal-dev/FindMyProvider.git
cd FindMyProvider
```

2. Install dependencies:
```bash
npm install
```

3. Start the app:
```bash
npm start
```

4. Scan QR in **Expo Go** or run in simulator.

---

## 📦 API Source

This app uses the [CMS NPI Registry API](https://npiregistry.cms.hhs.gov/api-page) to fetch live provider data in the United States.

---

## 👤 Developed By

**Lakshay Munjal**  
[Email: lm485@njit.edu](mailto:lm485@njit.edu)

Capstone Project – Spring 2025  
New Jersey Institute of Technology
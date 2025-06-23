# StreamNotify

A modern, modular React-based notification platform UI that demonstrates real-time and batched notifications, advanced filtering, and clean component design.

## Features

- **Real-time & Batched Notifications:**
  - Loads initial notifications from a local JSON file (mocked API).
  - Simulates real-time notifications using polling (`setInterval`), adding new notifications every 10 seconds.
- **Notification Types:**
  - **Task**: Task assignments.
  - **Mention**: User mentions.
  - **Team Invite**: Team invitations.
- **Filtering:**
  - **Category Filter:**
    - Custom dropdown to filter by Task, Mention, Team Invite, or All Types.
  - **Read/Unread Filter:**
    - Toggle between All, Unread, and Read notifications.
  - **Search:**
    - (Optional) Search bar to filter notifications by keyword (can be enabled/disabled as needed).
- **UI/UX:**
  - Clean, responsive design with badges, timestamps, and colored category borders.
  - Unread notifications are visually indicated with a blue dot and bold styling.
  - Toast notifications (with colored badges) for real-time updates.
  - Hover and focus effects for better user experience.
- **Component Structure:**
  - **Feature-based modular design**:
    - `components/` (Sidebar, NotificationCard, CustomDropdown, etc.)
    - `pages/` (Dashboard)
    - `data/` (notifications.json)
    - `utils/` (formatDate.js)
- **No page scrolling:**
  - The app is designed to fit the viewport with internal scrolling for notification lists only.

## State Management

- Uses **React's built-in state management** (`useState`, `useEffect`).
- State is "lifted up" to the closest common parent when needed (e.g., filter state in Dashboard).
- No external state libraries are required for this scale of app.
- Real-time updates and filter changes are handled via local state, ensuring fast and predictable UI updates.

## Component Design

- **Sidebar:**
  - Single "Notifications" tab for simplicity.
- **Dashboard:**
  - Houses all filter controls (category dropdown, read/unread buttons, search bar).
  - Renders the notification list and manages all state.
- **NotificationCard:**
  - Displays badge, message, timestamp, unread dot, and "Mark as read" button.
- **CustomDropdown:**
  - Fully custom dropdown for category filtering with light blue hover effect.

## Polling Simulation

- Uses `setInterval` in a `useEffect` to simulate polling for new notifications.
- Each new notification triggers a toast popup and is added to the top of the list as unread.

## Screenshots

### Main Dashboard
![StreamNotify Dashboard](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/StreamNotify.png?raw=true)

### Filter Views
![Read Filter](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/Read%20filter.png?raw=true)
![Unread Filter](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/Unread%20filter.png?raw=true)
![Task Filter](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/Task%20filter.png?raw=true)
![Team Invite Read Filter](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/Team%20invite%20read%20filter.png?raw=true)
![Mentioned Unread Filter](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/Mentioned%20unread%20%20filter.png?raw=true)

### Real-time Notifications
![Toast Notification](https://github.com/Mrunalgaikwad002/StreamNotify/blob/main/Toastify%20notification.png?raw=true)

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

---

**This project is a showcase of modern React UI patterns, state management, and user experience best practices for notification systems.** 

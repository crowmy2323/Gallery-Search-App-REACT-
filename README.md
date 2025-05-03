# 📊 React Scroll Indicator Component

This project includes a simple and elegant **Scroll Progress Indicator** built with React. It shows a thin progress bar at the top of the page that visually indicates how much the user has scrolled through the content.

## 🚀 Features

- ✅ Built with **React Functional Components** and **Hooks**
- ✅ Real-time scroll tracking using `useEffect` and `window.scroll`
- ✅ Minimal and responsive design
- ✅ Easy customization (colors, height, position, etc.)
- ✅ Sticky positioning for persistent visibility

## 🧠 How It Works

The component listens for the `scroll` event and calculates how far down the user has scrolled as a percentage of the total scrollable height. The calculated percentage is then used to set the width of a top-fixed progress bar.

```javascript
const winscroll = document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = (winscroll / height) * 100;
 
 🛠 Usage
Clone or copy the ScrollIndicator.jsx file into your project.

Import and use <ScrollIndicator /> inside your main layout or App.js.

Style it as you like using the provided CSS or your own.

📁 Files Included
ScrollIndicator.jsx – Main React component

CSS styles – Built-in visual styles for progress bar


# Image Slider & Fruit Showcase App

A dynamic React web application featuring an interactive image slider component, fruit showcase modules, and statistic display boxes styled with dedicated modular CSS stylesheets.

---

## 📂 Repository Structure

```text
imageslider/
│
├── public/
│   ├── Images/             # Static image assets (apple, banana, mango, orange, pineapple, woodapple, and gallery slides img1-img5)
│   ├── favicon.ico         # Application browser tab icon
│   ├── index.html          # HTML document template
│   ├── logo192.png         # 192x192 app icon asset
│   ├── logo512.png         # 512x512 app icon asset
│   ├── manifest.json       # PWA web app manifest metadata
│   └── robots.txt          # Search engine crawler directives
│
├── src/
│   ├── CSS/
│   │   ├── FruitShowCase.css   # Styling for fruit showcase components
│   │   ├── ImageSlider.css     # Styling for slider controls and transitions
│   │   └── StatsBoxes.css      # Styling for statistical display containers
│   │
│   ├── Components/
│   │   ├── FruitShowCase.js    # Fruit display and grid/list component
│   │   ├── ImageSlider.js      # Core interactive image slider component
│   │   └── StatBox.js          # Individual statistic card component
│   │
│   ├── App.css             # Global component style rules
│   ├── App.js              # Main root component assembling views
│   ├── App.test.js         # Unit test suite for App component
│   ├── index.css           # Base CSS styles and resets
│   ├── index.js            # React application entry point mounting
│   ├── reportWebVitals.js  # Performance analytics reporting utility
│   └── setupTests.js       # Testing library setup configuration
│
├── package.json            # Node.js dependencies and scripts
└── package-lock.json       # Locked dependency versions
```

## 🚀 Key Features & Components
1. Interactive Image Slider (ImageSlider.js): Cycles through a rich collection of visual assets with dedicated slider formatting (ImageSlider.css).
2. Fruit Showcase (FruitShowCase.js): Displays a variety of fruit items leveraging high-quality local image assets (apple.jpg, banana.jpg, mango.jpg, orange.jpg, pineapple.jpg, woodapple.jpg).
3. Statistic Boxes (StatBox.js): Clean summary cards designed to highlight metrics or data attributes (StatsBoxes.css).
4. Modular Styling: Separated CSS stylesheets for each major component to maintain clean, organized, and scalable styles.

## 💻 Getting Started & Installation
Ensure you have Node.js and npm (or yarn) installed on your machine.

🖥️ Installation & Execution (Windows & Linux)
Clone the repository:

```Bash
git clone [https://github.com/dragon-udfly/imageslider.git](https://github.com/dragon-udfly/imageslider.git)
```
Navigate into the project directory:

```Bash
cd imageslider
```
Install dependencies:

```Bash
npm install
```
Run the development server:

```Bash
npm start
```

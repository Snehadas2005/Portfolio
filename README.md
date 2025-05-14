# Sneha Das Portfolio

A modern, interactive portfolio website showcasing Sneha Das's web development skills, experience, and projects.

## 🌟 Features

* **Interactive 3D Elements** - Engaging Three.js models throughout the site
* **Smooth Animations** - Powered by GSAP for seamless scrolling experiences
* **Responsive Design** - Fully responsive across all device sizes
* **Modern UI/UX** - Clean, professional interface with subtle animations
* **Contact Form** - Functional contact form using EmailJS
* **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

* **Frontend Framework**: React.js
* **Styling**: TailwindCSS with custom utility classes
* **3D Rendering**: Three.js with React Three Fiber & Drei
* **Animations**: GSAP with ScrollTrigger
* **Form Handling**: EmailJS
* **Deployment**: [Deployment platform]

## 📋 Project Structure

```
📦 sneha-das-portfolio/
 ┣ 📂 public/
 ┃ ┣ 📂 images/
 ┃ ┣ 📂 models/      # 3D models (.glb files)
 ┃ ┗ 📄 index.html
 ┣ 📂 src/
 ┃ ┣ 📂 components/  # Reusable UI components
 ┃ ┣ 📂 sections/    # Main page sections
 ┃ ┣ 📂 constants/   # Project data & configuration
 ┃ ┣ 📄 App.jsx      # Main application component
 ┃ ┣ 📄 main.jsx     # Entry point
 ┃ ┗ 📄 index.css    # Global styles & Tailwind config
 ┣ 📄 package.json
 ┗ 📄 README.md
```

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+ recommended)
* npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/[username]/sneha-das-portfolio.git
cd sneha-das-portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables
   
   Create a `.env` file in the root directory with the following variables:

```
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📱 Pages & Sections

1. **Hero Section** - Introduction with animated text slider and 3D room scene
2. **Work Showcase** - Portfolio projects with descriptions
3. **Features** - Highlighting key abilities and skills
4. **Experience Timeline** - Professional journey with animated timeline
5. **Tech Stack** - Technologies and tools with interactive 3D icons
6. **Achievements** - Recognitions and awards
7. **Contact Form** - Get in touch section with 3D elements
8. **Footer** - Social links and copyright information

## 🔧 Customization

### Updating Content

Most of the website content can be modified by editing the `constants/index.js` file, which contains:
* Navigation links
* Hero section text animation words
* Counter statistics
* Feature cards content
* Tech stack information
* Experience timeline
* Achievements data
* Social media links

### Styling

The project uses TailwindCSS with custom utility classes. The main styles are defined in `index.css`.

### 3D Models

The 3D models are stored in the `public/models/` directory. To replace or update models:

1. Export your 3D model in `.glb` format
2. Place it in the models directory
3. Update the corresponding component in the `components/models/` directory

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is MIT licensed.

## 🙏 Acknowledgements

* React Three Fiber
* GSAP
* TailwindCSS
* EmailJS
* 3D models creators
* Icons and assets providers

---

Designed & Developed by Sneha Das © 2025

# Personal Portfolio Website — Sadun Deshapriya

> **Auspify Technologies — Full Stack Development Internship Program**  
> **Task 1 (Easy): Personal Portfolio Website**

A modern, responsive, high-performance personal portfolio website built with semantic **HTML5**, clean **Vanilla CSS3**, and modular **ES6 JavaScript**. This platform highlights professional experience, technical competencies, engineering projects, academic credentials, and interactive contact channels.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/sandun_deshapriya/portfolio-website](https://github.com/sandun_deshapriya/portfolio-website)
- **Local Dev Server**: `http://localhost:8000`

---

## 🎯 Task 1 Requirements & Workflow Fulfillment

| Task Workflow Step | Implementation in this Project |
| :--- | :--- |
| **Step 1: Design the website layout** | Engineered an aesthetic UI featuring dark/light mode toggle, glassmorphism cards, glowing accent gradients, and typography tailored with *Plus Jakarta Sans* & *JetBrains Mono*. |
| **Step 2: Create Home, About, Projects, and Contact sections** | Developed full dedicated sections for **Home (Hero)**, **About Me**, **Technical Skills**, **Projects Showcase**, **Professional Experience & References**, and **Contact**. |
| **Step 3: Implement responsive design** | Fully responsive grid and flexbox layout optimized across mobile (< 640px), tablet (641px – 1024px), and desktop (> 1024px) viewports with collapsible hamburger menu navigation. |
| **Step 4: Add project showcase section** | Dynamic project gallery with category filters (*All*, *Full-Stack*, *Microservices & APIs*, *Mobile*), tech stack tags, repository links, and interactive modal dialogs detailing architecture and features. |
| **Step 5: Deploy the website** | Ready for 1-click deployment on **GitHub Pages**, **Vercel**, or **Netlify** with zero build pipeline overhead. |

---

## 🌟 Key Features

1. **Dynamic Hero Section**:
   - Live typewriter effect cycling through professional titles (*Software Engineering Student*, *Full-Stack Developer*, *Fiverr Freelancer & Tech Creator*).
   - Real-time availability indicator badge.
   - Quick-action CTA buttons to view projects, contact, or review the CV.
   - Custom avatar with floating badge micro-interactions.

2. **About & Academic Profile**:
   - Summary based on SLIIT Software Engineering undergraduate degree (CGPA: 2.73/4.00).
   - Animated statistics counters (5+ Projects, 15+ Tech stacks, 2+ Years experience).
   - Academic details & specialization overview.

3. **Categorized Skills Matrix**:
   - **Programming & Scripting**: JavaScript, Java, TypeScript, PHP, SQL, HTML5, CSS3, XML.
   - **Frameworks & Libraries**: React.js, Next.js, Spring Boot, Express.js, Node.js, Tailwind CSS, Bootstrap.
   - **Databases, Cloud & DevOps**: MongoDB, MySQL, Docker, Kubernetes, CI/CD, Apache Kafka, Nginx.
   - **Tools & Architecture**: Git/GitHub, VS Code, IntelliJ IDEA, Android Studio, Figma, Jira, JWT Auth, Stripe.

4. **Interactive Project Showcase**:
   - **Janaya360 Political Promises Tracker (JusticeLink)**: Full-stack civic transparency platform (React, Node.js, Express, MongoDB, JWT, Vercel & Render).
   - **Smart Health Care System**: Microservices architecture with Spring Boot, Docker, Nginx, MongoDB, and Stripe integration.
   - **Wellness Mobile Application**: Native Android application in Kotlin with Spring Boot REST APIs and Kafka streaming.
   - **Habit Tracker Mobile App**: Peer-learning mobile app with Google Gemini AI translation integration.
   - **Pet Care Management System**: Full-stack CRUD web platform with PHP and MySQL.

5. **Integrated CV / Resume Viewer Modal**:
   - In-app printable and downloadable CV preview containing full contact, education, project descriptions, skills, and academic references.

6. **Interactive Contact Form**:
   - Live client-side input validation (email format, required fields).
   - LocalStorage submission history and dynamic feedback alerts.
   - Direct mailto link fallback.

7. **Theme Switcher**:
   - Dark mode (cyber-navy) & light mode (clean slate) toggle with `localStorage` persistence.

---

## 🛠️ Project Structure

```plaintext
portfolio-website/
├── index.html                 # Semantic HTML5 entry page
├── css/
│   └── style.css              # Custom Vanilla CSS design system & responsive rules
├── js/
│   └── main.js                # Typewriter, theme toggle, filters, modals & form logic
├── assets/
│   └── images/
│       ├── profile.jpg        # Developer portrait illustration
│       ├── project-janaya360.jpg
│       ├── project-healthcare.jpg
│       └── project-wellness.jpg
└── README.md                  # Project documentation & task submission guide
```

---

## 💻 How to Run Locally

### Option 1: Python Built-in Server (Recommended)
```bash
# Navigate to the project root
cd portfolio-website

# Run Python 3 server on port 8000
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 2: Node.js `npx serve`
```bash
npx -y serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` inside VS Code and click **"Open with Live Server"**.

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages (Free)
1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete Auspify Task 1 personal portfolio website"
   git push origin main
   ```
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live in 1–2 minutes at `https://<your-username>.github.io/portfolio-website/`.

### Deploy to Vercel (Free)
1. Run `npx -y vercel` or connect your GitHub repository directly on [vercel.com](https://vercel.com).
2. Choose default settings (Framework preset: `Other`).
3. Click **Deploy**.

---

## 👨‍💻 Author Information
- **Name**: Sadun Deshapriya
- **Institution**: Sri Lanka Institute of Information Technology (SLIIT)
- **Email**: [sandundeshapriya206@gmail.com](mailto:sandundeshapriya206@gmail.com)
- **Phone**: +94 76 734 1594
- **LinkedIn**: [linkedin.com/in/sandun](https://linkedin.com/in/sandun)
- **GitHub**: [github.com/sandun_deshapriya](https://github.com/sandun_deshapriya)
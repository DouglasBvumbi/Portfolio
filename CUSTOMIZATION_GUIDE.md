# Portfolio Website - Complete Customization Guide

## 📋 Table of Contents
1. [Personal Information](#personal-information)
2. [Projects Management](#projects-management)
3. [Color Scheme](#color-scheme)
4. [Contact Form Setup](#contact-form-setup)
5. [Adding Content](#adding-content)
6. [Performance Optimization](#performance-optimization)
7. [Deployment](#deployment)

---

## 1. Personal Information

### Update Your Name and Title
**File**: `index.html`

Find and replace these throughout the file:
```html
<!-- Replace "Your Name" with your actual name -->
<span class="gradient-text">Your Name</span>

<!-- Update the logo -->
<span class="logo-text">&lt;YourName/&gt;</span>

<!-- Update page title -->
<title>Portfolio | Software Developer & IT Specialist</title>

<!-- Update meta description -->
<meta name="description" content="Portfolio of...">
```

### Update Contact Information
**File**: `index.html` - Contact Section

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Phone -->
<a href="tel:+1234567890">+27 (123) 456-7890</a>

<!-- Location -->
<p>Pretoria, South Africa</p>
```

### Update Social Media Links
**File**: `index.html` - Hero and Contact Sections

```html
<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" target="_blank">

<!-- Twitter -->
<a href="https://twitter.com/yourusername" target="_blank">

<!-- Email -->
<a href="mailto:your.email@example.com">
```

### Update About Section
**File**: `index.html` - About Section (around line 145)

Replace the paragraphs with your own professional summary:
```html
<p class="about-description">
    Your professional summary here...
</p>
```

---

## 2. Projects Management

### Method 1: Using JSON File (Recommended)
**File**: `js/projects.json`

This is the EASIEST way to update projects. Simply edit the JSON file:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "category": "web",
  "description": "Detailed project description",
  "image": "img/project1.jpg",
  "technologies": ["React", "Node.js", "MongoDB"],
  "liveLink": "https://your-actual-project-url.com",
  "githubLink": "https://github.com/yourusername/project-name",
  "featured": true,
  "date": "2024-11"
}
```

**Available Categories**:
- `web` - Web Applications
- `database` - Database Projects
- `design` - Design Work
- `it` - IT Solutions

**To Add a New Project**:
1. Copy an existing project object
2. Increment the `id` number
3. Update all fields
4. Add a project image to the `img/` folder

**To Update a Project Link**:
Simply change the `liveLink` value:
```json
"liveLink": "https://my-new-live-site.com"
```

### Method 2: Update JavaScript Array
**File**: `js/main.js` (around line 135)

If you prefer, you can edit the `projectsData` array directly in the JavaScript file.

---

## 3. Color Scheme

### Customize Brand Colors
**File**: `css/main.css` (top of file)

```css
:root {
    /* Change these to match your brand */
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --primary-light: #818cf8;      /* Lighter shade */
    --secondary-color: #10b981;    /* Accent color */
    --accent-color: #f59e0b;       /* Highlight color */
    
    /* Gradients - customize as needed */
    --gradient-primary: linear-gradient(135deg, #6366f1 0%, #333132 100%);
}
```

### Quick Color Presets

**Blue Theme (Default)**:
```css
--primary-color: #6366f1;
--secondary-color: #10b981;
```

**Dark Theme**:
```css
--primary-color: #333132;
--secondary-color: #6366f1;
```

**Green Theme**:
```css
--primary-color: #10b981;
--secondary-color: #3b82f6;
```

**Orange Theme**:
```css
--primary-color: #f59e0b;
--secondary-color: #ef4444;
```

**Red Theme**:
```css
--primary-color: #ef4444;
--secondary-color: #f59e0b;
```

---

## 4. Contact Form Setup

The contact form needs a backend service to send emails. Here are your options:

### Option 1: EmailJS (No Backend Required) ⭐ RECOMMENDED

1. **Sign up**: Go to [EmailJS.com](https://www.emailjs.com/)
2. **Create Email Service**: Connect your email (Gmail, Outlook, etc.)
3. **Create Email Template**: Design your email template
4. **Get Credentials**: Note your Service ID and Template ID

5. **Update JavaScript** (`js/main.js` around line 560):

```javascript
// Add EmailJS library to index.html before closing </body>:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// In the form submission function, replace the simulated code with:
try {
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
    showFormStatus('Thank you! Your message has been sent.', true);
    contactForm.reset();
} catch (error) {
    showFormStatus('Failed to send message. Please try again.', false);
}
```

### Option 2: Formspree (Simple Integration)

1. **Sign up**: Go to [Formspree.io](https://formspree.io/)
2. **Create a form**: Get your form endpoint
3. **Update HTML** (`index.html`):

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Netlify Forms (If deploying to Netlify)

Simply add `netlify` attribute to form:
```html
<form class="contact-form" id="contactForm" netlify>
```

### Option 4: Custom Backend

Create your own API endpoint using:
- Node.js + Express + Nodemailer
- PHP mail() function
- Python Flask/Django
- Any backend framework

Update the fetch URL in `js/main.js`.

---

## 5. Adding Content

### Update Work Experience
**File**: `index.html` - Experience Section (around line 430)

Add or modify timeline items:
```html
<div class="timeline-item" data-aos="fade-right">
    <div class="timeline-icon">
        <i class="fas fa-briefcase"></i>
    </div>
    <div class="timeline-content">
        <div class="timeline-date">2022 - Present</div>
        <h3 class="timeline-title">Your Job Title</h3>
        <h4 class="timeline-company">Company Name</h4>
        <p class="timeline-description">
            Job description...
        </p>
        <ul class="timeline-achievements">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
        <div class="timeline-tags">
            <span class="tag">Skill</span>
        </div>
    </div>
</div>
```

### Update Skills
**File**: `index.html` - Skills Section (around line 280)

Modify skill bars:
```html
<div class="skill-bar">
    <div class="skill-info">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-progress">
        <div class="skill-fill" data-progress="90"></div>
    </div>
</div>
```

### Update Technology Stack
**File**: `index.html` - Skills Section

Add/remove technology items:
```html
<div class="tech-item" data-aos="zoom-in">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

**Font Awesome Icon Classes**:
- HTML: `fab fa-html5`
- CSS: `fab fa-css3-alt`
- JavaScript: `fab fa-js`
- React: `fab fa-react`
- Python: `fab fa-python`
- Node.js: `fab fa-node-js`
- Database: `fas fa-database`
- More icons: [FontAwesome.com](https://fontawesome.com/icons)

---

## 6. Performance Optimization

### Optimize Images
Before adding images:
1. Resize to appropriate dimensions
2. Compress using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

### Recommended Image Sizes
- **Profile picture**: 500x500px, under 200KB
- **Project images**: 800x500px, under 300KB
- **Backgrounds**: 1920x1080px, under 500KB

### Enable Lazy Loading
Images already have `loading="lazy"` attribute for automatic lazy loading.

---

## 7. Deployment

### Quick Deploy to GitHub Pages

```bash
# 1. Initialize git (if not done)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial portfolio commit"

# 4. Create repository on GitHub (github.com/new)

# 5. Add remote and push
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main

# 6. Enable GitHub Pages
# Go to repository Settings > Pages
# Select "main" branch as source
# Save

# Your site will be live at: https://yourusername.github.io/portfolio
```

### Deploy to Netlify (Drag & Drop)

1. Go to [Netlify](https://app.netlify.com/)
2. Drag your portfolio folder into the upload area
3. Wait for deployment
4. Get your live URL (you can customize it)

### Custom Domain

**For GitHub Pages**:
1. Add a `CNAME` file with your domain
2. Update DNS records with your provider

**For Netlify**:
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS instructions

---

## 🎯 Pre-Launch Checklist

- [ ] Updated name everywhere
- [ ] Added profile picture
- [ ] Added all project images
- [ ] Updated social media links
- [ ] Updated email and phone
- [ ] Updated project links in JSON
- [ ] Customized about section
- [ ] Updated work experience
- [ ] Adjusted skills and percentages
- [ ] Set up contact form backend
- [ ] Tested on mobile devices
- [ ] Tested all links
- [ ] Tested contact form
- [ ] Optimized all images
- [ ] Updated meta tags for SEO
- [ ] Tested in different browsers
- [ ] Added Google Analytics (optional)
- [ ] Added favicon (optional)

---

## 🆘 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in the `img/` folder
- Check file names match exactly (case-sensitive)

### Contact form not working
- Set up a backend service (EmailJS, Formspree, etc.)
- Check browser console for errors
- Verify form field names match JavaScript

### Colors not changing
- Make sure you're editing the `:root` variables
- Clear browser cache
- Check for CSS specificity issues

### Animations not working
- Check that AOS library is loading
- Verify `data-aos` attributes are present
- Check browser console for errors

---

## 📞 Need More Help?

1. Check the code comments
2. Review the README.md file
3. Check browser console for errors
4. Google specific error messages
5. Review documentation for libraries used

---

**Remember**: Test everything locally before deploying! 🚀

Good luck with your portfolio! 💼✨

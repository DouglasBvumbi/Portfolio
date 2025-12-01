# 🚀 Quick Start Guide

Welcome to your new portfolio website! Follow these steps to get started:

## Step 1: Update Personal Information (5 minutes)

1. Open `index.html`
2. Search for "Your Name" and replace with your actual name
3. Update email: Search for "your.email@example.com" and replace
4. Update social links: Search for "yourusername" and replace with your handles

## Step 2: Add Your Images (10 minutes)

1. Add your profile photo as `img/profile.jpg` (500x500px recommended)
2. Add project screenshots as `img/project1.jpg`, `img/project2.jpg`, etc.
3. Delete the `img/profile.svg` placeholder file

## Step 3: Update Projects (15 minutes)

1. Open `js/projects.json`
2. Update each project's information:
   - Change `title`, `description`
   - Update `liveLink` with your actual project URLs
   - Update `technologies` array
   - Add/remove projects as needed

## Step 4: Customize About & Experience (15 minutes)

1. Open `index.html`
2. Find the "About Section" (around line 145)
   - Update the paragraphs with your professional summary
3. Find the "Experience Section" (around line 430)
   - Update job titles, companies, dates, and achievements

## Step 5: Set Up Contact Form (10 minutes)

Choose one option:

### Option A: EmailJS (Recommended - No coding required)
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Connect your email
3. Get your Service ID and Template ID
4. Follow instructions in `CUSTOMIZATION_GUIDE.md`

### Option B: Formspree (Easiest)
1. Sign up at [Formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update the form action in `index.html`

## Step 6: Test Locally (5 minutes)

1. Open `index.html` in your browser
2. Test all links
3. Test the contact form
4. Check responsiveness (resize browser window)
5. Test dark/light mode toggle

## Step 7: Deploy Online (10 minutes)

### GitHub Pages (Free):
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

### Netlify (Easiest):
1. Go to [Netlify.com](https://netlify.com)
2. Drag your portfolio folder
3. Get your live URL

## Optional Enhancements

- [ ] Change color scheme (edit `css/main.css` variables)
- [ ] Add Google Analytics
- [ ] Add a custom domain
- [ ] Create a favicon
- [ ] Add more projects
- [ ] Add blog section
- [ ] Add testimonials

## Need Help?

1. Check `CUSTOMIZATION_GUIDE.md` for detailed instructions
2. Check `README.md` for full documentation
3. Review code comments for explanations

## Checklist Before Going Live

- [ ] All personal info updated
- [ ] Profile photo added
- [ ] Project images added
- [ ] All links work
- [ ] Contact form configured
- [ ] Tested on mobile
- [ ] Tested in different browsers
- [ ] SEO meta tags updated

---

**Estimated Total Time**: 60-90 minutes

You're ready to showcase your work to the world! 🎉

---

## Quick Reference

**Main Files to Edit**:
- `index.html` - All content
- `js/projects.json` - Project data (easiest to update)
- `css/main.css` - Colors and styles

**Folders**:
- `css/` - Stylesheets
- `js/` - JavaScript files
- `img/` - Images

**Documentation**:
- `README.md` - Complete documentation
- `CUSTOMIZATION_GUIDE.md` - Detailed customization instructions
- This file (`QUICK_START.md`) - Fast setup guide

Good luck! 🚀

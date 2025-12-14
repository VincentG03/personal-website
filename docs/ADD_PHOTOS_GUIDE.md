# Quick Guide: Adding Your Photos

## 📸 Adding Your Portrait

Your website now has a beautiful circular portrait area on the home page!

### Step 1: Prepare Your Image
- **Recommended size**: 800×800 pixels (square)
- **Format**: JPG or PNG
- **File size**: Under 500KB for fast loading
- **Style**: Professional headshot or portrait

### Step 2: Add Image to Project
```bash
# Place your image in the public folder
cp /path/to/your/portrait.jpg /Users/vincentgiang/Documents/GitHub/website/public/portrait.jpg
```

### Step 3: Update HomeSection.tsx

Open `components/HomeSection.tsx` and find this section (around line 50):

**FIND THIS:**
```tsx
<div className="relative w-full h-full rounded-full border-4 border-blue-500/30 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
  {/* Replace this div with your image:
      <img src="/your-portrait.jpg" alt="Vincent Giang" className="w-full h-full object-cover" />
  */}
  <div className="text-center">
    <svg className="w-32 h-32 text-blue-400/30 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
    <p className="text-xs text-gray-500 mt-2">Add your portrait here</p>
  </div>
</div>
```

**REPLACE WITH:**
```tsx
<div className="relative w-full h-full rounded-full border-4 border-blue-500/30 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
  <img src="/portrait.jpg" alt="Vincent Giang" className="w-full h-full object-cover" />
</div>
```

### Result:
Your portrait will appear in a beautiful circular frame with a glowing border!

---

## 🏢 Adding Company Logos

Each experience card now has a dedicated logo area!

### Step 1: Prepare Your Logos
- **Recommended size**: 300×300 pixels (square)
- **Format**: PNG with transparent background (preferred) or JPG
- **File size**: Under 100KB each
- **Style**: Clean, professional company logos

### Step 2: Add Logos to Project
```bash
# Create logos directory
mkdir -p /Users/vincentgiang/Documents/GitHub/website/public/logos

# Add your logos
cp /path/to/company1-logo.png public/logos/tech-innovations.png
cp /path/to/company2-logo.png public/logos/digital-solutions.png
cp /path/to/company3-logo.png public/logos/startup-ventures.png
```

### Step 3: Update ExperienceSection.tsx

Open `components/ExperienceSection.tsx` and find the experiences array (around line 7):

**CURRENT:**
```tsx
const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    logo: '/logos/tech-innovations.png', // Add your company logo here
    description: '...',
    highlights: ['...'],
  },
  // ... more experiences
];
```

The logo paths are already set! Just make sure your logo files match these names:
- `/logos/tech-innovations.png`
- `/logos/digital-solutions.png`
- `/logos/startup-ventures.png`

### Step 4: Update Logo Display (Optional)

Find the logo section in the card (around line 68):

**FIND THIS:**
```tsx
<div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center overflow-hidden">
  {/* Replace with actual logo image:
      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
  */}
  <svg className="w-12 h-12 text-blue-400/40" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
  </svg>
</div>
```

**REPLACE WITH:**
```tsx
<div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center overflow-hidden p-3">
  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
</div>
```

Note: Use `object-contain` to keep logos properly sized and visible.

### Result:
Professional company logos will appear in each experience card!

---

## 🎨 Design Tips

### Portrait Photo Tips:
1. **Good lighting**: Natural light or professional lighting
2. **Clean background**: Solid color or slightly blurred
3. **Professional attire**: Depends on your industry
4. **Smile**: Approachable and friendly
5. **Eye contact**: Look at the camera
6. **Centered**: Face should be centered in the frame

### Logo Tips:
1. **Transparent background**: PNGs work best
2. **High contrast**: Logos should be visible on dark blue background
3. **Square aspect ratio**: Logos are displayed in squares
4. **Simple designs**: Complex logos may not scale well
5. **Official assets**: Use company's official logo files when possible

---

## 🔧 Troubleshooting

### Portrait doesn't show up:
- Check file path: Should be `/public/portrait.jpg`
- Check file name spelling
- Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check browser console for errors

### Logo doesn't show up:
- Check file path: Should be `/public/logos/company-name.png`
- Verify logo property in experiences array matches file name
- Make sure file extension matches (.png vs .jpg)
- Clear browser cache

### Image looks stretched:
- For portrait: Use `object-cover`
- For logos: Use `object-contain`
- Ensure original image is square or nearly square

### Image file too large:
- Use online tools to compress: [TinyPNG](https://tinypng.com)
- Target: Under 500KB for portrait, under 100KB for logos
- JPG for photos, PNG for logos with transparency

---

## ✅ Quick Checklist

Portrait:
- [ ] Image prepared (800×800px, under 500KB)
- [ ] File saved to `/public/portrait.jpg`
- [ ] `HomeSection.tsx` updated with img tag
- [ ] Browser refreshed to see changes

Company Logos:
- [ ] Logos prepared (300×300px, under 100KB each)
- [ ] Files saved to `/public/logos/` folder
- [ ] Filenames match logo paths in experiences array
- [ ] `ExperienceSection.tsx` updated with img tag
- [ ] Browser refreshed to see changes

---

## 🚀 Ready to Deploy?

Once you've added your photos:

1. **Test locally**: Verify images look good at http://localhost:3000
2. **Build**: Run `npm run build` to ensure no errors
3. **Deploy**: Run `vercel` to push live
4. **Share**: Your professional website is ready!

---

**Need help?** Check the main README.md or CHANGES.md for more details!

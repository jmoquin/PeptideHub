# PeptideHub Deployment Guide

## Quick Start

PeptideHub is a static web application that can be deployed to any web hosting service. Here are the deployment options:

## Option 1: Local Development (Recommended for Testing)

1. **Download/Clone** the PeptideHub repository
2. **Open** `index.html` in your web browser
3. **Test** all functionality locally

## Option 2: GitHub Pages (Free Hosting)

1. **Create** a new GitHub repository named `PeptideHub`
2. **Upload** all files to the repository
3. **Enable** GitHub Pages in repository settings
4. **Select** source branch (usually `main` or `master`)
5. **Access** your app at `https://yourusername.github.io/PeptideHub`

## Option 3: Netlify (Free Hosting with Custom Domain)

1. **Sign up** for a free Netlify account
2. **Drag and drop** the PeptideHub folder to Netlify
3. **Wait** for automatic deployment
4. **Access** your app at the provided Netlify URL
5. **Optional**: Connect a custom domain

## Option 4: Vercel (Free Hosting)

1. **Sign up** for a free Vercel account
2. **Import** your PeptideHub repository
3. **Deploy** with one click
4. **Access** your app at the provided Vercel URL

## Option 5: Traditional Web Hosting

1. **Upload** all files to your web hosting provider
2. **Ensure** the files maintain their structure
3. **Access** your app at your domain

## File Structure

```
PeptideHub/
├── index.html          # Main application file
├── styles.css          # All styling and responsive design
├── script.js           # Application logic and peptide database
├── README.md           # Comprehensive documentation
└── DEPLOYMENT.md       # This deployment guide
```

## Requirements

- **Web Server**: Any modern web server (Apache, Nginx, etc.)
- **Browser Support**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **No Backend**: This is a static application - no server-side processing required

## Customization

### Adding More Peptides

To expand the peptide database, edit `script.js` and add new entries to the `peptideDatabase` array following the existing structure:

```javascript
{
    id: 'unique-id',
    name: 'Peptide Name',
    category: 'category-name',
    description: 'Brief description',
    overview: 'Detailed overview',
    purpose: 'Primary uses',
    benefits: ['Benefit 1', 'Benefit 2'],
    risks: ['Risk 1', 'Risk 2'],
    dosage: {
        typical: 'Dosage info',
        range: 'Range info',
        frequency: 'Frequency info',
        duration: 'Duration info',
        administration: 'Administration method'
    },
    research: [
        {
            type: 'positive',
            title: 'Research title',
            journal: 'Journal name',
            year: 'Year',
            summary: 'Research summary'
        }
    ],
    molecular_formula: 'Formula',
    molecular_weight: 'Weight',
    half_life: 'Half-life',
    storage: 'Storage instructions'
}
```

### Styling Changes

Modify `styles.css` to customize:
- Color scheme (currently purple-to-cyan gradient)
- Typography
- Layout spacing
- Responsive breakpoints

### Content Updates

Edit `index.html` to modify:
- Page titles and descriptions
- Navigation structure
- Section content
- Footer information

## Performance Optimization

### Before Deployment

1. **Minify** CSS and JavaScript files (optional)
2. **Optimize** images if adding any
3. **Test** on multiple devices and browsers
4. **Validate** HTML and CSS

### CDN Usage

The application already uses CDNs for:
- Google Fonts (Inter font family)
- Font Awesome icons

## Security Considerations

- **No User Data**: This application doesn't collect or store user information
- **Static Content**: All content is client-side rendered
- **Educational Purpose**: Clear disclaimers throughout the application

## Monitoring

After deployment, monitor:
- Page load times
- User engagement
- Browser compatibility
- Mobile responsiveness

## Support

For deployment issues:
1. Check browser console for JavaScript errors
2. Verify all files are uploaded correctly
3. Ensure proper file permissions
4. Test on different devices and browsers

## Updates

To update the application:
1. Modify the source files locally
2. Test thoroughly
3. Upload the updated files to your hosting provider
4. Clear browser cache if needed

---

**Note**: PeptideHub is designed as an educational resource. Ensure all content remains compliant with applicable regulations and maintains the safety-first approach.

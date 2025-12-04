# 📧 EmailJS Setup Guide

Your contact form is now integrated with **EmailJS** - a free service that sends emails directly from your browser without needing a backend server.

## Quick Setup (5 minutes)

### 1. Create Free EmailJS Account
- Go to https://www.emailjs.com/
- Sign up with your email
- Create a FREE account (no credit card needed)

### 2. Create Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add Service"
3. Choose **Gmail** (or your email provider)
4. Connect your email account (where you want to receive messages)
5. Copy the **Service ID** (looks like: `service_xxxxx`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create Template"
3. Name it: `template_vineeth`
4. Use this template content:

```
From: {{from_name}} ({{from_email}})
Subject: New Portfolio Contact from {{from_name}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

5. Save and copy the **Template ID** (looks like: `template_xxxxx`)

### 4. Get Your Public Key
1. Go to Account Settings
2. Copy your **Public Key** (looks like: `YOUR_PUBLIC_KEY_HERE`)

### 5. Update Your Code
Edit `src/components/Contact.tsx` and replace these values:

```typescript
const EMAILJS_SERVICE_ID = 'service_xxxxx'    // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxx'  // Your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'  // Your Public Key
```

## Example Setup

```typescript
const EMAILJS_SERVICE_ID = 'service_a1b2c3d4e5f6g7h8'
const EMAILJS_TEMPLATE_ID = 'template_x9y8z7w6v5u4t3s2'
const EMAILJS_PUBLIC_KEY = 'AbCdEfGhIjKlMnOpQrStUvWxYz'
```

## That's It! 🎉

Your contact form will now:
- ✅ Send real emails to your inbox
- ✅ Show success/error messages
- ✅ Work in both light and dark modes
- ✅ Reset the form after sending

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. Check your email inbox for the message
4. You should see it within seconds!

## Troubleshooting

**"Message not sending?"**
- Check you've replaced all three IDs in Contact.tsx
- Make sure you're using your correct EmailJS Public Key
- Verify the template name matches exactly

**"Getting errors?"**
- Check browser console (F12) for error messages
- Make sure your Gmail account is connected in EmailJS
- Try sending from a different browser if issues persist

**"Emails going to spam?"**
- Gmail may filter automated emails - check spam folder
- Add your email to your contacts to prevent this

## Security Note

The Public Key is safe to expose (it's meant to be public). The template IDs are also safe. Never expose your Private Key.

## Free Plan Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ All basic features

Perfect for a portfolio! If you get more traffic, you can upgrade.

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Contact Form Reference: https://www.emailjs.com/docs/sdk/send-form/

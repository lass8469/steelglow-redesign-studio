

## Add WhatsApp to Contact Page

Add a WhatsApp entry to the `contactInfo` array in `src/pages/ContactPage.tsx` (line 112-117).

### Changes

**`src/pages/ContactPage.tsx`**

1. Import `MessageCircle` from lucide-react (line 2)
2. Add a new entry to the `contactInfo` array after the Phone entry:
```typescript
{ icon: MessageCircle, label: "WhatsApp", value: "+45 22 63 17 00", href: "https://wa.me/4522631700" },
```

This will appear in the "Alternative ways to connect" section alongside email, phone, address, and hours.


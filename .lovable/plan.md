

## Integrate Web3Forms into Contact Forms

Both contact forms will be connected to Web3Forms so submissions go directly to your email.

### Changes Overview

1. **New file: `src/lib/web3forms.ts`** -- Shared helper that sends form data to the Web3Forms API using your access key.

2. **Update `src/components/Contact.tsx`** (homepage form):
   - Replace `console.log` with real Web3Forms submission
   - Add loading state and disable button while sending
   - Show success/error toast notifications
   - Reset form on success

3. **Update `src/pages/ContactPage.tsx`** (dedicated contact page):
   - Replace fake timeout with real Web3Forms API call
   - Keep existing toast and loading behavior

4. **Update `src/contexts/LanguageContext.tsx`**:
   - Add toast translation keys for the homepage form (success/error messages in English and Danish)

### Technical Details

- The Web3Forms access key (`2a8d7c6c-8bdf-47bf-8a04-e171651dd101`) is a publishable client-side key and will be stored as a constant in `src/lib/web3forms.ts`
- API call: `POST https://api.web3forms.com/submit` with JSON body containing `access_key`, form fields, and a `subject` line
- Product and size fields will be included when the product enquiry checkbox is checked
- No new dependencies needed -- uses native `fetch`


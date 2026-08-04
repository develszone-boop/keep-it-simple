# Update contact details and client list

## Changes

1. **Clients section** (`src/components/Clients.tsx`)
   - Remove Anika Farm and Sinine.
   - Add four new clients as text-only logos since no image assets are provided:
     - Gear Monkey — https://gearmonkey.in/
     - Monockle — https://www.monockle.com/
     - MindSportz — https://mindsportz.in/
     - Kyrosonics — https://kyrosonics.com/
   - Keep the existing grid layout and hover behavior unchanged.

2. **Contact details** (`src/components/Contact.tsx`)
   - Email: `hello.trikalnetra@gmail.com`
   - Phone: `+91 9063362994` (replace the previous two-number display and `tel:` link)
   - Keep the third "Our Location" card unchanged.

3. **WhatsApp button** (`src/components/WhatsAppButton.tsx`)
   - Update the click-to-chat number to `919063362994` so the floating button matches the new contact phone.

## Verification

- Preview the homepage to confirm the client grid shows the four new names and no longer shows Anika Farm or Sinine.
- Preview the contact page to confirm the new email and phone number.
- Check the WhatsApp button links to the new number.

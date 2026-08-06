# Arizona Commercial Roof Exchange

Commercial flat-roof procurement and roof asset management platform for Arizona.

## Current MVP

- Premium property-owner landing page
- Commercial project intake form
- Supabase-backed intake API
- Contractor value proposition
- Proposal comparison concept
- Initial database schema for projects, roof assets, contractor profiles, invitations, proposals, and roof history

## Local setup

```bash
npm install
npm run dev
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Run `supabase/schema.sql` in the Supabase SQL editor.

## Vercel deployment

1. Import `g5wzgbctmb-svg/commercialroof` into Vercel.
2. Add the two Supabase environment variables.
3. Deploy.

## Planned build order

1. Owner authentication and portfolio dashboard
2. Admin project qualification and documentation workflow
3. Contractor onboarding, licensing, insurance, systems, and service-area verification
4. Invite up to five matched contractors per project
5. Structured proposal submission and side-by-side comparison
6. Owner award flow and contractor success fee
7. Roof Passport with inspection, warranty, repair, leak, document, and project history
8. Portfolio health, inspection reminders, and capital forecasting
9. AI-assisted photo summaries and condition-risk scoring

## Core positioning

One documented roof evaluation. Up to five qualified proposals. The decision maker chooses the contractor.

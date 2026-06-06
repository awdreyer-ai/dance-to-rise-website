# Dance to Rise Foundation — Website

Production-ready Next.js website for Dance to Rise Foundation, a South African non-profit supporting young Ballroom and Latin-American DanceSport athletes.

## Tech Stack

- **Next.js** (App Router) with TypeScript
- **Tailwind CSS v4** for styling
- **React Hook Form** for the multi-step application form
- **Resend** for transactional email
- **Vercel** deployment-ready

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, what we do, how it works, sponsors |
| `/about` | Story, vision, mission, values, governance |
| `/programme` | Programme overview, coverage, eligibility, selection process |
| `/apply` | 7-step application form (Class of 2027) |
| `/sponsors` | Sponsorship tiers, category partners, enquiry form |
| `/news` | News feed with category filter, impact dashboard |
| `/contact` | Contact information and enquiry form |
| `/privacy` | POPIA-compliant privacy policy |
| `/thank-you` | Post-application confirmation page |

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Get a Resend API key at [resend.com](https://resend.com). The free tier supports up to 3,000 emails/month.

> Without a valid `RESEND_API_KEY`, forms still submit but emails won't be sent. Application reference numbers are still generated.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push this repository to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.dancetorise.org.za`)
4. Deploy

## Email Configuration

All transactional emails are sent via [Resend](https://resend.com).

| Trigger | Recipients |
|---------|-----------|
| Application submitted | Both guardians + applications@dancetorise.org.za |
| Contact form | info@dancetorise.org.za |
| Sponsor enquiry | info@dancetorise.org.za |

To send from `@dancetorise.org.za`, verify the domain in Resend and update the `from` addresses in the API routes under `app/api/`.

## Sponsorship Proposal PDF

Place the actual PDF at `public/files/sponsorship-proposal.pdf` to enable the download button on the Sponsors page.

## Brand Colours

| Name | Hex |
|------|-----|
| Foundation Red | `#E24F57` |
| Foundation Blue | `#2547B2` |
| Deep Navy | `#1A3578` |
| Foundation Teal | `#3A9BAD` |
| Foundation Gold | `#C8A840` |
| Off-White | `#F7F9FC` |

## Project Structure

```
app/
  page.tsx                    # Home
  about/page.tsx              # About
  programme/page.tsx          # Programme
  apply/page.tsx              # Apply
  sponsors/page.tsx           # Sponsors
  news/page.tsx               # News
  contact/page.tsx            # Contact
  privacy/page.tsx            # Privacy Policy
  thank-you/page.tsx          # Post-submission confirmation
  not-found.tsx               # 404 page
  api/
    apply/route.ts            # Application form email handler
    contact/route.ts          # Contact form email handler
    sponsor-enquiry/route.ts  # Sponsor enquiry email handler
components/
  layout/
    Header.tsx                # Sticky nav with mobile hamburger
    Footer.tsx                # Deep navy footer
  ui/
    Button.tsx                # Reusable button / link button
    Card.tsx                  # Reusable card
    HeroSection.tsx           # Page hero wrapper
  forms/
    ApplicationForm.tsx       # 7-step application form
    ContactForm.tsx           # Contact enquiry form
    SponsorEnquiryForm.tsx    # Sponsor enquiry form
public/
  logo.png                    # Foundation logo
  files/
    sponsorship-proposal.pdf  # Replace with actual PDF
```

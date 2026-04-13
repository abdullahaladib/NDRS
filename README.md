# NDRS - Natural Disaster Response System

Fast, clean, and purpose-built disaster response web platform.

Built by **Team CyberAid** for BRAC University CSE370.

---

## What This Project Is

NDRS is a full-stack web application that helps coordinate disaster-related actions in one place.

It includes flows for:

- incident reporting
- disaster alert viewing
- volunteer registration
- donation actions
- user login/signup/profile
- admin-side management views

Core stack: **Next.js 14 + TypeScript + Tailwind CSS + MySQL**

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components

### Backend / Data

- MySQL (`mysql2`)
- service-layer files under `src/app/(service)`
- SQL bootstrap file: `database.sql`

---

## Project Structure (High Level)

```text
src/
	app/
		admin/                # admin pages and flows
		DisasterAlert/        # alert pages
		IncidentReport/       # incident reporting
		Donation/             # donation page
		ReportForm/           # report submission form
		volunteerForm/        # volunteer signup form
		login/ signupPage/    # auth screens
		userProfile/          # user profile page
		(service)/            # DB-backed service functions
	components/
		component/            # project-level components
		ui/                   # reusable UI primitives
```

---

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd NDRS-main
npm install
```

### 2. Set up database

1. Create a MySQL database.
2. Import `database.sql`.
3. Configure database connection in app config/service files (see `src/app/config/db.ts` and related service files).

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

```bash
npm run dev     # start development server
npm run build   # production build
npm run start   # run production build
npm run lint    # lint project
```

---

## Current Status

This is an active academic project and still evolving.

What is already in place:

- page-level flows for users and admins
- disaster, incident, donation, and volunteer modules
- service files for auth/data operations

What can be improved next:

- stricter validation and error handling
- environment-based DB config (`.env.local`)
- tests (unit + integration)
- role guards and route protection hardening

---

## Team

**Team CyberAid**

If you are contributing, please keep commits focused and document any schema changes in `database.sql`.

---

## License

No explicit license file is included yet.
If you plan to open-source this publicly, add a `LICENSE` file (MIT/Apache-2.0/etc.) first.

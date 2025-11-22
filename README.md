# **Classboard (redesigned)**

Classboard (redesigned) is a modern web application for managing classes, announcements, schedules, and shared resources with advanced prioritization and reminder features for students and class representatives.

## **Table of contents**

- Project overview
- Key features
- Advanced features
- Tech stack
- Repository layout
- Getting started
- Development
- Testing & linting
- Deployment
- Security & privacy
- Contributing
- Troubleshooting
- License
- Contact

## **Project overview**

This app provides the typical Classboard functionality (class and user management, announcements, resources, and schedules) and extends it with productivity-focused features: the ability to mark courses as important, let class reps manage importance for their course members and also let each members set their own importance, and set reminders/notifications for important dates and course updates.

## **Colors Used**

- `public/mockup-classboard.svg`, `public/mockup-classboard-dark.svg`, and `public/mockup-classboard-mobile.svg` use the following palette used across mockups:
- **Primary gradient:** `#6C5CE7` → `#00B894` (main accent gradient used for headers/marks)
- **Light background:** `#F5F7FF` (page background)
- **Card / surface:** `#FFFFFF` (card backgrounds)
- **Subtle stroke / panel border:** `#EEF3FB`
- **Muted text:** `#6B7280`
- **Accent variants:** `#FFD166`, `#74C0FC`, `#9B59B6`, `#00B894`, `#FF7675`, `#74D680` (used for course chips and icons)
- **Dark-mode background:** `#071023` / `#0B1422`
- **Dark-mode accent gradient:** `#7C5CFF` → `#00D389`

Add or adjust these tokens in your design system or Tailwind config as needed.

## Key features

1.  **Class Management and user enrollment:** Classes would be managed and created by class reps and admins. Users can enroll in classes via unique codes or invitations. Lecturers are also created and assigned to classes by class reps/admins.
2.  **Announcements and resource sharing (files, links, notes):** Class reps would be able to post announcements and share resources with class members. Resources can be organized and tagged for easy searching
3.  **Responsive, accessible UI:** We are building a clean, responsive UI using modern frontend frameworks (React, NextJS) with accessibility best practices.
4.  **API-first architecture for extensibility:** Design REST API endpoints to allow third-party integrations, this APIS is designed using the inbuit NextJS API routes and we are testing it using Postman.

## Advanced features

- Important / Starred courses
  - Users can mark any course as important (star/bookmark).
  - Class reps may be granted permission to mark courses important for their class.
- Reminders & notifications
  - Create one-off and recurring reminders for exams, assignments, important classes, and resources.
  - Reminders can be scheduled, snoozed, and set with custom priority and expiration.
  - Delivery channels: in-app, email, and optional push notifications (configurable per user).
  - Calendar sync (ICS export / Google / Outlook) for reminders and events.
- Subscription & digest
  - Subscribe to course updates, announcements, or specific resource threads.
  - Daily/weekly digest emails summarizing important items and upcoming reminders.
- Permission controls & audit
  - Fine-grained permissions for class reps (who can post announcements, mark importance, or manage reminders).
  - Audit logs for administrative actions.
- Offline & sync
  - Local caching for basic read access and queued actions while offline.
- Import/export
  - Import course lists and export schedules/reminders as ICS or CSV.

## Tech stack

- Frontend: React + TypeScript (or preferred framework), Tailwind or CSS-in-JS
- Backend: Node.js + Express (or preferred), REST or GraphQL API
- Database: PostgreSQL (SQLite for local dev)
- Tooling: Vite / Webpack, ESLint, Prettier, Husky, Jest/Testing Library

## Repository layout

- /src — frontend source code
  - /components — reusable UI components
  - /pages — top-level routes
  - /services — API clients and data layer
  - /styles — global styles and design tokens
- /server — backend API
  - /controllers
  - /models
  - /routes
  - /jobs — background jobs (reminders, digests)
- /migrations — DB migrations
- /scripts — helper scripts
- README.md — this file
- .env.example — required environment variables

Adjust layout to match the actual repo if different.

## Getting started (local)

1. Clone the repo
   git clone <repo-url>
2. Install dependencies
   cd classboard-redesigned
   npm install
   (or yarn)
3. Copy environment example and edit
   cp .env.example .env
   - Configure DATABASE_URL, PORT, email provider, and push credentials if used
4. Start the app (development)
   npm run dev
5. Open http://localhost:3000 (or configured port)

If frontend/backend are separate:

- Start backend: cd server && npm run dev
- Start frontend: cd src && npm run dev

## Development

- Recommended Node version: specify with .nvmrc or engines in package.json
- Run type checks:
  npm run typecheck
- Format code:
  npm run format
- Commit hooks:
  Husky runs linters and tests before commit/push

## Testing & linting

- Run tests:
  npm run test
- Run linters:
  npm run lint

Add/update tests for new features. Prioritize unit tests for core logic (reminders, permissions) and integration tests for API endpoints.

## Deployment

- Build for production:
  npm run build
- Provide environment variables via the hosting platform (Vercel)
- Run DB migrations and background job workers (for reminders and digests)
- Configure email / push providers and secrets in production

## Security & privacy

- Do not commit secrets. Use .env and host secret management.
- Validate and sanitize all user input on the server.
- Rate-limit reminder creation and notification endpoints to prevent abuse.

## Contributing

- Open an issue for bugs or feature requests.
- Fork, create a feature branch, implement changes, add tests, and open a pull request.
- Follow the repository's code style, run linters, and keep commits atomic and descriptive.

## Troubleshooting

- Common issues:
  - Missing environment variables: check .env against .env.example
  - DB connection failures: verify DATABASE_URL and run migrations
  - Notification failures: verify email/push provider credentials

## License

MIT — see LICENSE file for details.

## Contact

For questions or support, open an issue in this repository.

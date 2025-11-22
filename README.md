# Classboard (redesigned)

Classboard (redesigned) is a modern web application for managing classes, announcements, schedules, and shared resources with advanced prioritization and reminder features for students and class representatives.

## Table of contents

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

## Project overview

This app provides the typical Classboard functionality (class and user management, announcements, resources, and schedules) and extends it with productivity-focused features: the ability to mark courses as important, let class reps manage importance for their cohort, and a flexible reminders system for tasks, exams, and events.

## Key features

- Class and user management (create, edit, archive)

  - CRUD for classes and users: create/update class metadata, enroll/unenroll users, soft-delete/archive items to preserve history.
  - Data model: Class, User, Enrollment, Role. Use UUIDs, timestamps (createdAt/updatedAt/archivedAt).
  - Backend concerns: validation, transactional updates (enrollments + counts), pagination and search.
  - Gotcha: archiving vs deleting — prefer soft-delete and prevent orphaned relations.

- Announcements and resource sharing (files, links, rich text)

  - Post announcements scoped to class(es) or global; attach files, URLs, and rich text content.
  - Storage: use signed uploads to S3 (or equivalent) and store metadata in DB (filename, MIME, size, access policy).
  - Security: virus scanning for uploads, enforce file-size/type limits, and authorize downloads by role/class.
  - UX: show read/unread state, optional scheduling, and versioning for edited announcements.

- Calendar / schedule view with day/week/month modes

  - Display events (classes, deadlines, exams) with multiple granular views and timezone awareness.
  - Data: Event entity with start/end, recurrence rules (RRULE), reminders/notifications.
  - Performance: fetch events by visible date range, cluster overlapping events, lazy-load details.
  - Gotcha: handle DST and recurring-event edits carefully (single instance vs series).

- Role-based access (student / class rep / teacher / admin)

  - Define roles and granular permissions (RBAC), ideally with a roles table and permission matrix.
  - Enforce on both client and server: UI hides actions, API validates permissions on every request.
  - Consider impersonation or audit logging for admin actions.
  - Gotcha: don’t trust client-side role checks — always validate on server and protect sensitive endpoints.

- Responsive, accessible UI

  - Mobile-first responsive design (flexbox/grid), breakpoints, and progressive enhancement.
  - Accessibility (a11y): semantic HTML, keyboard navigation, ARIA where necessary, color-contrast, screen-reader announcements.
  - Testing: run axe or Lighthouse checks and include keyboard-focused manual tests.
  - Gotcha: complex components (calendars, rich-text editors) often need custom a11y work.

- API-first architecture for extensibility
  - Design REST/GraphQL APIs as first-class artifacts with versioning, clear contracts, and OpenAPI/GraphQL schema docs.
  - Separate frontend/state from backend logic; support third-party integrations and webhooks.
  - Dev ergonomics: mock servers, Postman/Swagger, and automated API tests.
  - Gotcha: breaking changes — use API versioning and deprecation policies.

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
- Provide environment variables via the hosting platform (Vercel, Netlify, Heroku, AWS)
- Run DB migrations and background job workers (for reminders and digests)
- Configure email / push providers and secrets in production

## Security & privacy

- Do not commit secrets. Use .env and host secret management.
- Validate and sanitize all user input on the server.
- Use HTTPS in production and secure cookies / tokens.
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
  - Port conflicts: change PORT in .env

## License

MIT — see LICENSE file for details.

## Contact

For questions or support, open an issue in this repository.

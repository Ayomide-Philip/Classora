# **Classora**

Classora is a modern web application for managing classes, announcements, schedules, and shared resources with advanced prioritization and reminder features for students and class representatives.

[Classora](public\images\Classora_Logo.png)

## **Table of contents**

- Project overview
- Key features
- Advanced features
- Tech stack
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

## **Key features**

1.  **Class Management and user enrollment:** Classes would be managed and created by class reps and admins. Users can enroll in classes via unique codes or invitations. Lecturers are also created and assigned to classes by class reps/admins.
2.  **Announcements and resource sharing (files, links, notes):** Class reps would be able to post announcements and share resources with class members. Resources can be organized and tagged for easy searching
3.  **Responsive, accessible UI:** We are building a clean, responsive UI using modern frontend frameworks (React, NextJS) with accessibility best practices.
4.  **API-first architecture for extensibility:** Design REST API endpoints to allow third-party integrations, this APIS is designed using the inbuit NextJS API routes and we are testing it using Postman.

## **Advanced features**

1. **Important / Starred courses:** Users can mark any course as important (star/bookmark). Class reps may be granted permission to mark courses important for their class.
2. **Reminders & notifications:** Create one-off and recurring reminders for exams, assignments, important classes, and resources. Reminders can be scheduled, snoozed, and set with custom priority and expiration. Delivery channels include in-app, email, and optional push notifications (configurable per user). Calendar sync (Google) for reminders and events.
3. **Dashboard & analytics:** Personalized dashboard showing upcoming reminders, important announcements, and course activity. Analytics on user engagement, announcement views, and resource downloads.
4. **Search & filtering:** Advanced search across classes, announcements, and resources with filters for importance, date, and type.
5. **Collaboration & comments:** Commenting on announcements and resources for class discussions. Threaded replies and mentions.
6. **Notifications & digests:** Daily/weekly digest emails summarizing important items and upcoming reminders.
7. **Offline & sync:** Local caching for basic read access and queued actions while offline.
8. **Import/export:** Import course lists and export schedules/reminders as CSV.

## **Tech stack**

- **Fullstack:** Next.js (React) for frontend and backend API routes
- **Styling:** Tailwind CSS, CSS Modules
- **Database:** MongoDB (or preferred), Mongoose (or preferred ORM)
- **Authentication:** JWT or OAuth2
- **Notifications:** Nodemailer for email, Web Push API for push notifications

## Getting started (local)

1. Clone the repo
   git clone <repo-url>
2. Install dependencies
   cd classboard-redesigned
   npm install
3. Copy environment example and edit
   cp .env.example .env
   - Configure DATABASE_URL, PORT, email provider, and push credentials if used
4. Start the app (development)
   npm run dev
5. Open http://localhost:3000 (or configured port)

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

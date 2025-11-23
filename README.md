# Classora – Teach more, Manage less! 

## 1. Executive Summary and Strategic Objective

Objective  
Make Classora a full student ecosystem. Core pillars are class management, community engagement, real‑time chat, searchable venue mapping and advanced reminders. The redesign modernizes UI and UX, introduces contribution features such as comments and chat, and surfaces people and places through search and map filters.

Success metrics  
• Increase active user contributions per class.  
• Reduce time to find venues or users.  
• Full UI coverage using a consistent component library and automated tests.

Constraints  
Next.js frontend, MongoDB backend, DaisyUI, JWT/OAuth. Baseline features referenced from original documentation.

---

## 2. High‑Level Product Pillars

1. Landing page and acquisition funnel.  
2. Dashboard with prioritized items.  
3. Classes and roster management.  
4. Announcements with comments.  
5. Real‑time chat.  
6. Map and venue search.  
7. Reminders and calendar sync.  
8. Analytics and admin tools.  
9. Offline support and background jobs.

---

## 3. Design System and Components

Design tokens  
Gradient and colors from existing palette. Add semantic colors for system states.

Typography & spacing  
Define Tailwind scale for typography, spacing, radii.

DaisyUI component mapping  
Hero, navbar, card, list, avatar, modal, tabs, tables, toasts, chat bubble, map container.

Deliverables  
• Figma components  
• Tailwind + DaisyUI tokens  
• Storybook components

---

## 4. Page‑by‑Page Todo List

### Landing Page
• Hero section with CTA buttons  
• Feature sections: classes, community, chat, map, reminders  
• Footer and supporting material  
API: Public endpoints  
Acceptance: Fast load, conversion‑optimized layout

### Auth & Onboarding
• Sign up / Sign in  
• Social login  
• Onboarding role selection  
API: /auth/register, /auth/login  
Acceptance: User lands in setup flow

### Dashboard
• Unified prioritized feed  
• Customizable widgets  
API: /dashboard  
Acceptance: Editable layout

### Classes Page
• Class overview, announcements, resources, people, events, chat  
• Roster with search  
API: /classes/:id  
Acceptance: Roles and roster management

### Announcements & Comments
• Post announcements  
• Comment threads, mentions, reactions  
API: /classes/:id/announcements  
Real‑time: Live updates  
Acceptance: Comments appear instantly

### Chat System
• Class rooms, private chats, channels  
• Typing indicators, read receipts  
API: WebSocket + REST history  
Acceptance: Reliable message delivery

### User Directory
• Searchable directory with filters  
API: /users  
Acceptance: Quick search response

### Map & Venue Search
• Map view with filters  
• Directions and event creation  
API: /venues  
Acceptance: Interactive filtering and pins

### Global Search
• Unified search bar  
API: /search  
Acceptance: Instant suggestions

### Reminders & Calendar Sync
• Recurring reminders  
• Snooze, expiration  
API: /reminders  
Workers: scheduled tasks  
Acceptance: Reliable delivery

### Notifications Center
• Inbox view  
• Digest configuration  
API: /notifications  
Acceptance: Real‑time + email digest

### Resources & File Management
• File uploads, tagging, versioning  
Acceptance: Previews and logging

### Admin & Analytics
• System metrics, moderation  
Acceptance: Export capabilities

---

## 5. Data Models

User  
Class  
Announcement  
Comment  
Message  
Venue  
Reminder  
Notification  
Includes indexes for text search and geo search.

---

## 6. API Surface

Auth  
Classes  
Announcements  
Chat  
Search  
Venues  
Reminders  
Notifications  
Admin/Analytics  

OpenAPI recommended for full schema definitions.

---

## 7. Real‑Time Architecture

• WebSocket for chat and comments  
• Redis Pub/Sub  
• Background job queue for reminders and digests  
• MongoDB primary, Redis cache/presence

---

## 8. UX, Accessibility and Edge Cases

• Loading states and skeletons  
• Comment depth handling  
• Offline chat retries  
• AA contrast  
• Mobile‑first responsiveness

---

## 9. DaisyUI Development Checklist

• Buttons  
• Inputs  
• Modals  
• Cards  
• Avatars  
• Toasts  
• Tabs  
• Tables  
• Chat bubbles  
• Map container

---

## 10. QA, Testing, Deployment

• Unit, integration, E2E tests  
• CI pipeline for lint, tests, Storybook  
• Vercel deploy for web  
• Workers for background jobs  
• Sentry monitoring

---

## 11. Collaboration Workflow

Repo structure  
Branching strategy  
Code review checklist  
Design → Dev → QA workflow  
Sprint planning guidelines

---

## 12. Timeline (Suggested)

Sprint 0 – Components + Auth  
Sprint 1 – Landing + Dashboard  
Sprint 2 – Classes + Announcements  
Sprint 3 – Comments (real‑time)  
Sprint 4 – Chat  
Sprint 5 – Map  
Sprint 6 – Reminders  
Sprint 7 – Admin + Polishing

---

## 13. Security Checklist

• Input validation  
• RBAC permissions  
• Token expiry  
• File security  
• Data retention policy

---

## 14. Optional Deliverables

• Page flow diagrams  
• Component spec sheets  
• OpenAPI documentation  
• Storybook foundations  
• UX diagrams


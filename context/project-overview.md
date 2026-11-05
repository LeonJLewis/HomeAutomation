# 🏠 Home Automation — Project Specification

> A web UI that lets users control the home automation devices connected to the application, organised by location.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Users](#2-users)
3. [Features](#3-features)
4. [Data Model](#4-data-model)
5. [Tech Stack](#5-tech-stack)
6. [UI / UX](#6-ui--ux)
7. [Open Questions](#7-open-questions)

---

## 1. Overview

Users should be able to view and control devices filtered by location:

| Scope     | Description                                  |
| --------- | -------------------------------------------- |
| **All**   | Every device in the home                     |
| **Rooms** | Devices grouped by the room they belong to   |

---

## 2. Users

### Roles

| Role      | Access                                             |
| --------- | -------------------------------------------------- |
| **Admin** | Full access, including the configuration menu      |
| **User**  | Basic device control                               |

### Personas

> ⚠️ **Review needed:** these personas appear to be carried over from a snippet/notes manager project and may not apply to home automation.

| Persona                         | Needs                                                  |
| ------------------------------- | ------------------------------------------------------ |
| **Everyday Developer**          | A fast way to grab snippets, prompts, commands, links  |
| **AI-first Developer**          | Saves prompts, contexts, workflows, system messages    |
| **Content Creator / Educator**  | Stores code blocks, explanations, course notes         |
| **Full-stack Builder**          | Collects patterns, boilerplates, API examples          |

---

## 3. Features

### A. Setup (Admin only)

Only admin users can access the configuration menu, which allows them to:

- [ ] Add devices
- [ ] Configure devices
- [ ] Add locations
- [ ] Set schedules

### B. Collections

> ⚠️ **Review needed:** this section appears to be carried over from another project.

Users can create collections containing items of any type. An item can belong to multiple collections — e.g. a React snippet could live in both *React Patterns* and *Interview Prep*.

**Examples**

| Collection         | Contains          |
| ------------------ | ----------------- |
| React Patterns     | Snippets, notes   |
| Context Files      | Files             |
| Python Snippets    | Snippets          |

### C. Other Features

> ⚠️ **Review needed:** most of these relate to a snippet manager rather than device control.

- Favourite collections and items
- Pin items to top
- Recently used
- Import code from a file
- Markdown editor for text types
- File upload for file types (file / image)
- Export data in different formats
- Dark mode (default)
- Add / remove items to/from multiple collections
- View which collections an item belongs to

---

## 4. Data Model

> Rough draft — not set in stone.

```text
User
├── role            admin | user

Home
├── name
└── locations[]     → Location

Location
├── locationId
└── name

Device
├── deviceId
├── locationId      → Location
└── name
```

---

## 5. Tech Stack

| Layer            | Choice                                                  |
| ---------------- | ------------------------------------------------------- |
| **Framework**    | Next.js 16 / React 19                                   |
| **Rendering**    | SSR pages with dynamic components                       |
| **Backend**      | Next.js API routes (storage, file uploads, AI calls)    |
| **Language**     | TypeScript                                              |
| **Repo**         | Single codebase / monorepo for less overhead            |
| **Database**     | _TBD_                                                   |
| **AI**           | OpenAI `gpt-5-nano`                                     |
| **Styling**      | Tailwind CSS v4 + shadcn/ui                             |

---

## 6. UI / UX

### General

- Modern, minimal, developer-focused
- Dark mode by default, light mode optional
- Clean typography, generous whitespace
- Subtle borders and shadows
- Syntax highlighting for code blocks
- **References:** Notion, Linear, Raycast

### Layout

- **Sidebar + main content** (sidebar is collapsible)
- **Sidebar:** item types with links to items (snippets, commands, etc.) and latest collections
- **Main:** grid of colour-coded collection cards — background colour reflects the item type they hold most of. Items display beneath collections in colour-coded cards (border colour)
- **Item detail:** opens in a quick-access drawer

### Type Colours & Icons

_TBD_

### Responsive

- Desktop-first, but usable on mobile
- Sidebar becomes a drawer on mobile

### Micro-interactions

- Smooth transitions
- Hover states on cards
- Toast notifications for actions
- Loading skeletons

---

## 7. Open Questions

- [ ] Which database?
- [ ] Should the Personas, Collections and Layout sections be rewritten for home automation (e.g. homeowner / family member personas, device cards grouped by room)?
- [ ] What is the AI integration used for?
- [ ] Define type colours & icons
- [ ] What does a schedule look like (per device, per room, scenes)?

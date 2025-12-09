# Services & Technologies Used in Imprezons

This document categorizes all services and technologies used in this project.

## Frontend Framework & Core

- **Next.js** (v16.0.7) - React framework for production
- **React** (v19.2.1) - UI library
- **React DOM** (v19.2.1) - React renderer
- **TypeScript** (v5.7.3) - Type-safe JavaScript

## Backend & Database

- **Convex** (v1.19.0) - Backend-as-a-Service (BaaS) with real-time database
  - Provides database, serverless functions, and real-time subscriptions
  - Integrated with Clerk for authentication
  - Configuration: `convex/auth.config.js` and `convex/schema.ts`

## Authentication & User Management

- **Clerk** (v5.22.11) - Authentication and user management service
  - Provides sign-in, sign-up, and user management
  - Integrated with Convex for backend authentication
  - Domain: `new-grouper-58.clerk.accounts.dev`
  - Environment variables: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

## File Storage & Media

- **EdgeStore** (v0.2.2) - File storage service

  - Used for storing public files (images, documents)
  - Hostname: `files.edgestore.dev`
  - Bucket: `publicFiles`
  - API route: `/app/api/edgestore/[...edgestore]/route.ts`

- **Cloudinary** (via `next-cloudinary` v6.16.0) - Image upload and management service
  - Used for image uploads in the application
  - Upload preset: `zfq6bwry`
  - Component: `components/image-upload.tsx`

## UI Component Libraries

- **Radix UI** - Headless UI component primitives

  - `@radix-ui/react-alert-dialog` (v1.1.6)
  - `@radix-ui/react-avatar` (v1.1.3)
  - `@radix-ui/react-dialog` (v1.1.6)
  - `@radix-ui/react-dropdown-menu` (v2.1.6)
  - `@radix-ui/react-label` (v2.1.2)
  - `@radix-ui/react-popover` (v1.1.6)
  - `@radix-ui/react-slot` (v1.1.2)

- **BlockNote** - Rich text editor
  - `@blocknote/core` (v0.23.2)
  - `@blocknote/mantine` (v0.23.2)
  - `@blocknote/react` (v0.23.2)

## Styling & Theming

- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **PostCSS** (v8.5.1) - CSS processor
- **Autoprefixer** (v10.4.20) - CSS vendor prefixer
- **next-themes** (v0.4.4) - Theme management (dark/light mode)
- **tailwindcss-animate** (v1.0.7) - Animation utilities
- **tailwind-merge** (v3.0.1) - Merge Tailwind classes
- **class-variance-authority** (v0.7.1) - Component variant management
- **clsx** (v2.1.1) - Conditional class names

## Icons & Visual Elements

- **Lucide React** (v0.475.0) - Icon library
- **emoji-picker-react** (v4.12.0) - Emoji picker component

## State Management

- **Zustand** (v5.0.3) - Lightweight state management

## Form & Validation

- **Zod** (v3.24.1) - Schema validation library

## UI Utilities

- **Sonner** (v1.7.4) - Toast notification library
- **cmdk** (v1.0.4) - Command menu component
- **react-textarea-autosize** (v8.5.7) - Auto-resizing textarea
- **react-dropzone** (v14.3.5) - File dropzone component

## Fonts

- **Google Fonts** - Inter font family
  - Loaded via Next.js font optimization (`next/font/google`)

## Development Tools

- **ESLint** (v9.20.0) - JavaScript/TypeScript linter
- **eslint-config-next** (v16.0.7) - Next.js ESLint configuration
- **Trunk** - Code quality and linting platform
  - Multiple linters: checkov, eslint, markdownlint, prettier, svgo, trufflehog, osv-scanner

## External Image Services

- **Picsum Photos** - Placeholder image service
  - Hostname: `picsum.photos`
  - Used for placeholder images

## Deployment Platform

- **Vercel** - Deployment platform (mentioned in README)
  - Recommended platform for Next.js applications

## Environment Variables Required

Based on the codebase, the following environment variables are needed:

- `NEXT_PUBLIC_CONVEX_URL` - Convex backend URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk authentication public key
- Cloudinary configuration (likely `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and upload preset)

## Architecture Summary

This is a **full-stack Next.js application** that uses:

- **Frontend**: Next.js 16 with React 19, TypeScript, Tailwind CSS
- **Backend**: Convex (BaaS) for database and serverless functions
- **Authentication**: Clerk for user management
- **File Storage**: EdgeStore for general files, Cloudinary for images
- **Rich Text Editor**: BlockNote for document editing
- **Deployment**: Vercel (recommended)

The application appears to be a document/note-taking application with real-time collaboration features, user authentication, and file/image upload capabilities.

// src/proxy.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Add any routes here that should require sign-in
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/settings(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files, unless referenced in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk's own frontend API routes
    '/__clerk/(.*)',
  ],
}
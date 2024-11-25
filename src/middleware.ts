import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};

const isPublicRoute = createRouteMatcher(["/", "/sign-up(.*)"]);
// Middleware to allow signed-out users to access specific routes
export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware();

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
// };


import { getAuth, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export function middleware(req: NextRequest) {
  if (!isPublicRoute(req)) {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

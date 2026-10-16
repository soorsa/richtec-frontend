// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const role = request.cookies.get("role")?.value;
  const { pathname } = request.nextUrl;
  // console.log({
  //   token: token,
  // });
  // Auth routes that should NOT be accessible when logged in
  const dashboardUrl = new URL("/admin/dashboard", request.url);
  const adminLoginUrl = new URL("/admin", request.url);
  const authRoutes = [
    "/signin",
    "/singup",
    "/forgot-password",
    "/reset-password",
  ];
  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "?")
  );

  // Protected routes that require authentication
  const protectedRoutes = ["/admin/dashboard"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If trying to access auth route while logged in - redirect to dashboard
  if (token && isAuthRoute) {
    console.log("yes token");
    if (role === "admin") {
      return NextResponse.redirect(dashboardUrl);
    }
    return NextResponse.redirect(adminLoginUrl);
  }

  // If no token and trying to access protected route - redirect to login
  if (!token && isProtectedRoute) {
    console.log("no token");
    adminLoginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(adminLoginUrl);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Run on all routes except static files
};
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/courses/create/:path*",
//     "/admin/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/reset-password",
//   ],
// };

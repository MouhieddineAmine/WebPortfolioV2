import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Supported locales
  locales: ["en", "fr"],

  // Default locale
  defaultLocale: "en"
});

export const config = {
  // Apply this middleware to all routes
  matcher: ["/", "/(fr|en)/:path*"]
};

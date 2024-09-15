Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/api") return new Response("Home page!");
    if (url.pathname === "/api/blog") return new Response("Blog!");
    return new Response("404!");
  },
  port: process.env.PORT || 3000,
});

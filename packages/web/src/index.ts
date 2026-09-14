import index from "./index.html";

Bun.serve({
  routes: {
    "/": index,
    "/api/agent": {
      POST: async (req) => {
        const body = await req.json();
        return Response.json({ message: `Received: ${body.input}` });
      },
    },
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log("Web server running at http://localhost:3000");

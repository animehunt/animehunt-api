export default {
  async fetch(request, env, ctx) {
    return new Response(
      JSON.stringify({
        status: "ok",
        project: "animehunt-api",
        message: "Worker live",
        version: "1.0.0"
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

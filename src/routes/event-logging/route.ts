import { Hono } from "hono"

export const eventLoggingRoutes = new Hono()

// Anthropic telemetry stub — just return 200 without processing
eventLoggingRoutes.post("/batch", (c) => {
  return c.text("OK", 200)
})

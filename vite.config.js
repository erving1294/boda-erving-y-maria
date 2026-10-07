import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import rsvpHandler from './api/rsvp.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'api-rsvp-dev',
      configureServer(server) {
        server.middlewares.use('/api/rsvp', (req, res) => {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', () => {
            try {
              req.body = body ? JSON.parse(body) : {}
            } catch {
              req.body = body
            }

            // Compatibilidad con la respuesta de Vercel en desarrollo local
            res.status = (code) => {
              res.statusCode = code
              return res
            }
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
              return res
            }

            // Reutiliza exactamente el mismo handler de api/rsvp.js
            rsvpHandler(req, res)
          })
        })
      },
    },
  ],
})

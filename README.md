# web-server-2

Second version of [web-server].

[web-server]: https://github.com/SheepTester/web-server

Tech stack:

- Ubuntu: matches my WSL dev environment
- Node, TypeScript: I'm most familiar with this
- express.js: ubiquitous
- Caddy: HTTPS (recommended by LLM)
- pm2: process manager (recommended by LLM)

## Development

1. Make sure Node is installed.

1. ```sh
   npm i
   ```

1. ```sh
   npm run dev
   ```

Service will be available at http://localhost:3000/.

## Production

TODO: I haven't tested any of this. I'll update this once I try it :)

### Setup

1. Make sure Node is installed.

1. Set up pm2:
   1. ```sh
      npm i -g pm2
      ```

   1. ```sh
      pm2 start ecosystem.config.js
      ```

   1. ```sh
      pm2 startup
      ```

      This outputs a command to copy paste and run.

   1. ```sh
      pm2 save
      ```

1. [Install Caddy.][caddy-install] This should automatically start Caddy as a background service.

1. ```sh
   caddy reload
   ```

[caddy-install]: https://caddyserver.com/docs/install#debian-ubuntu-raspbian

### Updates

If you update `ecosystem.config.js`, run `pm2 reload ecosystem.config.js`.

If you update `Caddyfile`, run `caddy reload`.

# web-server-2

Second version of [web-server], self-hosted on a mini PC with 4 GB RAM.

[web-server]: https://github.com/SheepTester/web-server

Tech stack:

- Ubuntu: matches my WSL dev environment
- Node, TypeScript: I'm most familiar with this
- express.yml: ubiquitous
- sqlite3: simple (single-file) and way better than a plain JSON file
- [Caddy][caddy]: HTTPS (recommended by LLM)
- [pm2]: process manager (recommended by LLM)

[caddy]: https://caddyserver.com/docs/getting-started
[pm2]: https://pm2.keymetrics.io/docs/usage/quick-start/

## Development

1. Make sure Node is installed.

1. ```sh
   npm i
   ```

1. ```sh
   cp .env.example .env
   ```

   Ideally, even if you don't fill it out, it should still start locally (but some routes might not work).

1. ```sh
   npm run dev
   ```

Service will be available at http://localhost:3000/.

### Important notes

- Be careful about dev dependencies. The production server will omit them, so make sure `deploy.sh`'s dependencies (e.g. esbuild) are not dev.

## Production

TODO: I haven't tested any of this. I'll update this once I try it :)

### Setup

1. Make sure Node is installed.

1. Set up pm2:
   1. ```sh
      npm i -g pm2
      ```

   1. ```sh
      pm2 start ecosystem.config.yml
      ```

   1. ```sh
      pm2 startup
      ```

      This outputs a command. Copy paste and run it.

   1. ```sh
      pm2 save
      ```

1. Set up Caddy:
   1. [Install Caddy.][caddy-install] This should automatically start Caddy as a background service.

   1. ```sh
      caddy reload
      ```

[caddy-install]: https://caddyserver.com/docs/install#debian-ubuntu-raspbian

### Maintenance

```sh
# View past logs
pm2 logs --lines 100

# Real time logs
pm2 logs
```

If you update `ecosystem.config.yml`, run `pm2 reload ecosystem.config.yml`.

If you update `Caddyfile`, run `caddy reload`.

If you update `.env`, run `pm2 reload web-server-2`.

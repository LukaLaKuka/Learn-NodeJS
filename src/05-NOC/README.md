# 05 - NOC

## Setup Proyect

- Install Dependencies:
```bash
npm install
```

- Copy [.env.template](.env.template) to `.env`

- Compose up Databases:
```bash
docker compose up -d
```

- Migrate the database:

```bash
npx prisma migrate dev --name init
```

## List of Commands

- `npm run dev`: Run in development mode.
- `npm run build`: Builds the project to JavaScript in `dist` folder.
- `npm start`: Starts executing the project in build mode.
- `npm run test`: Execute the Tests Suits.
- `npm run test:watch`: Execute the Tests Suits in development mode.
- `npm run test:coverage`: Execute the Tests and generate Coverage Documentation.
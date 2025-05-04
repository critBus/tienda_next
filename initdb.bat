@echo off
npx prisma migrate dev&&npx prisma db seed&&pnpm generate:locations&&pnpm run dev

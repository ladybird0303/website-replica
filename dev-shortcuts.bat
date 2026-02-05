@echo off
REM Quick Development Shortcuts for Windows

doskey r=npm run dev
doskey u=npm run build
doskey o=start http://localhost:3000

echo ✅ Shortcuts loaded!
echo    r = npm run dev ^(Run Dev Server^)
echo    u = npm run build ^(Build Project^)
echo    o = open http://localhost:3000 ^(Open in Browser^)

@echo off
REM ============================================
REM Push to GitHub and Deploy to Vercel
REM ============================================

echo.
echo ============================================
echo  Push to GitHub and Deploy to Vercel
echo ============================================
echo.

cd /d "%~dp0"

echo Step 1: Add GitHub remote...
set /p REPO_URL="Enter your GitHub repository URL: "
git remote add origin %REPO_URL%
echo Done!
echo.

echo Step 2: Push to GitHub...
git push -u origin main
echo Done!
echo.

echo.
echo ============================================
echo  GitHub Push Complete!
echo ============================================
echo.
echo Next: Deploy to Vercel
echo.
echo Option 1: Auto-deploy from GitHub (Recommended)
echo   1. Go to: https://vercel.com/new
echo   2. Import: coding4vinayak/abetworks-nextjs
echo   3. Click Deploy
echo.
echo Option 2: Deploy via CLI
echo   Run: vercel --prod
echo.
echo ============================================
echo.

pause

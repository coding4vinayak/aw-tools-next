@echo off
REM ============================================
REM Create New GitHub Repository for Next.js
REM ============================================

echo.
echo ============================================
echo  Creating New Repository for Next.js
echo ============================================
echo.

cd /d "%~dp0"

echo Step 1: Remove old git configuration...
rmdir /S /Q .git 2>nul
echo Done!
echo.

echo Step 2: Initialize new git repository...
git init
echo Done!
echo.

echo Step 3: Add all files...
git add .
echo Done!
echo.

echo Step 4: Commit files...
git commit -m "Initial commit - Next.js project for Abetworks Tools"
echo Done!
echo.

echo Step 5: Rename branch to main...
git branch -M main
echo Done!
echo.

echo.
echo ============================================
echo  IMPORTANT: Create GitHub Repository First!
echo ============================================
echo.
echo 1. Go to: https://github.com/new
echo 2. Repository name: abetworks-nextjs
echo 3. Description: Abetworks Tools - Next.js Frontend
echo 4. Visibility: Public
echo 5. Click "Create repository"
echo.
echo Then run the command below (replace with your repo URL):
echo.
echo    git remote add origin https://github.com/coding4vinayak/abetworks-nextjs.git
echo    git push -u origin main
echo.
echo ============================================
echo.

pause

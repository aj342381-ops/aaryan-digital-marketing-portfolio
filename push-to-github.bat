@echo off
setlocal
cd /d "%~dp0"
set "GIT_CMD=%~dp0.tools\git\cmd\git.exe"

echo ==========================================================
echo    Aaryan Jangid Portfolio - Push to GitHub Helper
echo ==========================================================
echo.
set /p GH_USER="Enter your GitHub Username: "
if "%GH_USER%"=="" (
    echo No username entered. Exiting.
    pause
    exit /b 1
)

echo.
echo Setting remote origin to:
echo https://github.com/%GH_USER%/aaryan-digital-marketing-portfolio.git
echo.

"%GIT_CMD%" remote remove origin 2>nul
"%GIT_CMD%" remote add origin "https://github.com/%GH_USER%/aaryan-digital-marketing-portfolio.git"
"%GIT_CMD%" branch -M main

echo Pushing project to GitHub...
echo If a browser window appears, click 'Sign in with your browser' to authenticate.
echo.
"%GIT_CMD%" push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==========================================================
    echo [SUCCESS] Your portfolio is now live on GitHub!
    echo URL: https://github.com/%GH_USER%/aaryan-digital-marketing-portfolio
    echo ==========================================================
) else (
    echo.
    echo [NOTE] If you haven't created the repository yet:
    echo 1. Go to https://github.com/new
    echo 2. Create a repository named: aaryan-digital-marketing-portfolio
    echo 3. Run this script again!
)
echo.
pause

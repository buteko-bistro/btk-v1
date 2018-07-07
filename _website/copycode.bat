
@echo %off

set gitmsg=Deployed at %date% %time%

set origin=..\dist\btk-v1
set target=.\buteko-bistro.github.io
set tempgit=..\tempgit



REM Save git data from old folder
cd %target%
mkdir  %tempgit%
xcopy /s .\.git %tempgit%

REM Remove old folder
cd ..
rmdir /s/q %target%

REM Create new folder 
mkdir %target%
cd %target%

REM Save old git data to new folder and delete temp
mkdir .\.git
xcopy /s  %tempgit% .\.git
rmdir /s/q %tempgit%

REM Copy data from build
cd ..
xcopy /s  %origin% %target%


REM Save to git
cd %target%
git add --all
git commit -m %gitmsg%
git push -u origin master
cd ..






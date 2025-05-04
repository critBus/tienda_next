@echo off

:: Set PostgreSQL bin directory and database credentials
set PGPATH="C:\Program Files\PostgreSQL\15\bin"
set PGUSER=postgres
set PGPASSWORD=postgres
set PGDATABASE=tienda_online

:: Drop the database if it exists
echo Dropping database %PGDATABASE% if it exists...
%PGPATH%\dropdb -U %PGUSER% --if-exists %PGDATABASE%

:: Create the database
echo Creating database %PGDATABASE%...
%PGPATH%\createdb -U %PGUSER% %PGDATABASE%

echo Database reset completed successfully!



cmd /k

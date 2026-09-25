#!/bin/bash
set -e

echo "🚀 Aktualizowanie Baza Landing..."

# 1. Pobranie najnowszego kodu
git pull origin main

# 2. Instalacja zależności
npm install

# 3. Budowanie projektu produkcyjnego
npm run build

# 4. Przeładowanie procesu PM2 bez przestoju (zero downtime)
pm2 reload ecosystem.config.cjs || pm2 start ecosystem.config.cjs

# 5. Zapisanie stanu PM2
pm2 save

echo "✅ Baza Landing została pomyślnie zaktualizowana i uruchomiona!"

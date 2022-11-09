# Instrukcja

Skrypty uruchamiające oraz czyszczące są napisane w PowerShell, działają na Windows 10.

- Uruchomienie - w katalogu z plikiem run.ps1
```sh
.\run.ps1
```
- Czyszczenie - w katalogu z plikiem clean_after_run.ps1
```sh
.\clean_after_run.ps1
```

Połączenie serwisów server i client zostało zrealizowane dzięki:
- docker network create test-net (tworzymy sieć dla serwisów)
- docker container run --name server --net test_network -p 3000:3000 -d server-node (przekazujemy test-net jako parametr)
- docker container run --name api-test --net test_network -e BASE_URL="http://server:3000" client-node (przekazujemy test-net jako parametr)

Dzięki temu server i klient są przypisane do tej samej sieci i mogą wysyłać zapytania HTTp między sobą.
# 🎮 Carta, forbice, sasso - parte 2

Miglioriamo il programma "carta, forbice, sasso".

Partiamo dal codice del programma realizzato nella lezione precedente.

```python:line-numbers
import random

scelta_utente = input("Scegli tra carta, forbice e sasso: ")

scelte_possibili = ["carta", "forbice", "sasso"]
scelta_computer = random.choice(scelte_possibili)

print("Scelta del computer: " + scelta_computer)
print("La tua scelta: " + scelta_utente)

if scelta_utente == scelta_computer:
    print("Pareggio!")

else:
    if scelta_utente == "sasso":
        if scelta_computer == "forbice":
            print("Hai vinto! :)")
        else:
            print("Hai perso! :(")

    if scelta_utente == "carta":
        if scelta_computer == "sasso":
            print("Hai vinto! :)")
        else:
            print("Hai perso! :(")

    if scelta_utente == "forbice":
        if scelta_computer == "carta":
            print("Hai vinto! :)")
        else:
            print("Hai perso! :(")
```

Andiamo a migliorare la logica degli if usando l'istruzione `elif` e gli operatori logici.

```python:line-numbers

if scelta_utente == scelta_computer:
    print("Pareggio!")

elif scelta_utente == "sasso" and scelta_computer == "forbice":
    print("Hai vinto! :)")

elif scelta_utente == "carta" and scelta_computer == "sasso":
    print("Hai vinto! :)")

elif scelta_utente == "forbice" and scelta_computer == "carta":
    print("Hai vinto! :)")

else:
    print("Hai perso! :(")
```

Andiamo a migliorare ulteriormente il programma: cosa succede se l'utente sbaglia a scrivere la sua scelta?

Per esempio, se l'utente scrive "forbici" invece di "forbice", il programma non riconosce la scelta e stampa "Hai
perso! :(".

Per risolvere questo problema, possiamo aggiungere un controllo per verificare che la scelta dell'utente sia tra quelle
possibili.

```python:line-numbers
if scelta_utente not in scelte_possibili:
    print("Scelta non valida!")
    exit()
```

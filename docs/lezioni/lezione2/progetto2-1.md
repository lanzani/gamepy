# 🎮 Carta, forbice, sasso - parte 1

## Introduzione

In questo progetto, programmerai il gioco "carta, forbice, sasso".

Il programma chiederà all'utente di scegliere tra "carta", "forbice" e "sasso". Poi, il programma sceglierà casualmente
una delle tre opzioni e stamperà chi ha vinto.

Regole:

- La carta vince sul sasso
- Il sasso vince sulle forbici
- Le forbici vincono sulla carta
- Se il programma e l'utente scelgono la stessa opzione, è un pareggio

## Input

Il programma chiederà all'utente di scegliere tra "carta", "forbice" e "sasso".

## Output

Il programma stamperà chi ha vinto.

## Passo 1

::: info Richiesta
Il programma chiederà all'utente di scegliere tra "carta", "forbice" e "sasso".
:::

Per fare questo, useremo la funzione `input()` e quello che l'utente scrive va salvato in una variabile
chiamata `scelta_utente`.

```python:line-numbers
scelta_utente = input("Scegli tra 'carta', 'forbice' e 'sasso': ")
```

## Passo 2

::: info Richiesta
Il programma sceglierà casualmente una delle tre opzioni.
:::

Il programma può scegliere a caso tra le tre opzioni, ma queste tre opzioni devono essere specificate in una *lista*.

```python:line-numbers
import random

scelte_possibili = ["carta", "forbice", "sasso"]

scelta_computer = random.choice(scelte_possibili)
```

Ora stamperemo la scelta del computer e quella dell'utente.

```python:line-numbers
print("Scelta del computer: " + scelta_computer)
print("La tua scelta: " + scelta_utente)
```

## Passo 3

::: info Richiesta
Il programma decide e stampa chi ha vinto.
:::

Per decidere chi ha vinto, useremo le istruzioni `if-else`.

```python:line-numbers
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


# 🎉 Congratulazioni! 
Hai realizzato il gioco "carta, forbice, sasso"!


# 🎮 Progetto Quiz! - Parte 2

## Introduzione

Per migliorare il programma quiz e renderlo più interessante andiamo ad aggiungere un punteggio e altre domande!

Ogni volta che il giocatore risponde correttamente a una domanda, il punteggio aumenta di 1. Alla fine del quiz, il
programma stamperà il punteggio del giocatore.

Procediamo per passi, come abbiamo fatto prima.

## Passo 1

Riprendiamo il programma di prima:

```python:line-numbers
risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")

risposta = input("Qual è la capitale della Francia? ")

if risposta == "parigi":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")
```

Aggiungete anche le vostre altre domande.

## Passo 2

Ora dobbiamo aggiungere un punteggio. Creiamo una variabile chiamata `punteggio` e inizializziamola a 0.

```python:line-numbers {1}
punteggio = 0

risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")

risposta = input("Qual è la capitale della Francia? ")

if risposta == "parigi":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")
    
```

Bene, ora dobbiamo aggiornare il punteggio ogni volta che l'utente risponde correttamente a una domanda. Per fare
questo,
dobbiamo aggiungere 1 al punteggio.

```python:line-numbers {7,15}
punteggio = 0

risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

risposta = input("Qual è la capitale della Francia? ")

if risposta == "parigi":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")
```

## Passo 3

Ora dobbiamo stampare il punteggio dell'utente alla fine del quiz.

```python:line-numbers {19}
punteggio = 0

risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

risposta = input("Qual è la capitale della Francia? ")

if risposta == "parigi":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

print("Il tuo punteggio è: ", punteggio)

```

# 🎉 Congratulazioni!

Ora questo gioco è molto più divertente! 👏
# 🎮 Progetto Quiz! - Parte 2

## Introduzione

Per migliorare il programma quiz e renderlo più interessante andiamo ad aggiungere un punteggio ed altre domande!

Ogni volta che l'utente risponde correttamente a una domanda, il punteggio aumenta di 1. Alla fine del quiz, il
programma stamperà il punteggio dell'utente.

Se l'utente risponde correttamente a tutte le domande, il programma stamperà "Complimenti! Hai risposto correttamente a
tutte le domande!". Altrimenti, stamperà "Non hai risposto correttamente a tutte le domande".

Procediamo per passi, come abbiamo fatto prima.

## Passo 1

Riprendiamo il programma di prima:

```python:line-numbers
risposta = input("Qual'è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")

risposta = input("Qual'è la capitale della Francia? ")

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

risposta = input("Qual'è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")

risposta = input("Qual'è la capitale della Francia? ")

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

risposta = input("Qual'è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

risposta = input("Qual'è la capitale della Francia? ")

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

risposta = input("Qual'è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

risposta = input("Qual'è la capitale della Francia? ")

if risposta == "parigi":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

print("Il tuo punteggio è: ", punteggio)

```

## Passo 4

Ora dobbiamo stampare un messaggio diverso a seconda del punteggio dell'utente.

Se l'utente risponde correttamente a tutte le domande, stamperemo "Complimenti! Hai risposto correttamente a tutte le
domande!". Altrimenti, stamperemo "Non hai risposto correttamente a tutte le domande".

Ma come possiamo fare questo? Con una istruzione `if`!

Ci serve però un modo per far sapere al programma quante domande ci sono in totale. Possiamo usare una variabile per
questo.

```python:line-numbers {2,21-25}
punteggio = 0
domande_totali = 2

risposta = input("Qual'è la capitale dell'Italia? ")
...

```

Ora possiamo usare la variabile `domande_totali` per stampare il messaggio corretto.

```python:line-numbers {22-25}
punteggio = 0
domande_totali = 2

risposta = input("Qual'è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

risposta = input("Qual'è la capitale della Francia? ")

if risposta == "parigi":
    print("Risposta esatta!")
    punteggio = punteggio + 1
else:
    print("Risposta sbagliata!")

print("Il tuo punteggio è: ", punteggio)

if punteggio == domande_totali:
    print("Complimenti! Hai risposto correttamente a tutte le domande!")
else:
    print("Non hai risposto correttamente a tutte le domande. Riprova!")

```

# 🎉 Congratulazioni! 
Ora questo gioco è molto più divertente! 👏
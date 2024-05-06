# Indovina il numero

In questo progetto creeremo un gioco in cui il computer sceglie un numero casuale e il giocatore deve indovinarlo.

## Passo 1: Creare un numero casuale

Per creare un numero casuale, dobbiamo importare il modulo `random`.

```python

import random

scatola_numero_da_indovinare = random.randint(1, 100)

```

## Passo 2: Chiedere all'utente di indovinare il numero

Ora chiediamo all'utente di indovinare il numero.

```python

scatola_numero_giocatore = int(input("Indovina il numero (da 1 a 100): "))

```

## Passo 3: Controllare se il numero è corretto

Ora dobbiamo controllare se il numero indovinato dall'utente è uguale al numero generato casualmente.

```python

if scatola_numero_giocatore == scatola_numero_da_indovinare:
    print("Complimenti! Hai indovinato il numero.")

if scatola_numero_giocatore > scatola_numero_da_indovinare:
    print("Il numero da indovinare è più piccolo.")
   
if scatola_numero_giocatore < scatola_numero_da_indovinare:
    print("Il numero da indovinare è più grande.")

```

## Passo 4: Ripetere il gioco

Così com'è il gioco chiede al giocatore di indovinare il numero una sola volta. Per rendere il gioco più interessante,
possiamo farlo ripetere finché il giocatore non indovina il numero.

Per fare ciò, possiamo mettere il codice all'interno di un ciclo `while True`, così che ci chieda di indovinare il
numero all'infinito. Ricordiamoci però di uscire dal ciclo quando il giocatore indovina il numero, e per farlo possiamo
mettere l'istruzione `break` dentro al primo `if`.

```python

while True:  
    scatola_numero_giocatore = int(input("Indovina il numero (da 1 a 100): "))
    
    if scatola_numero_giocatore == scatola_numero_da_indovinare:
        print("Complimenti! Hai indovinato il numero.")
        break  # [!code highlight]
    
    if scatola_numero_giocatore > scatola_numero_da_indovinare:
        print("Il numero da indovinare è più piccolo.")
    
    if scatola_numero_giocatore < scatola_numero_da_indovinare:
        print("Il numero da indovinare è più grande.")

```

## Passo 5: Tenere conto dei tentativi

Per rendere il gioco ancora più interessante, possiamo tenere conto dei tentativi fatti dal giocatore per indovinare il
numero.

Per fare ciò, creiamo una scatola `scatola_tentativi` e inizializziamola a 0. Ad ogni tentativo incrementiamo il valore di questa scatola di 1.

```python

scatola_tentativi = 0

while True:  
    scatola_numero_giocatore = int(input("Indovina il numero (da 1 a 100): "))
    
    scatola_tentativi += 1  # [!code highlight]
    
    if scatola_numero_giocatore == scatola_numero_da_indovinare:
        print("Complimenti! Hai indovinato il numero.")
        print("Tentativi:")
        print(scatola_tentativi)
        break
    
    if scatola_numero_giocatore > scatola_numero_da_indovinare:
        print("Il numero da indovinare è più piccolo.")
    
    if scatola_numero_giocatore < scatola_numero_da_indovinare:
        print("Il numero da indovinare è più grande.")

```
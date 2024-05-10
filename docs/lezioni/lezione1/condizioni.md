# Condizioni

Ora inizia la parte interessante: le condizioni.

## Cosa è una condizione?

Una "condizione" è come una domanda che viene fatta al computer.

La risposta di queste domande può essere solo **vero** o **falso**, non ci può essere altra risposta. Se una domanda ha
una risposta diversa da vero o falso, allora non è una "condizione" e il computer non capirà.

L'abilità del programmatore sta nel fare le **domande giuste** al computer.

Esempi di domande "condizione":
> "5 è maggiore di 3?"

> "il tuo nome è federico?"

> "oggi è lunedì?"

Tutte queste domande possono essere risposte con "vero" o "falso".

Invece queste altre domande non sono condizioni:
> "quanto fa 5 + 3?"

> "come ti chiami?"

> "che giorno è oggi?"

### Ma a cosa servono le condizioni?

Le condizioni sono un modo per fra prendere decisioni a un programma, in un certo senso le condizioni lo fanno
diventare "intelligente".

## If

L'istruzione per le condizioni è l'`if`. In italiano si traduce come "se". L'if valuta una condizione e possono
succedere le seguenti cose:

- Se la condizione è **vera**, il blocco di codice sotto l'istruzione if viene eseguito
- Se la condizione è **falsa**, il blocco di codice viene saltato e l'esecuzione del programma continua dopo l'
  istruzione if

```python
if condizione:
    # Blocco di codice che viene eseguito solo se la condizione è vera
    istruzione1
    istruzione2
    ...
    
```

Attento agli spazi! In Python gli spazi sono importanti, se non si mettono correttamente il programma non
funzionerà.

::: tip
In Python si usano 4 spazi per spostare il codice a destra. Alcuni editor di testo spostano automaticamente il codice.
:::

Ora proviamo a scrivere un programma che saluti soltanto chi si chiama federico.

La condizione è **_"il tuo nome è federico?"_**.

```python
if il tuo nome è federico?:
   print("Ciao Federico!")   
```

Come si può scrivere sotto forma di codice la domanda **_"il tuo nome è federico?"_**?

```
il tuo nome è federico? ➡️ nome == "federico"
```

Quindi il programma diventa:

```python
nome = "federico"

if nome == "federico":
    print("Ciao Federico!")
```

L'istruzione `if` si legge così:

> "**Se** il valore di `nome` è uguale alla stringa `federico` **allora** esegui il blocco di codice sotto `if`".

::: tip
Ricorda che negli if bisogna usare `==` e non `=`.
:::

Questo programma stampa:

```
Ciao Federico!
```

Se invece cambiamo il nome in "mario", il programma non stamperà nulla perché la condizione è falsa.

```python

nome = "mario"

if nome == "federico":
    print("Ciao Federico!")
```

## If-else

A volte si vuole eseguire un blocco di codice se la condizione è vera e un altro blocco di codice se la condizione è
falsa. Ossia:

"Se succede una cosa, fai questo, altrimenti fai quest'altro."

In questo caso si può usare l'istruzione `if-else`. In italiano si traduce come "se-altrimenti".

```python
nome = "federico"

if nome == "federico":
    print("Ciao Federico!")
else:
    print("Non ti conosco")
```

L'istruzione `if-else` si legge così:

> "**Se** il valore di `nome` è uguale alla stringa `federico` **allora** esegui il blocco di codice sotto `if`,
> **altrimenti** esegui il blocco di codice sotto `else`".

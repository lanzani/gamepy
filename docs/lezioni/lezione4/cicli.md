# 📘 Cicli

Nella pagina precedente la tartaruga ha attraversato un labirinto grazie alle istruzioni che le abbiamo dato.

Le tre parti del labirinto (verde, blu e rossa) però sono identiche e per superare ciascuna parte servono le stesse
istruzioni.

Esiste un modo per evitare di ripetere lo stesso codice tre volte?

Sì esiste: quando vogliamo ripetere lo stesso codice più volte possiamo usare un _ciclo for_.

Un ciclo for è un blocco di codice che viene eseguito tante volte quanto specificato.

Per esempio, se vogliamo far disegnare alla tartaruga un quadrato, prima facevamo così:

```python:line-numbers
import turtle

tartaruga = turtle.Turtle()

tartaruga.forward(100)
tartaruga.right(90)
tartaruga.forward(100)
tartaruga.right(90)
tartaruga.forward(100)
tartaruga.right(90)
tartaruga.forward(100)
tartaruga.right(90)
```

Il codice disegna un quadrato, ma ripetiamo le stesse istruzioni quattro volte.

Con un ciclo for possiamo scrivere lo stesso codice in modo più compatto. Per prima cosa identifichiamo le istruzioni che ripetiamo:
- `tartaruga.forward(100)`
- `tartaruga.right(90)`

Poi scriviamo un ciclo for che ripete queste istruzioni quattro volte:

```python:line-numbers
import turtle

tartaruga = turtle.Turtle()

for i in range(4): 
  tartaruga.forward(100) 
  tartaruga.right(90) 
```

Il risultato è lo stesso, ma il codice è più facile da scrivere.


# 📘 Cicli

Nelle lezioni precedenti abbiamo visto un modo per far ripetere delle istruzioni all'infinito: il ciclo `while True`.

Esiste un modo per ripetere certe istruzioni un certo numero di volte?

Facciamo un esempio: se vogliamo far disegnare alla tartaruga un quadrato, si può fare così:

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

Il codice disegna un quadrato, è vero, ma ripetiamo le stesse istruzioni quattro volte. Possiamo scrivere solo le
istruzioni necessarie per disegnare un lato del quadrato e poi ripeterle quattro volte?

Si, si può fare, ma non con un ciclo `while True`. Questo perchè il ciclo `while True` ripete le istruzioni
all'infinito, mentre noi vogliamo ripeterle un numero di volte preciso, ossia quatto nel caso del quadrato.

Iniziamo con l'identificare le istruzioni che vengono ripetute:

- `tartaruga.forward(100)`
- `tartaruga.right(90)`

Una volta identificate le istruzioni ripetute possiamo scrivere un ciclo `for` attorno a queste:

```python:line-numbers
import turtle

tartaruga = turtle.Turtle()

for i in range(4): 
  tartaruga.forward(100) 
  tartaruga.right(90) 
```

Il ciclo `for` ripete le istruzioni all'interno di esso un numero di volte pari al valore specificato tra le parentesi
tonde dopo la parola `range`.

Nel nostro caso, `range(4)` significa che le istruzioni all'interno del ciclo `for` vengono ripetute quattro volte, e
dunque verrà disegnato un quadrato.

Si legge: 
> "per 4 volte, esegui le seguenti istruzioni".

Il risultato è lo stesso, ma il codice è più compatto e più facile da scrivere.


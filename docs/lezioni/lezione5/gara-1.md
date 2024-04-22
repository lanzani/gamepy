# Gara di Tartarughe

In questo progetto creeremo un programma che simula una gara di corsa tra tartarughe.

A gareggiare ci potranno essere quante tartarughe desideriamo, inizieremo con due ma potremo aggiungerne altre in
seguito.

Il percorso della gara è un rettilineo, le tartarughe partiranno da un punto iniziale e dovranno raggiungere un
traguardo. La prima tartaruga a raggiungere il traguardo sarà la vincitrice.

## Prepariamo il programma

Andiamo sul sito [trinket.io/turtle](https://trinket.io/turtle) e creiamo un nuovo file chiamato `campo.py`.
Nel nuovo file incolliamo il seguente codice:

```python
import turtle

myPen = turtle.Turtle()
myPen.hideturtle()

turtle.Screen().bgcolor("green")
myPen.shape("arrow")
myPen.pensize(2)
myPen.speed(0)

myPen.color("white")
myPen.write("Turtle Race!", align='center',  font=("Arial", 20, "normal"))

myPen.penup()
myPen.goto(-160, 150)
myPen.pendown()
myPen.goto(-160, 0)

myPen.penup()
myPen.goto(180, 150)
myPen.pendown()
myPen.goto(180, 0)
```

Torniamo ora sul file `main.py` e diciamo a python di usare la funzionalità tartaruga, campo e random.

```python
import turtle, campo, random
```

## Step 1: Creare le tartarughe

Ora creiamo la prima tartaruga che parteciperà alla gara.

```python
tartaruga_rossa = turtle.Turtle()
tartaruga_rossa.shape('turtle')
tartaruga_rossa.color('red')
tartaruga_rossa.pensize(2)
tartaruga_rossa.penup()
tartaruga_rossa.goto(-180, 140)
tartaruga_rossa.pendown()
```

Creiamo anche la seconda tartaruga.

```python
tartaruga_blu = turtle.Turtle()
tartaruga_blu.shape('turtle')
tartaruga_blu.color('blue')
tartaruga_blu.pensize(2)
tartaruga_blu.penup()
tartaruga_blu.goto(-180, 100)
tartaruga_blu.pendown()
```

## Step 2: Far muovere le tartarughe

Ora facciamo muovere le tartarughe in avanti di un numero casuale di passi.

```python
import random

while True:
  tartaruga_rossa.forward(random.randint(1,8))
  tartaruga_blu.forward(random.randint(1,8))
```

## Step 3: Determinare il vincitore

Per determinare il vincitore, dobbiamo controllare se una delle due tartarughe ha raggiunto la fine del percorso.

Dentro al ciclo `while` aggiungiamo il seguente codice:

```python
if tartaruga_rossa.xcor() >= 180:
  print("Ha vinto la tartaruga rossa!")
  break

if tartaruga_blu.xcor() >= 180:
  print("Ha vinto la tartaruga blu!")
  break
```

In modo da avere:

```python
while True:
    tartaruga_rossa.forward(random.randint(1,8))
    tartaruga_blu.forward(random.randint(1,8))
    
    if tartaruga_rossa.xcor() >= 180:
        print("Ha vinto la tartaruga rossa!")
        break
    
    if tartaruga_blu.xcor() >= 180:
        print("Ha vinto la tartaruga blu!")
        break
```

Se vogliamo scrivere il nome della tartaruga vincitrice sullo schermo, possiamo farlo con il seguente codice:

```python
while True:
    tartaruga_rossa.forward(random.randint(1,8))
    tartaruga_blu.forward(random.randint(1,8))
    
    if tartaruga_rossa.xcor() >= 180:
        print("Ha vinto la tartaruga rossa!")
        campo.myPen.write("Tartaruga rossa! ", align='right')  # [!code highlight]
        break
    
    if tartaruga_blu.xcor() >= 180:
        print("Ha vinto la tartaruga blu!")
        campo.myPen.write("Tartaruga blu! ", align='right')  # [!code highlight]
        break
```

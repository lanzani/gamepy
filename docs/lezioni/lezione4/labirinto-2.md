# Labirinto 2

Riprendiamo il gioco del labirinto che abbiamo programmato nella lezione precedente.

In quella lezione abbiamo fatto muovere la tartaruga grazie a delle istruzioni scritte nel codice. Ora invece proviamo a
far muovere la tartaruga dicendole tramite input la direzione in cui muoversi e la distanza da percorrere.

## Prepariamo il programma

Andiamo sul sito [trinket.io/turtle](https://trinket.io/turtle) e creiamo un nuovo file chiamato `labirinto.py`.
Nel nuovo file incolliamo il seguente codice:

```python:line-numbers
import turtle

screen = turtle.Screen()
screen.tracer(0)

mazeWidth=150

myMaze = turtle.Turtle()
myMaze.width(5)
myMaze.hideturtle()

myMaze.speed(0)

myMaze.penup()
myMaze.goto(-mazeWidth,100)


def drawMazeSection(color):
  
  myMaze.color(color)
  myMaze.pendown()
  myMaze.forward(mazeWidth)
  myMaze.penup()
  myMaze.forward(40)
  myMaze.pendown()
  myMaze.forward(mazeWidth)
  myMaze.right(90)
  myMaze.forward(100)
  myMaze.right(90)
  myMaze.forward(mazeWidth)
  myMaze.penup()
  myMaze.forward(40)
  myMaze.pendown()
  myMaze.forward(mazeWidth)
  myMaze.right(90)
  myMaze.forward(100)
  myMaze.right(90)
  x,y = myMaze.pos()
  myMaze.penup()  
  myMaze.goto(x, y-50)
  myMaze.pendown()
  myMaze.forward(30)
  myMaze.penup()
  myMaze.forward(40)
  myMaze.pendown()
  myMaze.forward(200)
  myMaze.penup()
  myMaze.forward(40)
  myMaze.pendown()
  myMaze.forward(30)
  myMaze.penup()
  myMaze.goto(x,y-110)

for color in ["#FF0000"]:
  drawMazeSection(color)
  
screen.tracer(1)
```

Torniamo sul file `main.py` e incolliamo quanto segue:

```python:line-numbers
import turtle
import labirinto

tartaruga = turtle.Turtle()
tartaruga.speed(0)
tartaruga.shape('turtle')
tartaruga.penup()
tartaruga.goto(20,-180)
tartaruga.pendown()
tartaruga.left(90)
tartaruga.speed(3)

# Inizia da qui sotto:

```

Ora dobbiamo scrivere un programma che permetta di far muovere la tartaruga attraverso il labirinto secondo le nostre
istruzioni.

## Muovere la tartaruga

Per far muovere la tartaruga, dobbiamo fornirle:

- la direzione in cui deve andare
- la distanza che deve percorrere

Per prima cosa chiediamo all'utente in che direzione vuole andare. Le direzioni possibili sono:

- avanti
- indietro
- destra
- sinistra

Associamo una lettera per ciascuna direzione:

- `a` per avanti
- `i` per indietro
- `d` per destra
- `s` per sinistra

Stiamo di fatto creando i controlli del nostro gioco.

Chiediamo all'utente la direzione in cui vuole andare e mettiamo la sua risposta in una scatola chiamata `direzione`.
Le possibili risposte sono `a`, `i`, `d` e `s`; come abbiamo definito sopra.

```python
direzione = input("In che direzione vuoi andare?")
```

Ora dobbiamo chiedere all'utente i passi che vuole far percorrere alla tartaruga.

```python
numero_passi = input("Quanti passi vuoi fare?")
```

Adesso che abbiamo queste informazioni dobbiamo controllare il contenuto della scatola `direzione` e fare muovere la
tartaruga in quella direzione di tanti passi quanti indicati nella scatola `numero_passi`.

```python
if direzione =="a":
  tartaruga.forward(numero_passi)
 
if direzione =="i":
    tartaruga.backward(numero_passi)

if direzione =="d":
    tartaruga.right(90)
    tartaruga.forward(numero_passi)

if direzione =="s":
    tartaruga.left(90)
    tartaruga.forward(numero_passi)
    
```

Se proviamo a eseguire il programma ci verrà chiesto in che direzione vogliamo andare e quanti passi vogliamo fare una
sola volta. Questo non è sufficiente per attraversare il labirinto. 

Per far si che il programma possa ripetere le domande più volte, dobbiamo mettere gli _input_ e gli `if` in un ciclo `while True`.

Il ciclo `while True` ripete all'infinito tutte le istruzioni al suo interno.

```python
while True:
  direzione = input("in che direzione vuoi andare?")
  numero_passi = int(input("quanti passi vuoi fare?"))
  
  if direzione =="a":
    tartaruga.forward(numero_passi)
 
  if direzione =="i":
    tartaruga.backward(numero_passi)

  if direzione =="d":
    tartaruga.right(90)
    tartaruga.forward(numero_passi)

  if direzione =="s":
    tartaruga.left(90)
    tartaruga.forward(numero_passi)
```

Se proviamo a eseguire il programma ora, ci verrà chiesto in che direzione vogliamo andare e quanti passi vogliamo fare
all'infinito, permettendoci dunque di attraversare il labirinto.

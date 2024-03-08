# Input

Ora che sappiamo come creare e modificare le variabili, possiamo chiedere all'utente di inserire un valore per una
variabile. Per fare ciò, possiamo usare la funzione `input()`:

```python
nome = input("Inserisci il tuo nome: ")
print(nome)
```

In questo esempio, chiediamo all'utente di inserire il suo nome e lo memorizziamo nella variabile `nome`. Poi
lo stampiamo a schermo.

Quando eseguiamo questo programma, vedremo qualcosa del genere:

```
Inserisci il tuo nome: Mario
Mario
```

Come puoi vedere, il programma chiede all'utente di inserire il suo nome e poi lo stampa a schermo.

Se vogliamo chiedere all'utente di inserire più di un valore, possiamo farlo in questo modo:

```python
nome = input("Inserisci il tuo nome: ")
cognome = input("Inserisci il tuo cognome: ")
print(nome)
print(cognome)
```

Ora, quando eseguiamo questo programma, vedremo qualcosa del genere:

```
Inserisci il tuo nome: Mario
Inserisci il tuo cognome: Rossi
Mario
Rossi
```

## 🧩 Esercizio 1.5

Scrivi un programma che chieda all'utente di inserire il suo nome e la sua età. Poi, stampa a schermo il suo nome e la
sua età in una sola riga.

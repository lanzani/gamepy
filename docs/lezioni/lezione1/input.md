# Input

Ora che sappiamo come creare e modificare le variabili, possiamo chiedere all'utente di inserire qualcosa in una
scatola. Per fare ciò, possiamo usare la funzione `input()`:

```python
nome = input("Inserisci il tuo nome: ")
print(nome)
```

In questo esempio, la prima istruzione chiede all'utente di inserire il suo nome che viene inserito nella scatola
chiamata `nome`. Poi nella seconda istruzione stampiamo a schermo il contenuto della scatola.

Quando eseguiamo questo programma, vedremo qualcosa del genere:

```
Inserisci il tuo nome: Mario
Mario
```

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

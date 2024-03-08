# Variabili
## Variabili
Immagina che una variabile sia come una scatola nella quale puoi mettere qualsiasi cosa tu voglia: giocattoli, cibo,
vestiti, qualsiasi cosa! Ora, in Python, una variabile è simile a questa scatola. Può contenere diversi tipi di dati,
come numeri, parole, persino liste di cose! Ecco un esempio di come creare una variabile:

```python
nome = "Mario"
```

In questo esempio, abbiamo creato una variabile chiamata `nome` e abbiamo messo al suo interno la parola "Mario".

Come puoi vedere, creare una variabile è molto semplice: basta scrivere un nome per la variabile e usare il simbolo `=`
per assegnare un valore.

Se vogliamo vedere il valore della variabile, possiamo farlo stampando il suo nome:

```python
print(nome)
```

Ora, cosa succede se vogliamo cambiare il valore della variabile? È molto semplice:

```python
nome = "Mario"
nome = "Luigi"
```

In questo esempio, abbiamo cambiato il valore della variabile `nome` da "Mario" a "Luigi".

Se vogliamo vedere il nuovo valore della variabile, possiamo farlo stampando il suo nome:

```python
print(nome)
```

Il risultato sarà:

```
Luigi
```

Questo perché abbiamo cambiato il valore della variabile `nome` da "Mario" a "Luigi".

Le variabili possono contenere diversi tipi di dati, come numeri, parole, liste e molto altro. Vedremo più avanti come
utilizzare le variabili con i diversi tipi di dati.


## Input

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


Per stampare tutto in una sola riga, possiamo usare il simbolo `+` per unire le parole:

```python
nome = input("Inserisci il tuo nome: ")
cognome = input("Inserisci il tuo cognome: ")
print("Ciao", nome + " " + cognome)
```

Ora, quando eseguiamo questo programma, vedremo qualcosa del genere:

```
Inserisci il tuo nome: Mario
Inserisci il tuo cognome: Rossi
Ciao Mario Rossi
```



# 🎮 Progetto Quiz! - Parte 1

## Introduzione

In questo progetto, scriverai un programma quiz che chiede all'utente di rispondere a delle domande.

Il programma pone all'utente delle domande e l'utente deve rispondere. Se la risposta è corretta, il programma
stampa "Risposta esatta!". Se la risposta dell'utente è sbagliata, il programma stamperà "Risposta sbagliata!".

## Input

Il programma chiederà all'utente di rispondere a delle domande.

## Output

Il programma stamperà se le risposte sono giuste o sbagliate.

## Passo 1

::: info Richiesta
Il programma pone all'utente delle domande e l'utente deve rispondere.
:::

Quindi, come prima cosa dobbiamo chiedere all'utente di rispondere a una domanda. Per fare questo, useremo la funzione
`input()` e quello che l'utente scrive va salvato in una variabile chiamata `risposta`.

```python:line-numbers
risposta = input("Qual è la capitale dell'Italia? ")
```


## Passo 2
::: info Richiesta
Se la risposta dell'utente è corretta, il programma stamperà "Risposta esatta!".
:::

Per controllare se la risposta dell'utente è corretta, useremo un'istruzione `if`. Se la risposta dell'utente è uguale a
"Roma", stamperemo "Risposta esatta!".

```python:line-numbers {3-4}
risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "Roma":
    print("Risposta esatta!")
```

## Passo 3
::: info Richiesta
Se la risposta dell'utente è sbagliata, il programma stamperà "Risposta sbagliata!".
:::

Per controllare se la risposta dell'utente è sbagliata, useremo un'istruzione `if-else`. Se la risposta dell'utente è
uguale a "Roma", stamperemo "Risposta esatta!", altrimenti stamperemo "Risposta sbagliata!".

```python:line-numbers  {5-6}
risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "roma":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")
```

## Mettiamo tutto assieme!

Ora prova ad aggiungere altre domande e al programma. Ad esempio:

```python:line-numbers
risposta = input("Qual è la capitale dell'Italia? ")

if risposta == "Roma":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")

risposta = input("Qual è la capitale della Francia? ")

if risposta == "Parigi":
    print("Risposta esatta!")
else:
    print("Risposta sbagliata!")
```

E così via...

# 🎉 Congratulazioni! 
Hai realizzato il tuo primo gioco! Ma un secondo, non è molto divertente... 🤔 manca qualcosa... il punteggio! 🎉

Nel prossimo progetto, aggiungeremo il punteggio al nostro gioco, prima però dobbiamo vedere come funzionano i numeri! 🚀

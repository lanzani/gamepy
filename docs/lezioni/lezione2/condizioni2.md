# Altre condizioni!

## if-elif-else

Abbiamo visto come utilizzare l'istruzione `if` per eseguire un blocco di codice se una condizione è vera. Ma cosa
succede se abbiamo più di una condizione da verificare? In questo caso possiamo utilizzare l'istruzione `elif` (che sta
per "else if") per verificare ulteriori condizioni.

In italiano possiamo tradurre `elif` come "altrimenti se".

Vediamo un esempio:

```python
voto = 7

if voto >= 8:
    print("Voto ottimo!")
elif voto >= 6:
    print("Voto sufficiente")
else:
    print("Voto insufficiente")
```

La sequenza di condizioni si legge così:
> **Se** il voto è maggiore o uguale a 8, stampa "Voto ottimo!". **Altrimenti se** il voto è maggiore o uguale a 6,
> stampa "
> Voto sufficiente". **Altrimenti**, stampa "Voto insufficiente".

## Operatori logici

Gli operatori logici ci permettono di combinare più condizioni.

- `and`: restituisce `True` se entrambe le condizioni sono vere
- `or`: restituisce `True` se almeno una delle condizioni è vera

Vediamo un esempio:

```python
voto = 7

if voto >= 6 and voto <= 8:
    print("Voto sufficiente")
else:
    print("Voto insufficiente")
```

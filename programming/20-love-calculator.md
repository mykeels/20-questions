# Love Calculator

Request the first person's name. e.g. `Bola`

Request the second person's name. e.g. `Bisi`

Display `The love percentage is <Result>%`.

## Love Percentage Algorithm

- Concatenate both names, separated by `"loves"`, in lowercase e.g. `bolalovesbisi`

- Count the occurrence of each letter/character in the concatenation result. E.g.

```txt
b => 2
o => 2
l => 2
a => 1
...
```

to get `2221221122222`

- Sum the leftmost and rightmost number i.e. `2` and `2` to get `4`. Place it in a string.

- Do the same with the next leftmost and rightmost number, until you get to the middle. 

  - If there are two numbers in the middle, sum them.

  - Else, use the middle number.

- With our example, we should get `4443431`

- Repeat till we only have two numbers. e.g.

```txt
5783
815
131
23
```

- The love percentage is `23%`

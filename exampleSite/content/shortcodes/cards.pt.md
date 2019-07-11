---
title: "Cartões"
weight: 11
tags:
  - shortcodes
---

# Cards

## Exemplos

{{% cards %}}
{{% card link="/basic" %}}
{{< icon icon="fa-tasks" >}}
#### Básico

Onde começar
{{% /card %}}

{{% card link="/markdown" %}}
{{< icon icon="fa-pen-square" >}}
#### Markdown

Exemplos de markdown usando o tema
{{% /card %}}

{{% card link="/shortcodes" %}}
{{< icon icon="fa-feather" >}}
#### Shortcodes

Funcionalidades customizadas do tema
{{% /card %}}
{{% /cards %}}

## Uso

```
# Com 3 cards por linha em telas médias e maiores:

{{%/* cards */%}}
{{%/* card link="/link1" */%}}
{{</* icon icon="fa-tasks" */>}}
#### Card 1

Descrição do card
{{%/* /card */%}}

{{%/* card link="/link2" */%}}
{{</* icon icon="fa-pen-square" */>}}
#### Card 2

Descrição do card
{{%/* /card */%}}
{{%/* /cards */%}}
```

```
# Com 4 cards por linha em telas médias e maiores:

{{%/* cards */%}}
{{%/* card link="/link1" size="4" */%}}
{{</* icon icon="fa-tasks" */>}}
#### Card 1

Descrição do card
{{%/* /card */%}}

{{%/* card link="/link2" size="4" */%}}
{{</* icon icon="fa-pen-square" */>}}
#### Card 2

Descrição do card
{{%/* /card */%}}
{{%/* /cards */%}}
```

---
title: "Cards"
weight: 11
tags:
  - shortcodes
---

# Cards

## Examples

{{% cards %}}
{{% card link="/basic" %}}
{{< icon icon="fa-tasks" >}}
#### Basic

Were to start
{{% /card %}}

{{% card link="/markdown" %}}
{{< icon icon="fa-pen-square" >}}
#### Markdown

Markdown syntax examples using theme
{{% /card %}}

{{% card link="/shortcodes" %}}
{{< icon icon="fa-feather" >}}
#### Shortcodes

Custom theme features
{{% /card %}}
{{% /cards %}}

## Usage

```
# With 3 cards per row on medium screens and up:

{{%/* cards */%}}
{{%/* card link="/link1" */%}}
{{</* icon icon="fa-tasks" */>}}
#### Card 1

Card description
{{%/* /card */%}}

{{%/* card link="/link2" */%}}
{{</* icon icon="fa-pen-square" */>}}
#### Card 2

Card 2 description
{{%/* /card */%}}
{{%/* /cards */%}}
```

```
# With 4 cards per row on medium screens and up:

{{%/* cards */%}}
{{%/* card link="/link1" size="4" */%}}
{{</* icon icon="fa-tasks" */>}}
#### Card 1

Card description
{{%/* /card */%}}

{{%/* card link="/link2" size="4" */%}}
{{</* icon icon="fa-pen-square" */>}}
#### Card 2

Card 2 description
{{%/* /card */%}}
{{%/* /cards */%}}
```

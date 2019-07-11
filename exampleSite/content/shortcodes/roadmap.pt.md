---
title: "Plano de versões"
weight: 40
tags:
  - shortcodes
---

# Plano de versões

## Exemplos

{{< roadmap >}}
{{% roadmap-version %}}
### 1.0
#### Tema

* [x] Item completado
* [ ] Item em andamento
* Item planejado

#### Funcionalidades

* [x] Roadmap
* [x] Changelog
* [x] Todo Lists
{{% /roadmap-version %}}

{{% roadmap-version %}}
### 1.1
#### Tema

* [x] Item completado
* [ ] Item em andamento
* Item planejado

#### Funcionalidades

* [x] Roadmap
* [x] Changelog
* [x] Todo Lists
{{% /roadmap-version %}}
{{< /roadmap >}}

## Uso

```
{{</* roadmap */>}}
{{%/* roadmap-version */%}}
### Versão 1
#### Seção 1

* [x] Item completado
* [ ] Item em andamento
* Item planejado

#### Seção 2

* [x] Item 1
* [x] Item 2
* [x] Item 3
{{%/* /roadmap-version */%}}

{{%/* roadmap-version */%}}
### Versão 2
#### Seção 1

* [x] Item completado
* [ ] Item em andamento
* Item planejado

#### Seção 2

* [x] Item 1
* [x] Item 2
* [x] Item 3
{{%/* /roadmap-version */%}}
{{</* /roadmap */>}}
```

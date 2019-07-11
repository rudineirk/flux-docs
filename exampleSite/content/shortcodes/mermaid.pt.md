---
title: "Fluxogramas (Mermaid)"
weight: 30
tags:
  - shortcodes
---

# Fluxogramas (Mermaid)

## Exemplos

{{< mermaid align="left" >}}
graph TD;
	A[Borda reta] -->|Link text| B(Borda redonda)
    B --> C{Decisão}
    C -->|Um| D[Resultado um]
    C -->|Dois| E[Resultado dois]
{{< /mermaid >}}

## Uso

```
{{</* mermaid align="left" */>}}
graph TD;
	A[Borda reta] -->|Link text| B(Borda redonda)
    B --> C{Decisão}
    C -->|Um| D[Resultado um]
    C -->|Dois| E[Resultado dois]
{{</* /mermaid */>}}
```

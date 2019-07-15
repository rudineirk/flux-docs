---
title: "Flowcharts (Mermaid)"
weight: 30
tags:
  - shortcodes
---

# Flowcharts (Mermaid)

## Examples

{{< mermaid align="center" >}}
graph TD;
  A[Hard edge] -->|Link text| B(Round edge)
  B --> C{Decision}
  C -->|One| D[Result one]
  C -->|Two| E[Result two]
{{< /mermaid >}}

## Usage

```
{{</* mermaid align="center" */>}}
graph TD;
  A[Hard edge] -->|Link text| B(Round edge)
  B --> C{Decision}
  C -->|One| D[Result one]
  C -->|Two| E[Result two]
{{</* /mermaid */>}}
```

---
title: "Destaque de código"
weight: 10
tags:
  - markdown
---

# Destaque de código

## Exemplos

Exemplo de código `print(x + "a")` inline

```bash
# Bash example

function show_help() {
  echo "Usage:
  script.sh <param>

  param - Parameter
"
}

show_help "${HOST}"
```

```python
# Python example

def sum(a, b):
    return a + b

def main():
    result = sum(1, 2)
    print("result: {0}".format(result))

main()
```

## Uso

<pre><code class="language-markdown">
Exemplo de código `print(x + "a")` inline

```python
# Python example

def sum(a, b):
    return a + b

def main():
    result = sum(1, 2)
    print("result: {0}".format(result))

main()
```
</code></pre>

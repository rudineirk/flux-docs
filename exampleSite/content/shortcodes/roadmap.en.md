---
title: "Roadmap"
weight: 40
tags:
  - shortcodes
---

# Roadmap

## Examples

{{< roadmap >}}
{{% roadmap-version %}}
### 1.0
#### Theme

* [x] Done item
* [ ] In progress item
* Planned item

#### Features

* [x] Roadmap
* [x] Changelog
* [x] Todo Lists
{{% /roadmap-version %}}

{{% roadmap-version %}}
### 1.1
#### Theme

* [x] Done item
* [ ] In progress item
* Planned item

#### Features

* [x] Roadmap
* [x] Changelog
* [x] Todo Lists
{{% /roadmap-version %}}
{{< /roadmap >}}

## Usage

```
{{</* roadmap */>}}
{{%/* roadmap-version */%}}
### Version 1
#### Section 1

* [x] Done item
* [ ] In progress item
* Planned item

#### Section 2

* [x] Item 1
* [x] Item 2
* [x] Item 3
{{%/* /roadmap-version */%}}

{{%/* roadmap-version */%}}
### Version 2
#### Section 1

* [x] Done item
* [ ] In progress item
* Planned item

#### Section 2

* [x] Item 1
* [x] Item 2
* [x] Item 3
{{%/* /roadmap-version */%}}
{{</* /roadmap */>}}
```

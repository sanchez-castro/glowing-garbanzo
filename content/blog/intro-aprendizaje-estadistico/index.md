---
title: Introducción al Aprendizaje Estadístico
date: "2020-07-21"
tags: ["aprendizaje estadístico", "ciencia de datos"]
contentType: [artículo]
author: adrian@ianalytics.org
type: perspectiva
---

**Pérdida**

In supervised learning, a machine learning algorithm builds a model by examining many examples and attempting to find a model that minimizes loss; this process is called empirical risk minimization.

Loss is the penalty for a bad prediction. That is, loss is a number indicating how bad the model's prediction was on a single example. If the model's prediction is perfect, the loss is zero;

$L_2$ = 
Squared Error = 
square of the diff between prediction and true value =

$(observation - prediction)^2$ = 
 $(y-y')^2$

**Mean squared error (MSE)** is the average squared loss per example over the whole dataset. To calculate MSE, sum up all the squared losses for individual examples and then divide by the number of examples:

$MSE = 1/N \sum (y - y' )^2$

```python
import pandas as pd
import matplotlib as pb
```

```SQL 
SELECT * FROM `table.name
```
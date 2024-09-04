---
author: Huy Le
pubDatetime: 2023-04-28T12:58:49.563Z
modDatetime:
title: Watson QA system
slug: watson
featured: true
draft: false
tags:
  - Java
  - Lucene
description: Question answering(QA) built using Java & Lucene + various NLP techniques.
---

#### Code: [github](https://github.com/huyl1/watson-project)

#### Deployment: Not deployed.

This is a Question Answering system indexed on thousands of wikipedia articles.
The goal of this application is to answer questions taken from the gameshow "Jeopardy". Given a question as an input, it will output the
title of the wikipedia article it thinks is the answer to the question.  
You can learn more
by reading my [detailed technical writeup](https://docs.google.com/document/d/1Ao0VPE4fVg_RtU-H6f-96Ba3GyGQTtuwigMvBLmfmyI/edit?usp=sharing)
or checking out the code on my Github.

### Example:

Input: "What is the capital of Vietnam?"

Processed input: capital vietnam

Output: "Hanoi"

![overview](@assets/blog/watson-QA/watson.png)

## Features

- Quickly and accurately retrieve a relevant article given a query from thousands of wikipedia articles.

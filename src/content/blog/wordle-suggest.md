---
author: Huy Le
pubDatetime: 2022-07-28T12:48:39.563Z
modDatetime:
title: wordleSuggest
slug: wordle
featured: true
draft: false
tags:
  - JS
  - chrome-extension
description: Autocomplete chrome extension for the game Wordle on New York Times. Built using Javascript.
---

#### Code: [github](https://github.com/huyl1/wordleSuggest)

#### Deployment: Not deployed.

![wordle suggest in action](@assets/blog/wordle-suggest-js/demo.gif)

## Features

wordleSuggest is a chrome extension that adds autocomplete to your Worlde game. The autocomplete is
seemlessly integrated into the game. Published on the [chrome web store](https://chromewebstore.google.com/detail/wordle-suggest/gglbpeofjcjkofejocefcncolhkldhom).
This extension longer works due to a lack of updates.

- Fast autocomplete, based on the prefix typed.
- Words stored in memory, in a "trie" allowing for efficient lookups.
- Cycle through autocomplete options using TAB.
- Directly hijacks and modifies the DOM, integrates seemlessly on the official website.
- MVC structured.

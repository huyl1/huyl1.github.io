---
author: Huy Le
pubDatetime: 2022-05-15T20:58:49.563Z
modDatetime:
title: Spotify Music Player
slug: spotify-music-player-java
featured: true
draft: false
tags:
  - Java
  - JavaFX
description: Music player with spotify intergration. App built using JavaFX under MVC architecture.
---

#### Code: Github (Private).

#### Deployment: Not deployed.

![app display](@assets/blog/music-player/overview.jpg)

## Features

The music player is built from the ground up using the MVC architecture, with JavaFX for the GUI and Java for the backend. To ensure responsiveness, the application runs on multiple threads. It utilizes the Spotify API to search and download songs, while also being able to play locally stored tracks. Here are a list of features the app supports:

### Playback

- Playback controls (Play, Pause, Repeat, Skip).
- Seek to any section of the currently playing song.
- Volume controls.
- Queue up songs.

### Library Management

- Search songs by title, artists, or album.
- Sort songs by title, artists, and last played.
- Display song title, artist(s), and a cover image if available.
- Imports local mp3 files, and can read mp3 metadata.
- The user can manually remove songs from the library.

### Spotify integration

- Search and download songs via the Spotify API.

### Visualizer

- Simple music equalizer which will change depending on what's playing.

## DEMO

<video width="720" height="480" controls>
 <source src="/assets/blog/music-player/demo.mp4" type="video/mp4">
</video>

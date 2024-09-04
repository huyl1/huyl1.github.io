---
author: Huy Le
pubDatetime: 2024-08-28T11:41:32.112Z
modDatetime:
title: Phong Vu Price Tracker
slug: price
featured: true
draft: false
tags:
  - MongoDB
  - Express
  - React
  - Vite
  - GCP
description: Full-stack website to track more than 12,000 products on phongvu.vn
---

#### Code: [Github](https://github.com/huyl1/PhongVuPriceTracker)

#### Deployment: [live](https://phongvupricetracker-frontend.onrender.com/)

This is a full-stack website to track the pricing history of over 12,000 products. I created this website because
I thought phongvu.vn was too slow and cluttered, and featured many misleading promotions.
Since August 2024, my website has provided reliable price tracking.
This project showcases the culmination of my web development skills, and I frequently update the
website as I learn new technologies and techniques.

![screenshot](@assets/blog/phong-vu-price-tracker/ss.jpg)

## Technologies:

### Front-end

The frontend is written in React and powered by Vite. React-Query is used for state management and caching.
Communicates with the backend via Axios. Styling is done using tailwindcss.

### Back-end

The backend is written using Express. Product information is stored on MongoDB Atlas, accessed via
Mongoose (ODM).

Latest product info and pricing is fetched daily using Scapy (Python) bot running on Google Cloud Platform VM.

---
author: Huy Le
pubDatetime: 2024-01-12T20:31:00.112Z
modDatetime:
title: Multi-class Emotion Classification
slug: emo
featured: true
draft: false
tags:
  - Python
  - Tensorflow
  - Keras
description: Machine learning model to identify 7 emotions from text.
---

#### Code: [Github](https://github.com/huyl1/emo-class)

#### Deployment: Not deployed.

This is a multi-class classification model that classifies 7 emotions from text. The model is fine-tuned from a pre-trained BERT model on
a private dataset. The model was trained for an in class competition for 50 students.

### The task:

Given a text, predict whether any of the following emotions are present:

admiration
amusement
gratitude
love
pride
relief
remorse

For example, given the text:

> Thanks for the reply! I appreciate your input. Please keep me in the loop, I’d love to be more active with this if possible.

a system should predict the labels:

> admiration, gratitude, love

### Fine-tuning:

After settling on a pre-trained BERT model, I adjusted the hyperparameters manually until I achicved decent results. After that, I did futher
tuning using the weight and biases platform. This let me see how the different hyperparameters affected the model's performance, and allowed me to manually adjust the hyperparameters to get the best results.

![wandb](@assets/blog/emo-class/wandb.jpg)
This shows the performance from my last 9 runs. In total I had trained the model more than 100 times with different hyperparameters.

### Results:

During the development phase, my model only ranked 5th on the accuracy leaderboard for the public data. I had to do a lot of tuning and regularization to prevent overfitting.

![dev](@assets/blog/emo-class/dev.jpg)

Every submission, I would identify where my model was lacking and try to improve it. For example, my
model scored poorly on the "relief" emotion (F1 score of 0.17), so I had to do more data augmentation and regularization to improve the model's performance.

![test](@assets/blog/emo-class/test.jpg)

Thanks to my hard work, I was able to achieve a final F1 score of 0.85 on the submission dataset (private). This was the second highest score in the competition. Although there were many models that performed better than mine on the development dataset, my model was able to generalize better to the private dataset.

The baseline model was a fine-tuned transformer model with simple regularization, which scored 0.80. My model was able to outperform the baseline by 0.05 (hence the 5% improvement).

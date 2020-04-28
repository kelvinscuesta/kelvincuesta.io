---
title: Journey into Functional CSS
date: 'Sat, April 25, 2020'
---

When tooling with CSS, I usually consider a couple of points. First how fast can I implement the vision I have in my head with a specific tool? And second will acheiving the first goal lead to conflicts down the line?

With the first point, I wonder if I need a framework or if I can achieve what I or the team wants with simple CSS. I abhor Bootstrap because it makes everything look the same. It does achieve fast implementation of a concept and responsive design by default which I appreciate. But ultimately, the issue with a CSS framework like Bootstrap is its lack of customizability that ends up as ghost haunting the various files of code in the directory.

Which has led me to a CSS framework [tachyons](https://tachyons.io) more like a style of coding called functional CSS. I have to say it's made CSS fun again. What functional style CSS boils down to is creating atomic units of CSS to apply to a DOM node and combining those units to create a style.

For instance, take this piece of code:

```
<Header class="pv3 f4-ns f3-m f3-l fw5" />

```

Here my header component is given a class attribute with the following classes **_pv3_**, **_fw5_**, and **_f4-ns_**. These classes each are composed of just one css declaration. Let's take "pv3", pv3 in Tachyons stands for padding vertical 3rd step, which translates to `{padding-top: .5rem; padding-bottom: .5rem}`. All the classes are small, composable units like these that allow for readable code. You build the style sheet once, and just declare classes on the html elements directly without worrying about making a new class to fit a specific style.

What's been nice so far, is I know where to look and how each class will respond as soon as I add it to an element. The only caveat is that it may defeat some aspects of DRY when you're adding the classes to the elements. The other thing is that I can see code getting messy if one doesn't move the classes up to parent levels. Ultimately, a fun experiment and I will take these lessons from building out this personal website on future endeavours.

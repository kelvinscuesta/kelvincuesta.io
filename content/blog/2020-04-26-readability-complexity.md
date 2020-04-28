---
title: Readability Complexity
date: 'Mon, April 27, 2020'
---

I use to think that writing comments was the be all end all when it came to writing code. If I wrote more comments, I'd be doing myself and others a favor. I found out theres an easy way to look at this conundrum. One should always **_let the code speak for itself_**, when it can't write a comment on why you wrote the code the way it is. This led to a funny theory a couple of my peers and I came up with, _readability complexity_, not to be confused with time and space complexity.

Before we dive into the theory of readability complexity, two things come to mind. If you're writing all those comments, the code must be difficult to understand and/or you're being redundant.

I found myself falling into both camps on a number of occassions. I would write a ton of comments everywhere that would literally word for word describe the following piece of code. I started to ask a few questions why was I writing this comment? Why was I writing this piece of code this way? It made me realize, man this code is some hot jank and I feel bad for the person who has to follow and decipher it. I started wondering, how long would a reasonable person in the industry have to take to read the code. Would it take them one pass? A few passes, a quadratic amount of passes, dare I say an exponential amount of passes to understand the code written.

That is what readability complexity is, the amount of time a reasonable person would take to read the code. Our goal as engineers should be to decrease this amount of time. We talk in big O notation for an algorithms run time and space requirements, why can't we do the same for the time it takes to grasp a module. Half the struggle is reading comprehension.

I recognize this has been stated over and over. I'm just proposing for a funny name to a concept we all understand. I'm a big fan of compact, terse code, but sometimes that optimized ternary could be made clear and understandable with a couple of if else statements.

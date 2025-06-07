# Cool Shopper Slice

## About the project
_Cool Shopper_ is an online shopping page, a slice of an e-commerce application, focused on performance and practicality. 

It was developed using **React** (with native React Context) and **Tailwind**. 

*Check out the live demo here:* https://cool-shopper-project.netlify.app/
<p align="center">
<img width="900" alt="main page showing the layout with many products" src="https://github.com/user-attachments/assets/ff242ea1-a8d1-49ef-ba7e-3fef22f1a87c" />
</p>

## Motivation
I developed _Cool Shopper_ to explore first-hand the way a typical shopping page works under the hood, and how to make it performant and convenient to use. 

## Core Features 
- extensive filtering
  - categories
  - price
  - searching
  - sorting
- performance
  - lightweight - very few dependencies
  - infinite list approach for products
  - minimal visual effects
- simplicity
  - intuitive UI
  - responsive design for mobile, desktop, and everything in-between 
<p align="center">
<img width="900" alt="responsiveness showcase" src="https://github.com/user-attachments/assets/e6170cba-1d50-40f5-8fd7-cb5d9592df26" />
</p> 
## Optimisation
Filters & searching applies to all products, but with the "infinite list" approach, only a small number of items is initially rendered. 
Small bundle size - javascript takes 208kB, including the "heavy" dependencies like react-dom. These dependencies can be externalised, to achieve an absolutely tiny bundle size - this would be relevant if the application were to be used for real-life commerce.  

## Technical Decisions
#### Establishing the MVP
From the very start of development, I decided to approach this "e-commerce" project with a very clear concept of a *slice*, a single page, yet the most important one, to focus my attention on. This slice was developed as a proof of concept, of a potential fully fledged commercial application.

#### Finding an acceptable Store API
Certain similar APIs would allow "global editing" - which in practice means that half of the products get deleted, and replaced with very imaginative blank products with keysmash titles. Another API would only provide 10 products, which seemed insufficient to demonstrate the full functionality of my application. 

#### Infinite list implementation 
For the sake of making the application more user-controlled and predictable, I chose to follow the approach of using a "load more" button, rather than automatic new load when the user scrolls far enough on the page. 

#### Typescript?
Considering this project was a kind of exploration, using Typescript would have slowed down development, and would have made the project architecture too inflexible for the purpose it was meant to serve. 

## Future of the project 
As part of my professional ambition, I would like to develop this "slice" into a reusable scaffold structure, that can be used by other developers to build their own shooping fronts, a kind that will be performant, lightweight, and easily customisable. This would be a very interesting professional challenge for me, and it would also bring real value to others. 

## Author
Hi, my name is Anton Serdiuk, I am a front-end developer focused on building thoughtful, interactive applications with Javascript, React and TypeScript. I'm passionate about balancing clean code, UX clarity, and ambitious ideas.

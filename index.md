
---
layout: about  # Keeps your about page styling
title: Home    # Changed from "About Me" since this is now homepage
tags: about    # Optional: keeps any tag-based styling
flicker: true # Only include if actually used
---

<div style="display: flex; align-items: flex-start; gap: 40px; margin-top: 20px;">
  <div style="flex: 2;">
    I am an Italian musician and researcher based in Reykjavik, Iceland. My background is in jazz improvisation, electronic music and linguistics. 

    In my practice I like to embrace many different disciplines, with a focus on interactive technologies and AI as applied to music.

    Currently I'm a researcher at the [Intelligent Instruments Lab](https://iil.is/) where I am exploring through artistic practice how artificial intelligence is shaping our culture and social interactions.

    You can contact me at nprivato@hi.is
  </div>
  
  <div style="flex: 1; text-align: right;">
    <img src="/images/Nicola.jpg" alt="Nicola Privato" style="width: 300px; max-width: 100%; border-radius: 8px;"/>
  </div>
</div>

<style>
.post-header, #talks, #workshops {
  text-align: center;
}

/* Responsive layout for mobile */
@media (max-width: 768px) {
  div[style*="display: flex"] {
    flex-direction: column-reverse;
  }
  div[style*="text-align: right"] {
    text-align: center !important;
    margin-bottom: 20px;
  }
  div[style*="text-align: right"] img {
    width: 200px !important;
  }
}
</style>
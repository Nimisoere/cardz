# React Card Game

This project was build with React/Typescript, Redux toolkit, Redux persist.

## DEMO

[https://ntl-cardz.netlify.app/](https://ntl-cardz.netlify.app/)

## TO DO

- Add AI Game play
- Add Card animations
- Increase test coverage
- Show Game History
- Add P2P Play
- Implement mobile view

## HOW TO PLAY

### **Starting a new game**

- Click on the `New Game` button at the top
- Select number of players and click the `Start Game` button

---

### **Continuing a previous game**

- We save your last Game in the browser, just click on `Continue Game` to play

---

### **Game rules**

- Each player plays a single card each turn
- Cards can only be picked from the top of a player's each
- If the card played matches the shape of the top card at the center, the player gets to take all cards at the center
- The player then pops a card of his deck to continue
- This continues, till 1 player has all the cards. _(Winner)_

- A player is allowed to shuffle his deck before playing

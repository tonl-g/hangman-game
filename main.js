const chalk = require('chalk')
const readlineSync = require('readline-sync')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
if (readlineSync.keyInYNStrict(chalk.blue(`Do you want play Hangman's Game? `))) {
  // 'y' key was pressed.
  console.log('Start')
  // continuer le programme
  } else {
  // 'n' key was pressed.
  console.log('Bye')
  process.exit(0)
  } 

// Read dictionnary
const readDic = readFileSync('./dictionnary.txt', 'utf-8')
// console.log(readDic)

// Create array 
const wordsDic = readDic.toLowerCase().split('\n')
// console.log(words)

// Random array
const randWord = randomInt(0, wordsDic.length)
console.log(wordsDic[randWord]) // Test word

// Boucle
let isRunning = true

while (isRunning) {
  const findWord = readlineSync.question(chalk.blue('Guess the word: '))
  const matchLetters = ((wordsDic[randWord]).match(findWord))
  // const counter = 0 / A faire

  if (findWord != (wordsDic[randWord])) {
    console.log(chalk.red(`It's not the good word!`))
    console.log(chalk.green(`Good: ${matchLetters}`))
    if (readlineSync.keyInYNStrict(`Do you want to continue? `)) {
      // 'y' key was pressed.
      console.log('Restart')
      // continuer le programme
      } else {
      // 'n' key was pressed.
      console.log('Bye')
      process.exit(0)
      } 
  } else { (findWord === (wordsDic[randWord])) 
    console.log(chalk.green(`Congratulation! You find the good word '${(wordsDic[randWord])}'!!!`))
    // Exit the loop
    isRunning = false
  }
}




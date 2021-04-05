const chalk = require('chalk')
const readlineSync = require('readline-sync')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
const startGame = () => {
if (readlineSync.keyInYNStrict(chalk.blue(`Do you want play Hangman's Game? `))) {
  // 'y' key was pressed.
  console.log('Start')
  // continuer le programme
  } else {
  // 'n' key was pressed.
  console.log('Bye')
  process.exit(0)
  } 
}

const loopGame = () => {
    let isRunning = true
    let clueWord = Array((wordsDic[randWord]).length).fill('_')
    console.log(clueWord.join(' '))

    while (isRunning) {
      const findWord = readlineSync.question(chalk.blue('Guess the word: '))
      const matchLetters = ((wordsDic[randWord]).match(findWord))
    
      if (findWord != (wordsDic[randWord])) {
        console.log(chalk.green(`Good: ${matchLetters}`))
        console.log(chalk.red(`It's not the good word!`))
      
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
    }

// Read dictionnary
const readDic = readFileSync('./dictionnary.txt', 'utf-8')
// console.log(readDic)

// Create array 
const wordsDic = readDic.toLowerCase().split('\n')
// console.log(words)

// Random array
const randWord = randomInt(0, wordsDic.length)
// console.log(wordsDic[randWord]) // Test word

exports.startGame = startGame
exports.loopGame = loopGame
exports.readDic = readDic
exports.wordsDic = wordsDic
exports.randWord = randWord

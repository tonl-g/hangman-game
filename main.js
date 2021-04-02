const chalk = require('chalk')
const readlineSync = require('readline-sync')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
if (readlineSync.keyInYNStrict(`Do you want play Hangman's Game? `)) {
  // 'Y' key was pressed.
  console.log('Continue...')
  // continuer le programme
  } else {
  // 'N' key was pressded.
  console.log('Goodbye!')
  process.exit(0)
  }

//
const readDic = readFileSync('./dictionnary.txt', 'utf-8')
// console.log(readDic)

const words = readDic.split('\n')
// console.log(words)

const randWord =randomInt(0, words.length)
// console.log(`random word: ${words[randWord]}`)


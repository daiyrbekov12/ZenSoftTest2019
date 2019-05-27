class TextSearchSolution {

  model1(text, patterns) {
      console.log("\nMode 1: ");
      for (let i = 0; i < text.length; i++) {
          for (let j = 0; j < patterns.length; j++) {
              if(text[i].length === patterns[j].length && text[i]===patterns[j]){
                  console.log(text[i]);
                  break;
              }
          }
      }
  }

  model2(text, patterns) {
      console.log("\nMode 2: ");
      for (let i = 0; i < text.length; i++) {
          for (let j = 0; j < patterns.length; j++) {
              if(text[i].match(patterns[j])){
                  console.log(text[i]);
              }
          }
      }
  }

  editDistanceOne(text, pattern){
      let textLen=text.length;
      let patLen=pattern.length;
      let i=0, j=0, edits=0;

      while(i<textLen && j<patLen){

          if(text[i]!=pattern[j]){
              edits++;
              if(textLen>patLen){
                  i++;
              }
              else if(textLen<patLen){
                  j++;
              }
              else{
                  i++;
                  j++;
              }
          }
          else{
              i++; j++;
          }
      }

      if (i < textLen || j < patLen)
          edits++;

      if(edits<=1)
          return true;
      else
          return false;
  }

  model3(text, patterns) {
      console.log("\nMode 3: ");
      for (let i = 0; i < text.length; i++) {
          for (let j = 0; j < patterns.length; j++) {
              let lengthDifference=Math.abs(text[i].length-patterns[j].length);

              if(lengthDifference<=1 && this.editDistanceOne(text[i], patterns[j])){
                  console.log(text[i]);
              }
          }
      }
  }
}

const fs = require('fs')

const text = fs.readFileSync('input.txt').toString().split("\n").filter(Boolean);
const patterns = fs.readFileSync('pattern.txt').toString().split("\n").filter(Boolean);
const mySolution = new TextSearchSolution();

mySolution.model1(text,patterns);
mySolution.model2(text,patterns);
mySolution.model3(text,patterns);

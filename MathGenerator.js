const fs = require('fs');
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
// const prompt = require("prompt");

const border = "=================================================";
const add = "addition";
const sub = "subtraction";
const mult = "multiply";
const div = "divide";


function createAdditionProblem(numbOfProblems, varSize, numberOfVars) {
    
    let constructEquation = "";
    let sum = 0;
    let arr = [];
    for(let j = 1; j < numbOfProblems; j++) {
        for(let x = 0; x < numberOfVars; x++) {
             arr = [];
            arr[x] = Math.floor(Math.random() * varSize);
            sum = sum + arr[x];
            constructEquation = constructEquation + `${arr[x]}`  


            if(x + 1 < numberOfVars) {
                constructEquation = constructEquation + " + ";
            } else {
                break;
            }
            arr = []
            
        }
        
        console.log(`${j}: ` + constructEquation);
        console.log(sum);
        constructEquation = "";
        sum = 0;
    }
   
}
function createSubtractionProblem(numbOfProblems, varSize, numberOfVars, allowNegativeEquations = false) {
    
    let constructEquation = "";
    let sum = 0;
    let arr = [];
    for(let j = 1; j < numbOfProblems; j++) {
        for(let x = 0; x < numberOfVars; x++) {
             arr = [];
            arr[x] = Math.floor(Math.random() * varSize);
           arr.sort();
           arr.reverse();
            
        }
        for(let x = 0; x < numberOfVars; x++) {
            sum
        }
        console.log(`${j}: ` + constructEquation);
        console.log(sum);
        constructEquation = "";
        sum = 0;
    }




    // for(let x = 1; x < numbOfProblems + 1; x++) {
    //     const firstVar = Math.floor(Math.random() * varSize);
    //     const secondVar = Math.floor(Math.random() * varSize);
    //     let answer;
    //     let arr = [];
    //         if(firstVar < secondVar && !allowNegative) {
    //         answer = secondVar - firstVar;
    //         console.log(`${x}: ${secondVar} - ${firstVar} =  `);
    //         console.log(` \n ${answer}`);
    //         } else 
    //         {
    //         answer = firstVar - secondVar;
    //         console.log( `${x}: ${firstVar} - ${secondVar} =  `);
    //         console.log(` \n ${answer} \n`);
    //         }
        
        
    //     }    
    } 


function createMultiplicationProblem(numbOfProblems, varSize, numberOfVars) {
    
    let constructEquation = "";
    let sum = 1;
    let arr = [];
    console.log(border);
    for(let j = 1; j < numbOfProblems; j++) {
        for(let x = 0; x < numberOfVars; x++) {
            arr = [];
            arr[x] = Math.floor(Math.random() * varSize);
            sum = sum * arr[x];
            constructEquation = constructEquation + `${arr[x]}`  


            if(x + 1 < numberOfVars) {
                constructEquation = constructEquation + " * ";
            } else {
                break;
            }
            arr = []
            
        }
        console.log(`${j}: ` + constructEquation);
        console.log(sum);
        constructEquation = "";
        sum = 1;
    }
   console.log(border);
}
function createProblems(numbOfProblems, problemType, varSize, allowNegative = false, decimalDivision = false) {
   console.log("=================================================");

    switch(problemType) {
        // case "addition":
            
        //         for(let x = 1; x < numbOfProblems + 1; x++) {
        //             const firstVar = Math.floor(Math.random() * varSize);
        //             const secondVar = Math.floor(Math.random() * varSize);
        //             const answer= firstVar + secondVar;
        //             console.log(`${x}: ${firstVar} + ${secondVar} =  `);
        //             console.log(` \n ${answer}\n`);

        //             }
        //         break;

        // case "subtraction":
            
        //     for(let x = 1; x < numbOfProblems + 1; x++) {
        //         const firstVar = Math.floor(Math.random() * varSize);
        //         const secondVar = Math.floor(Math.random() * varSize);
        //         let answer;
        //         if(firstVar < secondVar && !allowNegative) {
        //         answer = secondVar - firstVar;
        //         console.log(`${x}: ${secondVar} - ${firstVar} =  `);
        //         console.log(` \n ${answer}`);
        //         } else {
        //         answer = firstVar - secondVar;
        //         console.log( `${x}: ${firstVar} - ${secondVar} =  `);
        //         console.log(` \n ${answer} \n`);
        //         }
                
                
        //     } 
        //     break;
        // case "multiply":
        //     for(let x = 1; x < numbOfProblems + 1; x++) {
        //         const firstVar = Math.floor(Math.random() * varSize);
        //         const secondVar = Math.floor(Math.random() * varSize);
        //         const answer= firstVar * secondVar;
        //         console.log(`${x}: ${firstVar} * ${secondVar} =  `);
        //         console.log(` \n ${answer}\n`);

        //         }
        //     break;
        case "divide":
            if(!decimalDivision) {
            for(let x = 1; x < numbOfProblems + 1; x++) {
                const firstVar = Math.floor(Math.random() * varSize);
                const secondVar = Math.floor(Math.random() * varSize);
                const answer= firstVar * secondVar;
                if(answer == 0) {
                    x--
                    break;
                }
                console.log(`${x}: ${answer} / ${firstVar} =  `);
                console.log(` \n ${secondVar}\n`);

                }
            } else {
                for(let x = 1; x < numbOfProblems + 1; x++) {
                    const firstVar = Math.floor(Math.random() * varSize);
                    const secondVar = Math.floor(Math.random() * varSize);
                    const answer= firstVar / secondVar;
                    console.log(`${x}: ${firstVar} / ${secondVar} =  `);
                    console.log(` \n ${answer}\n`);
    
                    }

            }
            break;
                    }
                    console.log("=================================================");
                }
        
    





createAdditionProblem(25, 25, 7);
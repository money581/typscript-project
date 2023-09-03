const num1Element =document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults:Array<number>=[];
const stringResults:string[]=[];

type numOrstring = number | string
type abc ={val:number,timestamp:Date}

interface resultobj {
    val:number;
    timestamp:Date;
}

function addd(num1: numOrstring, num2:numOrstring){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1+ ' ' +num2;
    }
    return +num1 + +num2;
}
function printResult(resultobj:resultobj ){
    console.log(resultobj.val);
    
}


    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = addd(+num1, +num2);
        numResults.push(result as number)
        const stringResult = addd(num1, num2);
        stringResults.push(stringResult as string)
        // console.log(result);
        // console.log(stringResult);

        console.log(numResults,stringResults);
        
        printResult({val:result as number, timestamp:new Date()})
        
        //console.log(addd(2,false));
        
        
    });


    const mypromiss=new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
            resolve('it worked!')
        },1000)
    });

    mypromiss.then((result)=>{
        console.log(result.split('w'));
        
    })



 

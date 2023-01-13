// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console

const fileEx = (str)=>{
    let extension = '';
    for(let i=0; i<str.length; i++){
        if(str[i]==='.'){
            extension = str.slice(i,str.length);
            break;
        }
    }
    console.log(extension);
};

fileEx('readme.md');

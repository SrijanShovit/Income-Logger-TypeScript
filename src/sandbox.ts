type StrOrNum = string | number;
type Obj = {name: string, uid:StrOrNum}

const logDetails = (uid: StrOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user:Obj) => {
    console.log(`${user.name} greets`)
}

const greetAgain = (user:Obj) => {
    console.log(`${user.name} greets`)
}
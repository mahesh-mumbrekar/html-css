 let age= 32;
let grettingsText = 'hi this is the error';
alert(grettingsText);
alert(grettingsText);
grettingsText='his this is error 65';
alert(grettingsText);
alert(age);
alert(age);
let hobbies = ['sports', 'gaming', 'cooking'];
alert(hobbies[1]);
let job = {
    title: 'developer',
    place: 'New York',
    salary:'50000'
};
alert(job.title)


let adultYears = age - 18;
function calculateAdultYears() {
    adultYears = age - 18

};

calculateAdultYears();
alert(adultYears);

age = 65;
calculateAdultYears();
alert(adultYears);

function calculateSum(a,b) {
    return a+b

}




let addition = calculateSum(18, 20)
alert(addition)


addition = calculateSum(35, 35)
console.log(addition)



let courseDetails = {
    name: 'python development',
    great() { 
        alert('great day')

    }

}

courseDetails.great()
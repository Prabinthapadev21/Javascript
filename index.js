function oddeven() {
    let num = document.getElementById("evenOdd").value;
    let result = document.getElementById("evenOddResult");
    if(num%2==0)
    {
        result.innerHTML = `${num} is Even`;
    }
    else{
        result.innerHTML = `${num} is Odd`;
    }
}

function prime() {
    let num = document.getElementById("primeNum").value;
    let result = document.getElementById("primeResult");
    for (let i = 1; i <=num; i++) {
        let count = 0;
        if (num % i == 0) {
            count++;
        }
    }
    if(count==2)
    {
        result.innerHTML = `${num} is not a Prime number`;
    }
    else
    {
    result.innerHTML = `${num} is a Prime number`;
    }
}

function palindrome() {
    let num = document.getElementById("palindromeNum").value;
    let result = document.getElementById("palindromeResult");
    let rem;
    let reversed = 0;
    let original = num;
    while (num > 0) {
        rem = num % 10;
        reversed = reversed * 10 + rem;
        num = parseInt(num / 10);
    }
    if(original == reversed)
    {
        result.innerHTML = `${num} is a Palindrome`;
    }
    else{
        result.innerHTML = `${num} is not a Palindrome`;
    }
}
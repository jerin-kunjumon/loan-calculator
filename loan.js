function Calculate() {
 

    const amount = document.querySelector("#amount").value;
 

    const rate = document.querySelector("#rate").value;

    const months = document.querySelector("#months").value;
 
    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
    const totalInterest = 12*interest
    // Calculating total payment
    const monthlyPayment = ((amount / months) + interest).toFixed(2);
    const totaPayment = monthlyPayment*12;
    
    document.querySelector("#totalInterest").innerHTML = "Total Interest : (₹) " + totalInterest;
    document.querySelector("#monthlyPayment").innerHTML = "Monthly Payment : (₹) " + monthlyPayment;
    document.querySelector("#totalPayment").innerHTML = "Total Payment : (₹) " + totaPayment;
}
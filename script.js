function openUPIPayment() {
  // UPI Payment URL
  const upiPaymentUrl = `upi://pay?pa=helloarup@paytm&mc=your-merchant-code&tid=unique-transaction-id&tr=your-transaction-reference-id&tn=Donation&am=10&cu=INR&url=https://your-website-url/callback`;

  // Open the UPI payment link
  window.location.href = upiPaymentUrl;
}

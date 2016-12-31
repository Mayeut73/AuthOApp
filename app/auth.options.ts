export const options = {
    language: 'fr',
    additionalSignUpFields: [{
    name: "address",
    placeholder: "enter your address",
    // The following properties are optional
    prefill: "street 123",
    validator: function(address:any) {
      return {
         valid: address.length >= 10,
         hint: "Must have 10 or more chars" // optional
      };
    }
  },
  {
    name: "full_name",
    placeholder: "Enter your full name"
  }]
}
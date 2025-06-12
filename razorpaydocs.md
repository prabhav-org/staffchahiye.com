## Orders APIs

You can create Orders and link them to payments. Orders APIs are used to create, update and retrieve details of Orders. Also, you can retrieve details of payments made towards these Orders.

### Orders Entity

The Orders entity has the following parameters:

id
string
The unique identifier of the order.

amount
integer
Payment amount in the smallest currency sub-unit. For example, if the amount to be charged is ₹299.00, then pass 29900 in this field. In the case of three decimal currencies, such as KWD, BHD and OMR, to accept a payment of 295.991, pass the value as 295990. And in the case of zero decimal currencies such as JPY, to accept a payment of 295, pass the value as 295.

partial_payment
boolean
Indicates whether the customer can make a partial payment. Possible values:
true: The customer can make partial payments.
false (default): The customer cannot make partial payments.

amount_paid
integer
The amount paid against the order.

amount_due
integer
The amount pending against the order.

currency

string
ISO code for the currency in which you want to accept the payment. The default length is 3 characters. Refer to the list of supported currencies.

receipt
string
Receipt number that corresponds to this order. Can have a maximum length of 40 characters and has to be unique.

status
string
The status of the order. Possible values:
-created: When you create an order it is in the created state. It stays in this state till a payment is attempted on it.
-attempted: An order moves from created to attempted state when a payment is first attempted on it. It remains in the attempted state till one payment associated with that order is captured.
-paid: After the successful capture of the payment, the order moves to the paid state. No further payment requests are permitted once the order moves to the paid state. The order stays in the paid state even if the payment associated with the order is refunded.

attempts
integer
The number of payment attempts, successful and failed, that have been made against this order.

notes
json object
Key-value pair that can be used to store additional information about the entity. Maximum 15 key-value pairs, 256 characters (maximum) each. For example, "note_key": "Beam me up Scotty”.

created_at
integer
Indicates the Unix timestamp when this order was created.

### Create an Order
```typescript
var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

instance.orders.create({
  amount: 50000,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "value3",
    key2: "value2"
  }
})
// Response:
{
  "id": "order_EKwxwAgItmmXdp",
  "entity": "order",
  "amount": 50000,
  "amount_paid": 0,
  "amount_due": 50000,
  "currency": "INR",
  "receipt": "receipt#1",
  "offer_id": null,
  "status": "created",
  "attempts": 0,
  "notes": [],
  "created_at": ...
}
```
Create an Order
`POST /v1/orders`

Use this endpoint to create an order with basic details such as amount and currency.

Request Parameters
amount

integer
Payment amount in the smallest currency sub-unit. For example, if the amount to be charged is ₹299.00, then pass 29900 in this field. In the case of three decimal currencies, such as KWD, BHD and OMR, to accept a payment of 295.991, pass the value as 295990. And in the case of zero decimal currencies such as JPY, to accept a payment of 295, pass the value as 295.

currency

string
ISO code for the currency in which you want to accept the payment. The default length is 3 characters. Refer to the list of supported currencies.

receipt
string
Receipt number that corresponds to this order, set for your internal reference. Can have a maximum length of 40 characters and has to be unique.

notes
json object
Key-value pair that can be used to store additional information about the entity. Maximum 15 key-value pairs, 256 characters (maximum) each. For example, "note_key": "Beam me up Scotty”.

partial_payment
boolean
Indicates whether the customer can make a partial payment. Possible values:
true : The customer can make partial payments.
false (default) : The customer cannot make partial payments.

first_payment_min_amount
integer
Minimum amount that must be paid by the customer as the first partial payment. For example, if an amount of ₹700.00 is to be received from the customer in two installments of #1 - ₹500.00, #2 - ₹200.00, then you can set this value as 50000. This parameter should be passed only if partial_payment is true.

Response Parameters
id
string
The unique identifier of the order.

amount
integer
The amount for which the order was created, in currency subunits. For example, for an amount of ₹295.00, enter 29500.

entity
string
Name of the entity. Here, it is order.

amount_paid
integer
The amount paid against the order.

amount_due
integer
The amount pending against the order.

currency
string
ISO code for the currency in which you want to accept the payment. The default length is 3 characters.

receipt
string
Receipt number that corresponds to this order. Can have a maximum length of 40 characters and has to be unique.

status
string
The status of the order. Possible values:
-created: When you create an order it is in the created state. It stays in this state till a payment is attempted on it.
-attempted: An order moves from created to attempted state when a payment is first attempted on it. It remains in the attempted state till one payment associated with that order is captured.
-paid: After the successful capture of the payment, the order moves to the paid state. No further payment requests are permitted once the order moves to the paid state. The order stays in the paid state even if the payment associated with the order is refunded.

attempts
integer
The number of payment attempts, successful and failed, that have been made against this order.

notes
json object
Key-value pair that can be used to store additional information about the entity. Maximum 15 key-value pairs, 256 characters (maximum) each. For example, "note_key": "Beam me up Scotty”.

created_at
integer
Indicates the Unix timestamp when this order was created.

Errors
Authentication failed.

Error Status: 400

The API credentials passed in the API call differ from the ones generated on the Dashboard. Possible reasons:
Different keys for test mode and live modes.
Expired API key.

Solution

The amount must be atleast INR 1.00.

Error Status: 400

The amount specified is less than the minimum amount. Currency subunits, such as paise (in the case of INR), should always be greater than 100.

Solution

The field name is required.

Error Status: 400

A mandatory field is missing.

#### -----------------------------------------------
## Payment APIs

Payments APIs are used to capture and fetch payments. You can also fetch payments based on orders and card details of payment.

### Payments Entity

id
string
Unique identifier of the payment.

entity
string
Indicates the type of entity.

amount


integer
Payment amount in the smallest currency sub-unit. For example, if the amount to be charged is ₹299.00, then pass 29900 in this field. In the case of three decimal currencies, such as KWD, BHD and OMR, to accept a payment of 295.991, pass the value as 295990. And in the case of zero decimal currencies such as JPY, to accept a payment of 295, pass the value as 295.

As per payment guidelines, you should pass the last decimal number as 0 for three decimal currency payments. For example, if you want to charge a customer 99.991 KD for a transaction, you should pass the value for the amount parameter as 99990 and not 99991.


currency
string
The currency in which the payment is made. Refer to the list of international currencies that we support.


status
string
The status of the payment. Possible values:
created
authorized
captured
refunded
failed

method
string
The payment method used for making the payment. Possible values:
card
netbanking
wallet
emi
upi

order_id
string
Order id, if provided. Know more about Orders.

description
string
Description of the payment, if any.

international
boolean
Indicates whether the payment is done via an international card or a domestic one. Possible values:
true: Payment made using international card.
false: Payment not made using international card.

refund_status
string
The refund status of the payment. Possible values:
null
partial
full

amount_refunded
integer
The amount refunded in currency subunits. For example, if amount_refunded = 100, it is equal to ₹1.00.

captured
boolean
Indicates if the payment is captured. Possible values:
true: Payment has been captured.
false: Payment has not been captured.

email
string
Customer email address used for the payment.

contact
string
Customer contact number used for the payment.

fee
integer
Fee (including GST) charged by Razorpay.

tax
integer
GST charged for the payment.

error_code
string
Error that occurred during payment. For example, BAD_REQUEST_ERROR.

error_description
string
Description of the error that occurred during payment. For example, Payment processing failed because of incorrect OTP.

error_source
string
The point of failure. For example, customer.

error_step
string
The stage where the transaction failure occurred. The stages can vary depending on the payment method used to complete the transaction. For example, payment_authentication.

error_reason
string
The exact error reason. For example, incorrect_otp.

notes
json object
Contains user-defined fields, stored for reference purposes.

created_at
integer
Timestamp, in UNIX format, on which the payment was created.

card_id
string
The unique identifier of the card used by the customer to make the payment.

card
object
Details of the card used to make the payment.

 

upi
object
Details of the UPI payment received. Only applicable if method is upi.

 

bank
string
The 4-character bank code which the customer's account is associated with. For example, UTIB for Axis Bank.

vpa
string
The customer's VPA (Virtual Payment Address) or UPI id used to make the payment. For example, gauravkumar@exampleupi.

wallet
string
The name of the wallet used by the customer to make the payment. For example, payzapp.


### Capture a Payment
```typescript
var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })
instance.payments.capture(pay_29QQoUBi66xm2f, 1000, INR)

// Response:
{
  "id": "pay_G3P9vcIhRs3NV4",
  "entity": "payment",
  "amount": 1000,
  "currency": "INR",
  "status": "captured",
  "order_id": "order_GjCr5oKh4AVC51",
  "invoice_id": null,
  "international": false,
  "method": "card",
  "amount_refunded": 0,
  "refund_status": null,
  "captured": true,
  "description": "Payment for Adidas shoes",
  "card_id": "card_KOdY30ajbuyOYN",
  "bank": null,
  "wallet": null,
  "vpa": null,
  "email": "gaurav.kumar@example.com",
  "contact": "9000090000",
  "customer_id": "cust_K6fNE0WJZWGqtN",
  "token_id": "token_KOdY$DBYQOv08n",
  "notes": [],
  "fee": 1,
  "tax": 0,
  "error_code": null,
  "error_description": null,
  "error_source": null,
  "error_step": null,
  "error_reason": null,
  "acquirer_data": {
    "authentication_reference_number": "100222021120200000000742753928"
  },
  "created_at": 1605871409,
  "provider": null,
  "upi": {
      "payer_account_type": "credit_card",
      "vpa": "gaurav.kumar@examplebank",
      "flow": "intent"
  },
  "reward": null
}
```
`POST /v1/payments/:id/capture`

Use this endpoint to change the payment status from authorized to captured. Attempting to capture a payment whose status is not authorized will produce an error.

After the customer's bank authorises the payment, you must verify if the authorised amount deducted from the customer's account is the same as the amount paid by the customer on your website or app.
You can configure automatic capture of payments on the Dashboard.

Path Parameters
id


string
Unique identifier of the payment to be captured.

#### Request Parameters
amount


integer
The amount to be captured (should be equal to the order amount, in the smallest unit of the currency). While creating a capture request, in the amount field, enter only the amount associated with the order that is stored in your database.

currency


string
ISO code of the currency in which the payment was made. Refer to the list of supported currencies.

#### Response Parameters
id
string
Unique identifier of the payment.

entity
string
Indicates the type of entity.

amount
integer
The payment amount in currency subunits. For example, for an amount of ₹1.00 enter 100.

currency
string
The currency in which the payment is made. Refer to the list of international currencies that we support.

status
string
The status of the payment. Possible values:
created
authorized
captured
refunded
failed

method
string
The payment method used for making the payment. Possible values:
card
netbanking
wallet
emi
upi

order_id
string
Order id, if provided. Know more about Orders.

description
string
Description of the payment, if any.

international
boolean
Indicates whether the payment is done via an international card or a domestic one. Possible values:
true: Payment made using international card.
false: Payment not made using international card.

refund_status
string
The refund status of the payment. Possible values:
null
partial
full

amount_refunded
integer
The amount refunded in currency subunits. For example, if amount_refunded = 100, it is equal to ₹1.00.

captured
boolean
Indicates if the payment is captured. Possible values:
true: Payment has been captured.
false: Payment has not been captured.

email
string
Customer email address used for the payment.

contact
string
Customer contact number used for the payment.

fee
integer
Fee (including GST) charged by Razorpay.

tax
integer
GST charged for the payment.

error_code
string
Error that occurred during payment. For example, BAD_REQUEST_ERROR.

error_description
string
Description of the error that occurred during payment. For example, Payment processing failed because of incorrect OTP.

error_source
string
The point of failure. For example, customer.

error_step
string
The stage where the transaction failure occurred. The stages can vary depending on the payment method used to complete the transaction. For example, payment_authentication.

error_reason
string
The exact error reason. For example, incorrect_otp.

notes
json object
Contains user-defined fields, stored for reference purposes.

created_at
integer
Timestamp, in UNIX format, on which the payment was created.

card_id
string
The unique identifier of the card used by the customer to make the payment.

card
object
Details of the card used to make the payment.

 

upi
object
Details of the UPI payment received. Only applicable if method is upi.

 

bank
string
The 4-character bank code which the customer's account is associated with. For example, UTIB for Axis Bank.

vpa
string
The customer's VPA (Virtual Payment Address) or UPI id used to make the payment. For example, gauravkumar@exampleupi.

wallet
string
The name of the wallet used by the customer to make the payment. For example, payzapp.

acquirer_data
array
A dynamic array consisting of a unique reference numbers.

 

Errors
The API <key/secret> provided is invalid.

Error Status: 4xx

The API credentials passed in the API call differ from the ones generated on the Dashboard.

Solution

Capture amount must be equal to the amount authorized.

Error Status: 400

The capture amount is incorrect.
The amount you are trying to capture differs from the authorised amount .

Solution

Your payment has been declined as the order is already paid. Please initiate the payment with a new order.

Error Status: 400

This payment has already been captured.

Solution

The id provided does not exist

Error Status: 400

The payment_id provided is incorrect.

Solution

The requested URL was not found on the server.

Error Status: 400

The URL is incorrect.

Solution

The amount must be an integer

Error Status: 400

The amount specified is incorrect.

### Fetch a Payment With ID
`GET /v1/payments/:id`

Use this endpoint to retrieve the details of a specific payment using its id.

Path Parameters
id


string
Unique identifier of the payment to be retrieved.

Response Parameters
id
string
Unique identifier of the payment.

entity
string
Indicates the type of entity.

amount
integer
The payment amount in currency subunits. For example, for an amount of ₹1.00 enter 100.

currency
string
The currency in which the payment is made. Refer to the list of international currencies that we support.

status
string
The status of the payment. Possible values:
created
authorized
captured
refunded
failed

method
string
The payment method used for making the payment. Possible values:
card
netbanking
wallet
emi
upi

order_id
string
Order id, if provided. Know more about Orders.

description
string
Description of the payment, if any.

international
boolean
Indicates whether the payment is done via an international card or a domestic one. Possible values:
true: Payment made using international card.
false: Payment not made using international card.

refund_status
string
The refund status of the payment. Possible values:
null
partial
full

amount_refunded
integer
The amount refunded in currency subunits. For example, if amount_refunded = 100, it is equal to ₹1.00.

captured
boolean
Indicates if the payment is captured. Possible values:
true: Payment has been captured.
false: Payment has not been captured.

email
string
Customer email address used for the payment.

contact
string
Customer contact number used for the payment.

fee
integer
Fee (including GST) charged by Razorpay.

tax
integer
GST charged for the payment.

error_code
string
Error that occurred during payment. For example, BAD_REQUEST_ERROR.

error_description
string
Description of the error that occurred during payment. For example, Payment processing failed because of incorrect OTP.

error_source
string
The point of failure. For example, customer.

error_step
string
The stage where the transaction failure occurred. The stages can vary depending on the payment method used to complete the transaction. For example, payment_authentication.

error_reason
string
The exact error reason. For example, incorrect_otp.

notes
json object
Contains user-defined fields, stored for reference purposes.

created_at
integer
Timestamp, in UNIX format, on which the payment was created.

card_id
string
The unique identifier of the card used by the customer to make the payment.

card
object
Details of the card used to make the payment.

upi
object
Details of the UPI payment received. Only applicable if method is upi.

bank
string
The 4-character bank code which the customer's account is associated with. For example, UTIB for Axis Bank.

vpa
string
The customer's VPA (Virtual Payment Address) or UPI id used to make the payment. For example, gauravkumar@exampleupi.

wallet
string
The name of the wallet used by the customer to make the payment. For example, payzapp.

acquirer_data
array
A dynamic array consisting of a unique reference numbers.

 

Errors
The API {key/secret} provided is invalid.

Error Status: 4xx

The API credentials passed in the API call differ from the ones generated on the Dashboard.

Solution

The id provided does not exist.

Error Status: 400

The payment_id provided is incorrect.
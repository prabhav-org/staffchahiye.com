# API Integration Guide

## Endpoints Overview

### 1. Form Submission
```typescript
POST /api/business/submit-form
```
**Purpose**: Submit job requirements and create Airtable record
**Request Body**: Complete VacancyForm data
**Response**: `{ success: boolean, message: string, data: { recordId: string, phoneNumber: string } }`

### 2. OTP Operations
```typescript
POST /api/business/send-otp
POST /api/business/verify-otp
```
**Purpose**: Phone number verification
**Request Body**: `{ phoneNumber: string }` / `{ phoneNumber: string, otp: string }`
**Response**: `{ success: boolean, message: string }`

### 3. Payment Integration
```typescript
POST /api/business/continue-to-payment
```
**Purpose**: Generate PhonePe payment link
**Request Body**: `{ recordId: string }`
**Response**: `{ success: boolean, message: string, data: { paymentUrl: string, paymentId: string } }`

## Error Handling

### Network Errors
- **Timeout**: 10-second request timeout
- **Connection**: Automatic retry with user feedback
- **Server Errors**: HTTP status code handling

### Validation Errors
- **Form Data**: Zod schema validation
- **Phone Number**: Indian mobile format validation
- **OTP**: 6-digit numeric validation

## Implementation Details

### Request Configuration
```typescript
const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number)
```

### Response Types
```typescript
interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}
```

### Error Messages
- Form submission: "Form submitted successfully! Please verify your phone number."
- OTP sent: "OTP sent successfully!"
- OTP verified: "Phone number verified successfully!"
- Payment: "Payment link generated successfully!"

## Backend Integration

### Expected Backend Flow
1. **Form Submission** → Creates Airtable record
2. **OTP Verification** → Validates phone number
3. **Payment** → Generates PhonePe payment link
4. **Webhook** → `/payment/phonepe/webhook` handles payment status
5. **Backend Processing** → Updates Airtable, creates invoice, sends WhatsApp

### Required Backend Features
- Airtable integration for data storage
- SMS/WhatsApp OTP service
- PhonePe payment gateway integration
- Webhook handling for payment status
- WhatsApp API for candidate delivery 
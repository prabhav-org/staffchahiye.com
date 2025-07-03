# Component Architecture

## Business Flow Components

### 1. VacancyModal (Container)
**File**: `src/components/VacancyModal.tsx`
**Purpose**: Multi-step modal container
**Features**:
- Renders different components based on current step
- Handles flow navigation and state management
- Uses `useBusinessFlow` hook for state

### 2. VacancyForm (Step 1)
**File**: `src/components/forms/VacancyForm.tsx`
**Purpose**: Job requirements form
**Features**:
- React Hook Form with Zod validation
- Comprehensive job details input
- Default values for all required fields
- Error handling and validation feedback

### 3. OtpVerification (Step 2)
**File**: `src/components/OtpVerification.tsx`
**Purpose**: Phone number verification
**Features**:
- 6-digit OTP input with validation
- Resend functionality with 30-second countdown
- Phone number formatting display
- Back navigation to form

### 4. PaymentStep (Step 3)
**File**: `src/components/PaymentStep.tsx`
**Purpose**: Payment information and initiation
**Features**:
- Service fee breakdown (₹499)
- Payment benefits display
- PhonePe integration
- Back navigation to OTP

## State Management

### useBusinessFlow Hook
**File**: `src/hooks/useBusinessFlow.ts`
**Purpose**: Centralized business flow state management

**State Structure**:
```typescript
interface BusinessFlowState {
  currentStep: 'form' | 'otp' | 'payment' | 'completed';
  recordId: string | null;
  phoneNumber: string | null;
  paymentUrl: string | null;
  isProcessing: boolean;
}
```

**Key Methods**:
- `handleFormSubmit()` - Submit form and transition to OTP
- `handleSendOtp()` - Send OTP to phone number
- `handleVerifyOtp()` - Verify OTP and transition to payment
- `handleContinueToPayment()` - Generate payment link
- `resetFlow()` - Reset to initial state
- `goBack()` - Navigate to previous step

## UI Components

### Input Component
**File**: `src/components/ui/Input.tsx`
**Features**: Form input with error handling and validation

### Select Component
**File**: `src/components/ui/Select.tsx`
**Features**: Dropdown select with options and error display

## Data Flow

```
Landing Page → VacancyModal → VacancyForm → OtpVerification → PaymentStep → Success
     ↓              ↓              ↓              ↓              ↓
  Phone Input   Modal Open    Form Submit    OTP Verify    Payment Init
     ↓              ↓              ↓              ↓              ↓
  Validation    State Mgmt    API Call      API Call      PhonePe Redirect
```

## Error Handling

### Form Validation
- **Zod Schema**: Comprehensive validation rules
- **Real-time**: Field-level error display
- **Submission**: Prevents submission with errors

### API Errors
- **Network**: Timeout and connection error handling
- **Server**: HTTP status code handling
- **User Feedback**: Toast notifications for all states

### Navigation
- **Back Button**: Allows users to go back and edit
- **Reset**: Clears all data when modal is closed
- **State Persistence**: Maintains data during step transitions

## Responsive Design

### Mobile-First Approach
- **Touch-friendly**: Large buttons and inputs
- **OTP Input**: Optimized for mobile number entry
- **Payment**: Mobile-optimized payment flow

### Breakpoints
- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column layout
- **Desktop**: > 1024px - Full layout with side-by-side content 
# Calendar Notification & Reminder Features

## Overview
The calendar component now includes comprehensive notification and reminder functionality with support for sound alerts, email notifications, and text messages.

## Features

### 1. Global Notification Settings
- **Sound Alerts**: Toggle on/off sound notifications with fallback Web Audio API
- **Email Notifications**: Enable/disable email reminders
- **Text Messages**: Toggle SMS notifications on/off

### 2. Per-Booking Reminder Settings
Each booking can have individual reminder settings:
- **Reminder Time**: Set how many minutes before the event to send reminders (1-1440 minutes)
- **Sound**: Enable/disable sound for this specific booking
- **Email**: Enable/disable email for this specific booking
- **Text**: Enable/disable SMS for this specific booking
- **Contact Information**: Email address and phone number for notifications

### 3. Notification Types

#### Sound Notifications
- Primary: MP3 file (`/notification-sound.mp3`)
- Fallback: Web Audio API generated tone (800Hz → 600Hz → 800Hz)
- Volume control and error handling

#### Email Notifications
- Simulated email sending (logs to console)
- Ready for integration with services like SendGrid, Mailgun, etc.
- Customizable email templates

#### Text Notifications
- Simulated SMS sending (logs to console)
- Ready for integration with services like Twilio, AWS SNS, etc.
- Phone number validation

### 4. Testing Features
- **Test Buttons**: Test each notification type individually
- **Manual Trigger**: Trigger reminders immediately for any booking
- **Visual Feedback**: Toast notifications show when reminders are sent

### 5. Visual Indicators
- **Reminder Icons**: Show which notification types are enabled for each booking
- **Status Colors**: Color-coded booking statuses (confirmed, pending, cancelled, rescheduled)
- **Toast Notifications**: Real-time feedback for all actions

## Usage

### Setting Up Reminders
1. Click the bell icon (🔔) next to any booking
2. Configure reminder time and notification types
3. Add email address and/or phone number if needed
4. Save settings

### Testing Notifications
1. Use the "Test Notifications" section in Global Settings
2. Click individual test buttons for sound, email, or text
3. Use the orange alert icon (⚠️) next to bookings to trigger manual reminders

### Global Settings
- Toggle notification types on/off globally
- Test notifications with the provided buttons
- Settings apply to all bookings

## Technical Implementation

### Audio Handling
```typescript
// Primary audio (MP3)
const audio = new Audio('/notification-sound.mp3');
audio.volume = 0.5;

// Fallback audio (Web Audio API)
const createFallbackSound = () => {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  // ... frequency and gain setup
};
```

### Reminder Checking
- Automatic checking every 30 seconds
- 1-minute window for reminder timing
- Prevents duplicate notifications

### State Management
- Global notification settings
- Per-booking reminder configurations
- Toast notification queue
- Booking CRUD operations

## Integration Points

### Email Services
Replace the `sendEmailReminder` function with your preferred email service:
```typescript
const sendEmailReminder = async (booking: BookingInfo) => {
  // Example with SendGrid
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: booking.reminders?.emailAddress,
    from: 'noreply@yourdomain.com',
    subject: `Reminder: ${booking.title}`,
    text: `Your meeting "${booking.title}" starts in ${booking.reminders?.reminderTime} minutes.`,
  };
  
  await sgMail.send(msg);
};
```

### SMS Services
Replace the `sendTextReminder` function with your preferred SMS service:
```typescript
const sendTextReminder = async (booking: BookingInfo) => {
  // Example with Twilio
  const twilio = require('twilio');
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  
  await client.messages.create({
    body: `Reminder: ${booking.title} starts in ${booking.reminders?.reminderTime} minutes.`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: booking.reminders?.phoneNumber
  });
};
```

## File Structure
```
src/components/ui/visualize-booking.tsx  # Main calendar component
public/notification-sound.mp3            # Notification sound file
```

## Browser Compatibility
- **Sound**: Modern browsers with Audio API support
- **Fallback**: Web Audio API for browsers without MP3 support
- **Notifications**: All modern browsers

## Security Considerations
- Email addresses and phone numbers are stored in component state
- In production, implement proper data validation and sanitization
- Use environment variables for API keys
- Implement rate limiting for notifications

## Future Enhancements
- Push notifications for mobile devices
- Calendar integration (Google Calendar, Outlook)
- Recurring reminder patterns
- Custom notification templates
- Notification history and analytics
- Multi-language support for notifications 
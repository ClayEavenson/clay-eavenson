import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif', color: '#141312', lineHeight: '1.6', padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #e5e5e5', borderRadius: '4px' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#0b0c0d' }}>
      New Website Contact Submission
    </h1>
    <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '20px 0' }} />
    <div style={{ marginBottom: '20px' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}><strong>Name:</strong> {name}</p>
      <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}><strong>Email:</strong> {email}</p>
    </div>
    <div style={{ background: '#f3f0ec', padding: '16px', borderRadius: '4px', marginBottom: '20px' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f6a63' }}>Message:</p>
      <p style={{ margin: '0', fontSize: '16px', whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
    <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '20px 0' }} />
    <p style={{ margin: '0', fontSize: '12px', color: '#8e8a85', textAlign: 'center' }}>
      Sent from the clayeavenson.com contact form.
    </p>
  </div>
);

export default ContactEmail;

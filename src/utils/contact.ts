import type { ContactConfig } from '../types';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSendResult {
  success: boolean;
  message: string;
}

/**
 * Sends a contact message via Formspree, Web3Forms, or opens user's email client as fallback.
 */
export async function sendContactMessage(
  data: ContactFormData,
  config: ContactConfig,
  recipientEmail: string
): Promise<ContactSendResult> {
  const { name, email, message } = data;

  try {
    // 1. Formspree API
    if (config.formspreeUrl && config.formspreeUrl.trim() !== '') {
      const response = await fetch(config.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
        }),
      });

      const resData = await response.json();
      if (response.ok) {
        return {
          success: true,
          message: `Thank you, ${name}! Your message has been sent directly to ${recipientEmail}.`,
        };
      } else {
        throw new Error(resData.error || 'Failed to send message via Formspree.');
      }
    }

    // 2. Web3Forms API
    if (config.web3FormsKey && config.web3FormsKey.trim() !== '') {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: config.web3FormsKey,
          name,
          email,
          message,
          from_name: name,
          subject: `New Portfolio Message from ${name}`,
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        return {
          success: true,
          message: `Thank you, ${name}! Your message has been delivered directly to ${recipientEmail}.`,
        };
      } else {
        throw new Error(resData.message || 'Failed to send message via Web3Forms.');
      }
    }

    // 3. Fallback: Prefilled mailto link so no message is ever lost
    triggerMailtoFallback(data, recipientEmail);
    return {
      success: true,
      message: `Opening your email app to send directly to ${recipientEmail}. (To receive silently in the background, enter your free Web3Forms access key!)`,
    };
  } catch (err: any) {
    // Graceful fallback to email client on network/API failure
    triggerMailtoFallback(data, recipientEmail);
    return {
      success: true,
      message: `Network notice: Opening your email client as fallback to deliver directly to ${recipientEmail}.`,
    };
  }
}

/**
 * Triggers mailto link in browser with pre-filled subject and body.
 */
export function triggerMailtoFallback(data: ContactFormData, recipientEmail: string): void {
  const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Hi Krupa,\n\n${data.message}\n\n---\nSender Name: ${data.name}\nReply Email: ${data.email}`
  );
  window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

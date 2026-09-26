/**
 * Contact form submission API route.
 * Path: /api/contact
 *
 * Handles incoming contact form messages, validates inputs, and logs submissions.
 * Includes commented configuration for production email delivery via Resend or SendGrid.
 *
 * @param {import('next').NextApiRequest} req - The incoming HTTP request.
 * @param {import('next').NextApiResponse} res - The outgoing HTTP response.
 */
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`,
    });
  }

  try {
    const { name, email, company, projectType, budget, message } = req.body || {};

    // Validate that required fields are present and not empty
    if (
      !name ||
      !email ||
      !message ||
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        error: 'Missing required fields. Please provide your name, email, and message.',
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        error: 'Invalid email address format.',
      });
    }

    // Log the contact submission
    console.log('--- New Contact Form Submission ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', name.trim());
    console.log('Email:', email.trim());
    console.log('Company:', (company || '—').trim());
    console.log('Project Type:', projectType || 'Website project');
    console.log('Budget / Timeline:', (budget || '—').trim());
    console.log('Message:', message.trim());
    console.log('-----------------------------------');

    /*
     * Optional Production Email Delivery with Resend:
     * 1. npm install resend
     * 2. In .env.local: RESEND_API_KEY=re_xxxxxx
     * 3. Uncomment:
     *
     * if (process.env.RESEND_API_KEY) {
     *   const { Resend } = await import('resend');
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({
     *     from: 'Portfolio Contact <onboarding@resend.dev>',
     *     to: 'kavyashaw39@gmail.com',
     *     reply_to: email.trim(),
     *     subject: `Portfolio Inquiry from ${name.trim()} [${projectType || 'General'}]`,
     *     text: `From: ${name.trim()} (${email.trim()})\nCompany: ${company || '—'}\nProject: ${projectType || '—'}\nBudget: ${budget || '—'}\n\nMessage:\n${message.trim()}`,
     *   });
     * }
     */

    return res.status(200).json({
      success: true,
      message: 'Message received! Thank you for reaching out.',
    });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({
      error: 'An internal server error occurred while processing your request.',
    });
  }
}

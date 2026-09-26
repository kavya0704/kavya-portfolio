/**
 * Health check API route.
 * Path: /api/hello
 *
 * Verifies that the portfolio API is operational.
 *
 * @param {import('next').NextApiRequest} req - The incoming HTTP request.
 * @param {import('next').NextApiResponse} res - The outgoing HTTP response.
 */
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`,
    });
  }

  return res.status(200).json({
    status: 'ok',
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
  });
}

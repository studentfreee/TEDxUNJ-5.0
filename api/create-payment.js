// Vercel Serverless Function: POST /api/create-payment
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { nama, email, phone, quantity, totalPrice } = req.body || {};

    const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
    const authString = Buffer.from(serverKey + ':').toString('base64');

    const orderId = `TEDX-PRESALE-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const midtransPayload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: Number(totalPrice) || (quantity * 72000),
      },
      customer_details: {
        first_name: nama || 'Customer',
        email: email || 'customer@example.com',
        phone: phone || '081234567890',
      },
      item_details: [
        {
          id: 'TICKET-PRESALE-5',
          price: 72000,
          quantity: Number(quantity) || 1,
          name: 'Tiket Pre-Sale TEDxUNJ 5.0',
        },
      ],
      credit_card: {
        secure: true,
      },
    };

    const response = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${authString}`,
      },
      body: JSON.stringify(midtransPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Midtrans Sandbox API Error:', data);
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Server error creating payment:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: String(error) });
  }
}

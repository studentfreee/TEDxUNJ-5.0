import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function midtransDevPlugin(): Plugin {
  return {
    name: 'midtrans-dev-plugin',
    configureServer(server) {
      server.middlewares.use('/api/create-payment', async (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', async () => {
            try {
              const payload = JSON.parse(body || '{}');
              const { nama, email, phone, quantity, totalPrice } = payload;
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
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = response.status;
              res.end(JSON.stringify(data));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), midtransDevPlugin()],
})

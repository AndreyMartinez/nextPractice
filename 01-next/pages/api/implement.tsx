import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  url: string,
  text: string
}
export default function sendReturn(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ url: 'implement', text: 'Prueba' })
}

import { NextApiRequest, NextApiResponse } from 'next'
import invoices from '../../assets/invoices.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);

  const data = req.query.status
    ? invoices.filter((invoices) => {
      return invoices.status == req.query.status
    })
    : invoices;


  res.status(200).json(data);
}
interface PaystackProps {
  email: string;
  amount: number;
  publicKey: string;
  text?: string;
  onSuccess?: (reference: any) => void;
  onClose?: () => void;
}

interface PaystackResponse {
  reference: string;
  trans: string;
  status: string;
  message: string;
  transaction: string;
  trxref: string;
}

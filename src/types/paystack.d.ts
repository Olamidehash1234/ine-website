interface PaystackTransaction {
  reference: string;
  trans?: string;
  status?: string;
  message?: string;
  transaction?: string;
  trxref?: string;
}

declare module '@paystack/inline-js' {
  interface PaystackOptions {
    key: string;
    email: string;
    amount: number;  // required for one-time payments (in kobo)
    currency?: string;
    ref?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    metadata?: any;
    onSuccess: (transaction: PaystackTransaction) => void;
    onCancel: () => void;
  }

  export default class PaystackPop {
    constructor();
    newTransaction(options: PaystackOptions): void;
  }
}

export interface IPaymentMethod {
  bicSwift?: string | null | undefined;
  cardNumbers?: string | null | undefined;
  createdTs: number;
  email?: string | null | undefined;
  expiryDate?: string | null | undefined;
  iban?: string | null | undefined;
  id: string;
  name: string;
  nameOnCard?: string | null | undefined;
  notes?: string | null | undefined;
  type?: string | null | undefined;
  updatedTs?: number | null | undefined;
  walletAddress?: string | null | undefined;
}

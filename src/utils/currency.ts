import { CashMoney } from "@/lib/big";

export function toCurrencyFromCents(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100);
}

export function toCent(amount: number) {
  return CashMoney(amount).mul(100).round(2).toNumber();
}

export function fromCent(amount: number) {
  return CashMoney(amount).div(100).round(2).toNumber();
}

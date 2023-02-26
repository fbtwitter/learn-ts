export interface Address {
  street: string;
  number: number;
  zip: string;
}

export interface User {
  name: string;
  age: number;
  address: Address;
  admin: boolean;
}

export interface IBank {
    id: number;                // required, int NOT NULL
    bankName: string;         // required, varchar(500) NOT NULL
    bankCreatedBy?: number;  // optional, int NULL
  }
  
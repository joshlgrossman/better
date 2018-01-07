import { Model } from './decorators';

@Model({
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
  body: String
})
export class Transaction {}

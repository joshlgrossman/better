import { Model } from './decorators';

@Model({
  from: { type: String, required: true },
  to: { type: String, required: true },
  body: {
    type: String,
    minlength: 1
  }
})
export class Message {}

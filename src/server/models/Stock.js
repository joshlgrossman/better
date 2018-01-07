import { Model, Hook } from './decorators';

@Model({
  symbol: String,
  price: Number,
  history: [ Number ],
  description: String
})
export class Stock {
  @Hook('pre', 'save')
  saveHistory(next) {
    if (!this.isModified('price')) return next();

    this.history = [ this.price, ...this.history.slice(0, 10) ];

    next();
  }
}

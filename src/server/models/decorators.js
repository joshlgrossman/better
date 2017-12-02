import * as mongoose from 'mongoose';

const HookSymbol = Symbol('Hook');

export function Model(properties) {
  return target => {
    const schema = mongoose.Schema(properties);
    schema.loadClass(target);
    const metadata = Reflect.getMetadata(HookSymbol, target.prototype);
    for (const hook in metadata) {
      for (const type in metadata[hook]) {
        schema[hook](type, metadata[hook][type]);
      }
    }

    const model = mongoose.model(target.name, schema);

    return class extends target {
      static get schema() {
        return schema;
      }
      static get model() {
        return model;
      }
    };
  };
}

export function Hook(hook, type) {
  return (target, key) => {
    let metadata = Reflect.getMetadata(HookSymbol, target);

    if (!metadata) {
      metadata = {};
      Reflect.metadata(HookSymbol, metadata)(target);
    }

    metadata[hook] = metadata[hook] || {};
    metadata[hook][type] = target[key];
  };
}

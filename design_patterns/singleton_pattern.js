class Singleton {
  constructor() {}
  // Properties & Methods
}

const instance = new Singleton();
Object.freeze(instance);

export default instance;

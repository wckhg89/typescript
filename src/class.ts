class MyCar {
  public _carName: string;
  private _numTier: number;

  constructor(carName: string, numTier: number) {
    this._carName = carName;
    this._numTier = numTier;
  }

  getCarName(): string {
    return this._carName;
  }

  get numTier() {
    return this._numTier
  }
}

let my:MyCar = new MyCar("happy", 4);
my._carName;
console.log(my.getCarName() + " -- " + my.numTier);

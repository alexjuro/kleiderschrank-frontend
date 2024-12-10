class Outfit {
  id!: number;
  closetDTO: Closet;
  clothinigDTOList!: Clothing[];

  constructor(id: number, closet: Closet, clothings: Clothing[]) {
    this.id = id;
    this.closetDTO = closet;
    this.clothinigDTOList = clothings;
  }
}

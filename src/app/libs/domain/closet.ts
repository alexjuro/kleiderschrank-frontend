class Closet {
  id!: number;
  userDTO?: User;
  clothingDTOList?: Clothing[];

  constructor(id: number, user: User, clothings: Clothing[]) {
    this.id = id;
    this.userDTO = user;
    this.clothingDTOList = clothings;
  }
}

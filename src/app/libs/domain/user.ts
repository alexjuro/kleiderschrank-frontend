class User {
  uid!: string;
  name!: string;
  email!: string;
  createdAt!: Date;
  closetDTO!: Closet;

  constructor(
    uid: string,
    name: string,
    email: string,
    createdAt: Date,
    closet: Closet
  ) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.createdAt = new Date(createdAt);
    this.closetDTO = closet;
  }
}

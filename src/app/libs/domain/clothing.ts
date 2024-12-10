class Clothing {
  id!: number;
  brand!: string;
  descirption?: string;
  imageBage64!: string;
  inLaundry!: boolean;
  category!: Category;
  color!: Color;
  type!: Type;
  closetDTO?: Closet;
  outfitDTOList?: Outfit[];

  constructor(
    id: number,
    brand: string,
    description: string,
    imageBase64: string,
    inLaundry: boolean,
    catergory: Category,
    color: Color,
    type: Type,
    closet: Closet,
    outfits: Outfit[]
  ) {
    this.id = id;
    this.brand = brand;
    this.descirption = description;
    this.imageBage64 = imageBase64;
    this.inLaundry = inLaundry;
    this.category = catergory;
    this.color = color;
    this.type = type;
    this.closetDTO = closet;
    this.outfitDTOList = outfits;
  }
}

enum Category {
  "PANTS",
  "TSHIRT",
  "TOP",
  "SWEATER",
  "JACKET",
}

enum Color {
  "RED",
  "GREEN",
  "BLUE",
  "YELLOW",
  "CYAN",
  "MAGENTA",
  "BLACK",
  "WHITE",
  "GRAY",
  "ORANGE",
  "PINK",
  "PURPLE",
  "BROWN",
  "BEIGE",
  "VIOLET",
  "INDIGO",
  "COLORFUL",
}

enum Type {
  "JEANS",
  "CHINOS",
  "CARGOPANTS",
  "JOGGINGPANTS",
  "LEGGINGS",
  "SUITPANTS",
  "SHORTS",

  "BLOUSE",
  "SHIRT",
  "SWEATSHIRT",
  "PULLOVER",
}

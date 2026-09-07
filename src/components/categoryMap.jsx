import {
  PhoneDataFile,
  IphoneFile,
  OppoFile,
  VivoFile,
  GioneeFile,
  RedmiFile,
  HonorFile,
} from "./ProductData"

// Add new brands/categories here later — everything else (nav, routes, grid) reads from this
export const categoryMap = {
  samsung: { label: "Samsung", data: PhoneDataFile },
  iphone:  { label: "iPhone",  data: IphoneFile },
  oppo:    { label: "Oppo",    data: OppoFile },
  vivo:    { label: "Vivo",    data: VivoFile },
  gionee:  { label: "Gionee",  data: GioneeFile },
  redmi:   { label: "Redmi",   data: RedmiFile },
  honor:   { label: "Honor",   data: HonorFile },
}

// Top-level categories — "Phones" today, "Accessories"/"Tablets" can be added
// the same way once you have data files for them
export const categories = [
  {
    label: "Phones",
    slug: "phones",
    brands: Object.keys(categoryMap), // ["samsung", "iphone", ...]
  },
]
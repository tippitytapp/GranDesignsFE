import snowman from "./GranDesignsAssetss/3snowmen.jpg"
import lighthouse from "./GranDesignsAssetss/20200707_113939.jpg"
import mobile from "./GranDesignsAssetss/20200707_113957.jpg"
import sophie from "./GranDesignsAssetss/20200707_113737.jpg"
export const fakedata = [
  {
    id: 1,
    title: "Snowman Party",
    price: 25,
    size: "",
    description: "",
    src: snowman,
    alt: "3 snowmen together in the snow",
    type_id: "painting",
    custom: false,
    tags: ["christmas", "snowmen", "snow", "painting"],
  },
  {
    id: 2,
    title: "Lighthouse Waves",
    src: lighthouse,
    alt: "waves crashing into a lighthouse",
    description: "",
    custom: false,
    tags: ["water", "ocean", "waves", "lighthouse", "painting"],
    price: 15,
    type: "painting",
  },
  {
    id: 3,
    title: "Merry Christmas Mobile",
    src: mobile,
    alt: "Red car covered in snow with wreath",
    description: "",
    custom: false,
    tags: ["christmas", "vehicles", "snow", "painting"],
    price: 35,
    type: "painting",
  },
  {
    id: 4,
    title: "Scholarly Rabbit",
    src: sophie,
    alt: "Rabbit with glasses, and bowtie",
    description: "",
    custom: true,
    tags: ["rabbit", "animal", "portrait", "painting"],
    price: 25,
    type: "painting",
  },
];
import { Image } from "sanity";

export type DestinationTypes = {
    name: string;
    _id: string;
    _createdAt: Date;
    image: Image;
    slug:string;
    content: string;
}
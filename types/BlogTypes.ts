import { Image, PortableTextBlock } from "sanity"

export type BlogTypes = {
    _id: string;
    _createdAt: Date;
    title:string;
    // content: PortableTextBlock[];
    slug:string;
    image: Image;
    author:string;
    authorimage:Image;
    content:string;
    
}
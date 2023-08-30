import { DestinationTypes } from "@/types/DestinationTypes";
import { client } from "./lib/client";
import { BlogTypes } from "@/types/BlogTypes";
import { groq } from "next-sanity";
import { TeamTypes } from "@/types/TeamTypes";
import { TestimonialsTypes } from "@/types/TestimonialTypes";


//Fetch all destinations
export async function getDestinations(): Promise<DestinationTypes[]> {
    const querry = groq`*[_type == "destination"]{
        _id,
        name,
        "slug":slug.current,
        "image": image.asset->url
        
    }`;
    const data = await client.fetch(querry, { next: { revalidate: 3600 } });
    return data;
}

//Fetch a single destination using a slug param
export async function getDestination(slug: string): Promise<DestinationTypes> {
  const querry = groq`*[_type == "destination" && slug.current == "${slug}"][0]{
        _id,
        "image": image.asset->url,
        "slug": slug.current,
        name,
        content
    }`;
  const data = await client.fetch(querry, { next: { revalidate: 3600 } });
  return data;
}

//Fetch all blogs
export async function getBlogs(): Promise<BlogTypes[]> {
  const querry = groq`*[_type == "blog"]{
        _id,
        "slug": slug.current,
        "image":image.asset->url,
        title,
        content,
        author,
        "authorimage":image.asset->url,
        _createdAt

    }`;
  const data = await client.fetch(querry, { next: { revalidate: 3600 } });
  return data;
}

//Fetch a single blog using a param slug
export async function getBlog(slug: string): Promise<BlogTypes> {
  const querry = groq`*[_type == "blog" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        "image":image.asset->url,
        "slug": slug.current,
        content,
        title,
        author,
        "authorimage":image.asset->url
    }`;
  const data = await client.fetch(querry, { next: { revalidate: 3600 } });
  return data;
}


//Fetch team
export async function getTeam() : Promise<TeamTypes[]>{
    const querry = groq`*[_type == "team"]{
        _id,
        "image":image.asset->url,
        firstname,
        designation
    }`;
    const data = await client.fetch(querry);
    return data;
}

//Fetch Testimonials

export async function getTestimonials() : Promise<TestimonialsTypes[]>{
    const querry = groq`*[_type == 'testimonial']{
        _id,
        "image": image.asset->url,
        message,
        client
    }`;
    const data = client.fetch(querry);
    return data;
}
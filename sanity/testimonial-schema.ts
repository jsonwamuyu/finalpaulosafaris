const testimonial = {
name:"testimonial",
title:'Testimonials',
type:"document",
fields:[
    {
        name:"client",
        title:"Client",
        type:"string"
    },
    {
        name:"message",
        title:"Message",
        type:"string"
    },
    {
        name:"image",
        title:"Image",
        type:"image",
        options:{hotspot: true},
        fields:[
            {
                name:"alt",
                title:"Alt",
                type:"string"
            }
        ]
    }
]
}
export default testimonial;
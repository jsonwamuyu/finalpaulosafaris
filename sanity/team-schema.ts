const team = {
    name:"team",
    type:"document",
    title:"Team",
    fields:[
        {
            name:'firstname',
            title:"First Name",
            type:"string"
        },
        {
            name:"designation",
            title:"Designation",
            type:"string"
        },
        {
            name:'image',
            title:"Image",
            type:"image",
            options:{hotspot: true}
        }
    ]
}

export default team;
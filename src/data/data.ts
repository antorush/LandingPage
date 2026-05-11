import icon1 from "../assets/icons/services/car.svg"
import icon2 from "../assets/icons/services/human.svg"
import icon3 from "../assets/icons/services/trophy.svg"
import icon4 from "../assets/icons/services/piggy-bank.svg"

import power1 from "../assets/icons/powerful/icon1.svg";
import power2 from "../assets/icons/powerful/icon2.svg";
import power3 from "../assets/icons/powerful/icon3.svg";
import power4 from "../assets/icons/powerful/icon4.svg";





export type THeaderItem={
    id:number | string,
    name:string,
    path:string,
}

export type TServicesItem={
    id:number | string,
    icon:string,
    title:string,
    description:string,
}

export type TServices={
    services:TServicesItem[];
}

export const servicesData:TServicesItem[]=[{
    id:0,
    icon:icon1,
    title:"Et mauris",
    description:"Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
},{
    id:1,
    icon:icon2,
    title:"Eget sit",
    description:"Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
},{
    id:2,
    icon:icon3,
    title:"Imperdiet pellentesque",
    description:"Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
},{
    id:3,
    icon:icon4,
    title:"Non libero",
    description:"Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
},]


export type TPowerFull={
    id:number | string,
    icon:string,
    title:string,
    description:string,
}

export type TPowerfullList={
    powerfull:TPowerFull[],
}

export const header:THeaderItem[]=[{
    id:0,
    name:"Products",
    path:"products"
},{
      id:1,
    name:"Solutions",
    path:"Solutions"
},
{
      id:2,
    name:"Services",
    path:"Services"
},{
      id:3,
    name:"Configure",
    path:"Configure"
}]

export const powerfulData:TPowerFull[]=[{
    id:0,
    icon:power1,
    title:"Erat sit",
    description:'Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.',
},
{
    id:1,
    icon:power2,
    title:"Ullamcorper arcu"    ,
    description:'Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.',
},{
    id:2,
    icon:power3,
    title:"Et pellentesque",
    description:'Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.',
},{
    id:3,
    icon:power4,
    title:"Amet egestas",
    description:'Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ',
},
]
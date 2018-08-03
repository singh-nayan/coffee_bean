import React from 'react';
import {FaLongArrowAltLeft,FaLongArrowAltRight} from 'react-icons/fa';

export const offerData={

    data1:{
        title:"TYPES OF COFFEE",
        detail:"Another thing about coffee is the commublock-offer  m-auto pt-5 pb-5nity. Coffee drinkers have something in common when we walk into a coffee shop. We are all anticipating for that ultimate cup as we stay in line for our names to be called. We already made up about coffee.",
        icon1:"",
        icon2:"",
        icon3:""
    },

    data2:{
        title:"COFFEE & PASTRY",
        detail:"nother thing about coffee is the community. Coffee drinkers have something in common when we walk into a coffee shop. We are all anticipating for that ultimate cup as we stay in line for our names to be called. We already made up about coffee.",
        icon1:"",
        icon2:"",
        icon3:""
    },

    arrowLeft:{
        icon: <FaLongArrowAltLeft/>,
        anchorClass:"flex-prev",
        italicClass:"icon-left-open-big"
        },

    arrowRight:{
        icon: <FaLongArrowAltRight/>,
        anchorClass:"flex-next",
        italicClass:"icon-right-open-big"
        }
}


export const aboutImagesData={
    image1:"http://mutationmedia.net/COFFEEBEN/img/3.jpg",
    image2:"http://mutationmedia.net/COFFEEBEN/img/4.jpg",
    image3:"http://mutationmedia.net/COFFEEBEN/img/5.jpg"
}

export const galleryData={
    image1:{
        anchor:"popup-image",
        imageClass:"animated",
        image:"http://mutationmedia.net/COFFEEBEN/img/12.jpg",
        div1:{
            class:"col-lg-3 col-md-6 col-12 block-item-masonry gap-before",
            style:{
                position:"absolute",
                left:"0px", 
                top:"0px"
            }
        },

        div2:{
            class:"block-item height-41"
        },

        div3:{
            class:"background-img animated",
            style:{
                "backgroundPosition":"initial",
                "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/12.jpg)`
            }
        }
    },

    image2:{
        anchor:"popup-image",
        imageClass:"animated",
        image:"http://mutationmedia.net/COFFEEBEN/img/13.jpg",
        div1:{
            class:"col-lg-3 col-md-6 col-12 block-item-masonry gap-before",
            style:{
                position:"absolute", 
                left:"321px",
                top:"0px"
            }
        },

        div2:{
            class:"block-item height-41"
        },

        div3:{
            class:"background-img animated",
            style:{
                "backgroundPosition":"initial",
                "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/13.jpg)`
            }
        }
    },

    image3:{
        anchor:"popup-image",
        imageClass:"animated",
        image:"http://mutationmedia.net/COFFEEBEN/img/10.jpg",
        div1:{
            class:"col-lg-6 col-md-6 col-12 block-item-masonry",
            style:{
                position:"absolute", 
                left:"643px", 
                top:"0px"
            }
        },

        div2:{
            class:"block-item height-82"
        },

        div3:{
            class:"background-img animated",
            style:{
                "backgroundPosition":"initial",
                "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/10.jpg)`
            }
        }
    },

    image4:{
        anchor:"popup-image",
        imageClass:"animated",
        image:"http://mutationmedia.net/COFFEEBEN/img/11.jpg",
        div1:{
            class:"col-lg-3 col-md-6 col-12 masonry block-item-masonry gap-before gap-after",
            style:{
                position:"absolute", 
                left:"0px", 
                top:"137px"
            }
        },

        div2:{
            class:"block-item height-41"
        },

        div3:{
            class:"background-img animated",
            style:{
                "backgroundPosition":"initial",
                "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/11.jpg)`
            }
        }
    },

    image5:{
        anchor:"popup-image",
        imageClass:"animated",
        image:"http://mutationmedia.net/COFFEEBEN/img/14.jpg",
        div1:{
            class:"col-lg-3 col-md-6 col-12 masonry block-item-masonry gap-before gap-after",
            style:{
                position:"absolute", 
                left:"321px",
                top:"137px"
            }
        },

        div2:{
            class:"block-item height-41"
        },

        div3:{
            class:"background-img animated",
            style:{
                "backgroundPosition":"initial",
                "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/14.jpg)`
            }
        }
    },

}

export const chicagoData={
    front:{
        title:"CHICAGO",
        heading:"COFFEESHOP HOURS",
        detail:"Monday - Saturday: 11am - 8pm \n Sunday : 11am - 6pm",
        footer:"MORE INFO"
    },

    back:{
        title:"CHICAGO",
        heading:"COFFEESHOP ADDRESS",
        detail:"225 N Wabash Ave \n"+" Chicago, IL 60601",
        footer:"LOCATION",
        link:"https://www.google.com/maps/place/225+N+Wabash+Ave,+Chicago,+IL+60601,+USA/@41.8866316,-87.6282694,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2caf0aadec7f:0x2639e1ca20b4550!8m2!3d41.8866276!4d-87.6260807?shorturl=1"
    }
}

export const brooklynData={
    front:{
        title:"BROOKLYN",
        heading:"COFFEESHOP HOURS",
        detail:"Monday - Saturday: 11am - 8pm \n Sunday : 11am - 6pm",
        footer:"MORE INFO"
    },

    back:{
        title:"BROOKLYN",
        heading:"COFFEESHOP ADDRESS",
        detail:"1080 Broadway \n Brooklyn,NY 11221",
        footer:"LOCATION",
        link:"https://www.google.com/maps/place/1080+Broadway,+Brooklyn,+NY+11221,+USA/@40.694276,-73.9332597,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25c094427dd4d:0x5d01e41e3a525949!8m2!3d40.694272!4d-73.931071?shorturl=1"
    }
}

export const NYData={
    front:{
        title:"NEWYORK",
        heading:"COFFEESHOP HOURS",
        detail:"Monday - Saturday: 11am - 8pm \n Sunday : 11am - 6pm",
        footer:"MORE INFO"
    },

    back:{
        title:"NEWYORK",
        heading:"COFFEESHOP ADDRESS",
        detail:"63 W 38th St,New York \n NY 10018",
        footer:"LOCATION",
        link:"https://www.google.com/maps/place/63+W+38th+St,+New+York,+NY+10018,+USA/@40.7522111,-73.98756,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259aa5aa97895:0x6d7b46d19d74d82a!8m2!3d40.7522071!4d-73.9853713?shorturl=1"
    }
}

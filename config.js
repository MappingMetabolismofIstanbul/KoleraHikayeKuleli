var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kentlerin Su Altyapısını Kuran Bir Bakteri: “Vibrio Choleraea”',
    subtitle: ' "Vibrio cholerae" : The Bacterium Behind Urban Water Infrastructure',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.965, 41.031],
                zoom:16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/NnmS4cPC/MEF-AAP-027-BAP-2025-08-01-14-07-20.png',
            description: '',
            location: {
                center: [28.976, 41.019],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/bgYtfbdS/MEF-AAP-027-BAP-2025-07-31-07-03-03.png',
            description: '',
            location: {
                center: [29.009, 41.036],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/cSJRS0bk/MEF-AAP-027-BAP-2025-07-31-07-04-01.png',
            description: '',
            location: {
                center: [29.035, 41.049],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/ycwrt7wY/MEF-AAP-027-BAP-2025-07-31-07-04-55.png',
            description: '',
            location: {
                center: [29.054, 
41.059],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
       
    ]
};

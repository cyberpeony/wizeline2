import React from 'react';
// import React, { useEffect, useRef } from 'react'; 
import * as d3 from 'd3';
import styles from './Ruleta.module.css';

function Ruleta() {
    const svgRef = useRef(null);

    useEffect(() => {
const width = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--width'));
const height = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--height'));
const radius = Math.min(width, height) / 2;

const colorScale = d3.scaleOrdinal()
    .domain(["Educational", "Development", "General", "Design", "Marketing", "Operations", "People"])
    .range(["#910000", "#FFFFFF", "#4A4E4E", "#0C2A65"]);

        const data = [
            { label: "Educational", count: 1 },
            { label: "Development", count: 1 },
            { label: "General", count: 1 },
            { label: "Design", count: 1 },
            { label: "Marketing", count: 1 },
            { label: "Operations", count: 1 },
            { label: "People", count: 1 }
        ];

const svg = d3.select(svgRef.current)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3.pie()
            .value(d => d.count)
            .sort(null);

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        const arcs = svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => colorScale(i % 3))
            .attr("stroke", "black") 
            .style("stroke-width", "2px");

svg.append("circle")
    .attr("class", "contornoRuleta")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", radius - 16);

const titleTexts = svg.selectAll(".titleText")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "titleText")
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("transform", (d, i) => {
        const angle = (i / data.length) * 360;
        const rotate = 'rotate(' + (angle - 90) + ')';
        const translate = 'translate(0, -' + (radius - 20) + ')';
        return rotate + translate;
    })
    .text(d => d.label);

svg.append("circle")
    .attr("class", "circuloCentral")
    .attr("r", 60);

const centerCircle = svg.append("circle")
    .attr("r", 50)
    .attr("fill", "url(#imagen)")
    .on("click", () => {
        centerCircle.transition()
            .duration(2000)
            .attrTween("transform", function() { return d3.interpolateString("rotate(0)", "rotate(360)"); });
    });

const defs = svg.append("defs");
defs.append("pattern")
    .attr("id", "imagen")
    .attr("height", 1)
    .attr("width", 1)
    .attr("x", "0")
    .attr("y", "0")
    .append("image")
    .attr("xlink:href", "./logos/logowizeline.png")
    .attr("height", 100)
    .attr("width", 100)
    .attr("x", 0)
    .attr("y", 0);

    const selectedArc = arcs.filter((d, i) => i === 0);
    
    const predefinedPositions = [
        [40, -72],
        [30, -115],
        [77, -96],
        [115, -125],
        [72, -150],
        [30, -160],
        [30, -210],
        [75, -200],
        [120, -180],
        [157, -148],
        [190, -185],
        [155, -219],
        [115, -240],
        [75, -255],
        [30, -260],
    ];
    
    const imagePaths = [
        "./logos/logo1.png",
        "./logos/logo2.png",
        "./logos/logo3.png",
        "./logos/logo4.png",
        "./logos/logo5.png",
        "./logos/logo6.png",
        "./logos/logo7.png",
        "./logos/logo8.png",
        "./logos/logo9.png",
        "./logos/logo10.png",
        "./logos/logo11.png",
        "./logos/logo12.png",
        "./logos/logo13.png",
        "./logos/logo14.png",
        "./logos/logo15.png",
    ];

    for (let i = 0; i < 15; i++) {
        selectedArc.append("image")
            .attr("xlink:href", imagePaths[i % imagePaths.length])
            .attr("x", predefinedPositions[i][0] - 24) 
            .attr("y", predefinedPositions[i][1] - 25) 
            .attr("width", 32) 
            .attr("height", 52); 
    }

const secondArc = arcs.filter((d, i) => i === 1);

const predefinedPositions2 = [
        [155, -90],
];

const imagePaths2 = [
    "./logos/logo16.png",
];

for (let i = 0; i < 1; i++) {
    secondArc.append("image")
        .attr("xlink:href", imagePaths2[i % imagePaths2.length]) 
        .attr("x", predefinedPositions2[i][0] - 25) 
        .attr("y", predefinedPositions2[i][1] - 24) 
        .attr("width", 135) 
        .attr("height", 135); 
}

    const thirdArc = arcs.filter((d, i) => i === 2);
    
    const predefinedPositions3 = [
        [75, 60],
        [120, 62],
        [85, 110],
        [140, 110],
        [175, 72],
        [106, 150],
        [195, 120],
        [235, 88],
        [165, 160],
        [120, 190],
        [170, 220],
        [226, 160],
    ];
    
    const imagePaths3 = [
        "./logos/logo17.png",
        "./logos/logo18.png",
        "./logos/logo19.png",
        "./logos/logo20.png",
        "./logos/logo21.png",
        "./logos/logo22.png",
        "./logos/logo23.png",
        "./logos/logo24.png",
        "./logos/logo25.png",
        "./logos/logo26.png",
        "./logos/logo27.png",
        "./logos/logo28.png",
    ];
    
    for (let i = 0; i < 12; i++) {
        thirdArc.append("image")
            .attr("xlink:href", imagePaths3[i % imagePaths3.length])
            .attr("x", predefinedPositions3[i][0] - 25) 
            .attr("y", predefinedPositions3[i][1] - 24) 
            .attr("width", 32) 
            .attr("height", 32); 
    }

    const fourthArc = arcs.filter((d, i) => i === 3);
    
    const predefinedPositions4 = [
        [-12, 90],
        [-48, 160],
        [40, 190],
        [-40, 235],
    ];
    
    const imagePaths4 = [
        "./logos/logo29.png",
        "./logos/logo30.png",
        "./logos/logo31.png",
        "./logos/logo32.png",
    ];
    
    for (let i = 0; i < 4; i++) {
        fourthArc.append("image")
            .attr("xlink:href", imagePaths4[i % imagePaths4.length])
            .attr("x", predefinedPositions4[i][0] - 25) 
            .attr("y", predefinedPositions4[i][1] - 24)
            .attr("width", 75) 
            .attr("height", 75); 
    }


    const fifthArc = arcs.filter((d, i) => i === 4);
    
    const predefinedPositions5 = [
        [-115, 65],
        [-195, 145],
    ];
    
    const imagePaths5 = [
        "./logos/logo33.png",
        "./logos/logo34.png",
    ];
    
    for (let i = 0; i < 2; i++) {
        fifthArc.append("image")
            .attr("xlink:href", imagePaths5[i % imagePaths5.length]) 
            .attr("x", predefinedPositions5[i][0] - 25) 
            .attr("y", predefinedPositions5[i][1] - 24) 
            .attr("width", 85) 
            .attr("height", 85);
    }


    const sixthArc = arcs.filter((d, i) => i === 5);
    
    const predefinedPositions6 = [
        [-242, -86],
    ];
    
    const imagePaths6 = [
        "./logos/logo35.png",
    ];
    
    for (let i = 0; i < 1; i++) {
        sixthArc.append("image")
            .attr("xlink:href", imagePaths6[i % imagePaths6.length])
            .attr("x", predefinedPositions6[i][0] - 25) 
            .attr("y", predefinedPositions6[i][1] - 24) 
            .attr("width", 135) 
            .attr("height", 135); 
    }


    const seventhArc = arcs.filter((d, i) => i === 6);
    
    const predefinedPositions7 = [
        [-30, -72],
        [-21, -115],
        [-77, -96],
        [-110, -128],
        [-72, -168],
        [-25, -158],
        [-20, -215],
        [-75, -235],
        [-120, -211],
        [-146, -158],
        [-180, -195],
    ];
    
    const imagePaths7 = [
        "./logos/logo36.png",
        "./logos/logo37.png",
        "./logos/logo38.png",
        "./logos/logo39.png",
        "./logos/logo40.png",
        "./logos/logo41.png",
        "./logos/logo42.png",
        "./logos/logo43.png",
        "./logos/logo44.png",
        "./logos/logo45.png",
        "./logos/logo46.png",
    ];

    for (let i = 0; i < 11; i++) {
        seventhArc.append("image")
            .attr("xlink:href", imagePaths7[i % imagePaths7.length])
            .attr("x", predefinedPositions7[i][0] - 24)
            .attr("y", predefinedPositions7[i][1] - 25) 
            .attr("width", 32) 
            .attr("height", 52); 
    }
}, []);

  return (
    <svg ref={svgRef}></svg> 
); 
}

export default Ruleta;
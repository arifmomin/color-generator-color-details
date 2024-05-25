const color_generate = document.querySelector(".color_generate");
const button = document.querySelector(".button");
const color_heading = document.querySelector(".color_heading");
const output = document.querySelector(".output");
const copy_icon = document.querySelector(".copy_icon");
const check_icon = document.querySelector(".check_icon");
const color_name = document.getElementById('color-name');
const color_hex = document.getElementById('color-hex');
const color_rgb = document.getElementById('color-rgb');
const color_input = document.getElementById('color-input');
const input_button = document.querySelector(".input-button");
const input_color_display = document.querySelector(".input_color_display");
const input_color_name = document.getElementById('input-color-name');
const input_color_hex = document.getElementById('input-color-hex');
const input_color_rgb = document.getElementById('input-color-rgb');
const input_output = document.querySelector(".input-output");

// Random color generator button click
button.addEventListener("click", () => {
    const colorcode = generateColor();
    const hexColor = rgbToHex(colorcode);
    const colorName = ntc.name(hexColor)[1];

    color_generate.style.background = hexColor;
    const headingColorCode = generateColorHeading();
    color_heading.style.color = headingColorCode;

    output.value = `rgb(${colorcode.r}, ${colorcode.g}, ${colorcode.b})`;
    color_name.textContent = colorName;
    color_hex.textContent = hexColor;
    color_rgb.textContent = `rgb(${colorcode.r}, ${colorcode.g}, ${colorcode.b})`;

    copy_icon.style.display = "inline";
    check_icon.style.display = "none";
    color_heading.innerHTML = "Generate Color Code";
});

copy_icon.addEventListener("click", () => {
    const colorcode = output.value;
    copyColorCode(colorcode);
});

// Input color button click
input_button.addEventListener("click", () => {
    let colorcode = color_input.value.trim();
    let rgbColor;

    if (colorcode.startsWith('#')) {
        rgbColor = hexToRgb(colorcode);
    } else if (colorcode.startsWith('rgb')) {
        rgbColor = parseRgb(colorcode);
        colorcode = rgbToHex(rgbColor);
    } else {
        alert('Invalid color code');
        return;
    }

    const colorName = ntc.name(colorcode)[1];

    input_color_display.style.background = colorcode;
    // input_output.value = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    input_color_name.textContent = colorName;
    input_color_hex.textContent = colorcode;
    input_color_rgb.textContent = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
});

function generateColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return { r: red, g: green, b: blue };
}

function generateColorHeading() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function rgbToHex({r, g, b}) {
    return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return {r, g, b};
}

function parseRgb(rgb) {
    let result = rgb.match(/\d+/g);
    return {r: parseInt(result[0]), g: parseInt(result[1]), b: parseInt(result[2])};
}

function copyColorCode(colorcode) {
    navigator.clipboard.writeText(colorcode).then(() => {
        copy_icon.style.display = "none";
        check_icon.style.display = "inline";
        color_heading.innerHTML = `Copy Done: ${colorcode}`;
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
























































































// const color_generator = document.querySelector(".color_generator"); // সংশোধিত ক্লাস নাম
// const input_button = document.querySelector(".input_button");
// const color_head = document.querySelector(".color_head");
// const output = document.querySelector(".output");
// const icon_copy = document.querySelector(".icon_copy");
// const icon_check = document.querySelector(".icon_check");
// const Color_name = document.getElementsByClassName('Color-name');
// const Color_hex = document.getElementsByClassName('Color-hex');
// const Color_rgb = document.getElementsByClassName('Color-rgb');

// input_button.addEventListener("click", () => {
//     const Colorcode = generateColor();
//     const hexColor = rgbToHexa(Colorcode);
//     const Colorname = ntc.name(hexColor)[1];

//     color_generator.style.background = hexColor; // সংশোধিত ক্লাস নাম
//     const HeadingColorCode = generateColorHead();
//     color_head.style.color = HeadingColorCode;

//     output.value = `rgb(${Colorcode.r}, ${Colorcode.g}, ${Colorcode.b})`;
//     Color_name.textContent = Colorname;
//     Color_hex.textContent = hexColor;
//     Color_rgb.textContent = `rgb(${Colorcode.r}, ${Colorcode.g}, ${Colorcode.b})`;

//     icon_copy.style.display = "inline";
//     icon_check.style.display = "none";
//     color_head.innerHTML = "Generate Color Code";
// });

// // বাটন ক্লিক ইভেন্টের বাইরে কপি ইভেন্ট লিসেনার সংযুক্ত করা যাতে এটি বারবার যুক্ত না হয়
// icon_copy.addEventListener("click", () => {
//     const Colorcode = output.value;
//     CopyColorCode(Colorcode);
// });

// function generateColor() { 
//     const red = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);
//     return { r: red, g: green, b: blue };
// }

// function generateColorHead() {
//     const red = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);
//     return `rgb(${red}, ${green}, ${blue})`;
// }

// function rgbToHexa(color) {
//     const { r, g, b } = color;
//     return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
// }

// function CopyColorCode(Colorcode) {
//     navigator.clipboard.writeText(Colorcode).then(() => {
//         icon_copy.style.display = "none";
//         icon_check.style.display = "inline";
//         color_head.innerHTML = `Copy Done: ${Colorcode}`;
//     });
// }



// const color_generate = document.querySelector(".color_generate");
// const button = document.querySelector(".button");
// const color_heading = document.querySelector(".color_heading");
// const copy_icon = document.querySelector(".copy_icon");
// const check_icon = document.querySelector(".check_icon");
// const color_name = document.getElementById('color-name');
// const color_hex = document.getElementById('color-hex');
// const color_rgb = document.getElementById('color-rgb');
// const color_input = document.getElementById('color-input');

// button.addEventListener("click", () => {
//     let colorcode = color_input.value.trim();
//     let rgbColor;
    
//     if (colorcode.startsWith('#')) {
//         rgbColor = hexToRgb(colorcode);
//     } else if (colorcode.startsWith('rgb')) {
//         rgbColor = parseRgb(colorcode);
//         colorcode = rgbToHex(rgbColor);
//     } else {
//         alert('Invalid color code');
//         return;
//     }
    
//     const colorName = ntc.name(colorcode)[1];
    
//     color_generate.style.background = colorcode;
//     const headingColorCode = generateColorHeading();
//     color_heading.style.color = headingColorCode;
    
//     color_input.value = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
//     color_name.textContent = colorName;
//     color_hex.textContent = colorcode;
//     color_rgb.textContent = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    
//     copy_icon.style.display = "inline";
//     check_icon.style.display = "none";
//     color_heading.innerHTML = "Enter Color Code";
// });

// copy_icon.addEventListener("click", () => {
//     const colorcode = color_input.value;
//     copyColorCode(colorcode);
// });

// function generateColorHeading() {
//     const red = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);
//     return `rgb(${red}, ${green}, ${blue})`;
// }

// function rgbToHex({r, g, b}) {
//     return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
// }

// function hexToRgb(hex) {
//     let bigint = parseInt(hex.slice(1), 16);
//     let r = (bigint >> 16) & 255;
//     let g = (bigint >> 8) & 255;
//     let b = bigint & 255;
//     return {r, g, b};
// }

// function parseRgb(rgb) {
//     let result = rgb.match(/\d+/g);
//     return {r: parseInt(result[0]), g: parseInt(result[1]), b: parseInt(result[2])};
// }

// function copyColorCode(colorcode) {
//     navigator.clipboard.writeText(colorcode).then(() => {
//         copy_icon.style.display = "none";
//         check_icon.style.display = "inline";
//         color_heading.innerHTML = `Copy Done: ${colorcode}`;
//     }).catch(err => {
//         console.error('Failed to copy: ', err);
//     });
// }
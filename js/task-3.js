function getElementWidth (content, padding, border){
const N1 = Number.parseFloat(content);
const N2 = Number.parseFloat(padding);
const N3 = Number.parseFloat(border);
const contentWidth = N1 + ((N2 + N3) * 2);
return contentWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 

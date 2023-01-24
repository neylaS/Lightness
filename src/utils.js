import convert from 'color-convert';


export function generateHslPalette(hexValue){
    const hsl = convert.hex.hsl(hexValue)
    const palette = [];
    for (let index = 0; index <= 100; index+=10) {
        palette.push([hsl[0], hsl[1], index])
    }
    return palette
}

export function generateHexColor(hslValue){
    return convert.hsl.hex(hslValue);
}

export const changeShadowHexToCSS = (hex) => {
	// tranforme le hex d'entrée en HSL.
  const hsl = convert.hex.hsl(hex);
	// Retourne une chaîne de caractère au format css.
  return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
};




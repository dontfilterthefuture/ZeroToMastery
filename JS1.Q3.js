// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.



const hexToRGB = (hexColor) => {

  let hex ={
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    "F": 15,
  };

  //Trim and filter input as well as preserve original input to let user know there could be incorrect output due to replacement
  orignalHex = hexColor;
  hexColor = hexColor.replace(/#/g,"");
  hexColor = hexColor.replace(/[^a-fA-F0-9 #]/g, '').substr(0,6);

  //convert params to strings in preparation for charAt()
  redHex = String(hexColor.charAt(0).toUpperCase() + hexColor.charAt(1).toUpperCase());
  greenHex = String(hexColor.charAt(2).toUpperCase() + hexColor.charAt(3).toUpperCase());
  blueHex = String(hexColor.charAt(4).toUpperCase() + hexColor.charAt(5).toUpperCase());

 
  //Break up hex color string into Red, Green, Blue
  redObj = {
    firstChar: redHex.charAt(0),
    secondChar: redHex.charAt(1)
  };

  greenObj = {
    firstChar: greenHex.charAt(0),
    secondChar: greenHex.charAt(1)
  };

  blueObj = {
    firstChar: blueHex.charAt(0),
    secondChar: blueHex.charAt(1)
  };

  redDecimal = ((hex[redObj.secondChar]* 16**0) + (hex[redObj.firstChar] * 16**1));
  greenDecimal = ((hex[greenObj.secondChar]* 16**0) + (hex[greenObj.firstChar] * 16**1));
  blueDecimal = ((hex[blueObj.secondChar]* 16**0) + (hex[blueObj.firstChar] * 16**1));
  
  let rgbColor = `The Hex Color - ${hexColor} has been converted to RGB ---> ${redDecimal}, ${greenDecimal}, ${blueDecimal}`
  
  if(hexColor != orignalHex){
    return `Your original input may have contained characters that were not allowed which may have affected the accuracy of your conversion as they were removed or replaced. RGB ---> ${redDecimal}, ${greenDecimal}, ${blueDecimal}`
  } else {
    return rgbColor;
  }
};

let hexColor = window.prompt('Enter a color in Hexadecimal value \(sans the #): ')
hexToRGB(hexColor);


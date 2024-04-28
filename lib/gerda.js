let gerdaJS = document.querySelectorAll(".gerda-js");

let gerdaJSlength = gerdaJS.length;

for (let i = 0; i < gerdaJSlength; i++) {
    let style = gerdaJS[i].getAttribute("style");

    let styleArr = style.split(";");

    for (let k = 0; k < styleArr.length; k++) {
        let styleSubArr = styleArr[k].split(":");

        for (let j = 0; j < gerdaJSClasses.length; j++) {
            if (hasSomeParentTheClass(gerdaJS[i], gerdaJSClasses[j])) {
                

                if (styleSubArr[0] === "--" +  gerdaJSClasses[j]) {
                    ///console.log(gerdaJSClasses[j]);
                    let gerdaStyles = styleSubArr[1].split("//");
                    console.log(gerdaStyles);
                    for (let m = 0; m < gerdaStyles.length; m++) {
                        let gerdaSubStyles = gerdaStyles[m].split("/");
                        gerdaJS[i].style.cssText += `${gerdaSubStyles[0]}: ${gerdaSubStyles[1]}`;
                    }
                }
            }
        }
    }
}

// returns true if the element or one of its parents has the class classname
function hasSomeParentTheClass(element, classname) {
    if (element.className?.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}
//https://stackoverflow.com/questions/16863917/check-if-class-exists-somewhere-in-parent
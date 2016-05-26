pixProcesser.RGB = function (background, front) {
        ///<summary>RGB</summary>
        return {  
            red: front.red,  
            green: background.green,  
            blue: background.blue,  
            //alpha: Math.min(background.alpha, front.alpha)  
        }
        
    }

pixProcesser.nor = function (background, front) {
        /// <summary>正常模式</summary>

        return {
            red: (front.red + background.red)/2 ,
            green:( front.green + background.green)/2 ,
            blue: (front.blue + background.blue)/2 
        }
    };  


pixProcesser.normal = function (background, front) {
        /// <summary>正常模式</summary>

        //var alpha = front.alpha;
        var alpha = 0.5;
        return {
            red: front.red * alpha + background.red * (1 - alpha),
            green: front.green * alpha + background.green * (1 - alpha),
            blue: front.blue * alpha + background.blue * (1 - alpha),
            //alpha: front.alpha * alpha + background.alpha * (1 - alpha)
        }
    };        
pixProcesser.dissolve= function (background, front) {
        /// <summary>溶解</summary>

        // 正式用判断条件
        //if (Math.floor(Math.random() * 100) > (front.alpha / 255 * 100)) {

        // 测试用判断条件
        if (Math.floor(Math.random() * 100) > 50) {
            return background;
        } else {
            return front;
        }
    };        
pixProcesser.darken= function (background, front) {  
        /// <summary>变暗</summary>  
  
        return {  
            red: Math.min(background.red, front.red),  
            green: Math.min(background.green, front.green),  
            blue: Math.min(background.blue, front.blue),  
            alpha: Math.min(background.alpha, front.alpha)  
        };  
    };  

pixProcesser.multiply= function (background, front) {  
        /// <summary>正片叠底</summary>  
  
        return {  
            red: front.red * background.red / 255,  
            green: front.green * background.green / 255,  
            blue: front.blue * background.blue / 255,  
            alpha: front.alpha * background.alpha / 255  
        };  
    };  

pixProcesser.colorBurn= function (background, front) {  
        /// <summary>颜色加深</summary>  
  
        return {  
            red: Math.max(0, background.red + front.red - 255) * 255 / front.red,  
            green: Math.max(0, background.green + front.green - 255) * 255 / front.green,  
            blue: Math.max(0, background.blue + front.blue - 255) * 255 / front.blue,  
            alpha: Math.max(0, background.alpha + front.alpha - 255) * 255 / front.alpha  
        };  
    };  

pixProcesser.linearBurn= function (background, front) {  
        /// <summary>线性加深</summary>  
  
        return {  
            red: Math.max(0, background.red + front.red - 255),  
            green: Math.max(0, background.green + front.green - 255),  
            blue: Math.max(0, background.blue + front.blue - 255),  
            alpha: Math.max(0, background.alpha + front.alpha - 255)  
        };  
    };  

pixProcesser.darkerColor= function (background, front) {  
        /// <summary>深色</summary>  
  
        if ((background.red + background.green + background.blue + background.alpha) < (front.red + front.green + front.blue + front.alpha)) {  
            return background;  
        } else {  
            return front;  
        }  
    };  

pixProcesser.lighten= function (background, front) {  
        /// <summary>变亮</summary>  
  
        return {  
            red: Math.max(background.red, front.red),  
            green: Math.max(background.green, front.green),  
            blue: Math.max(background.blue, front.blue),  
            alpha: Math.max(background.alpha, front.alpha)  
        };  
    };  

pixProcesser.screen= function (background, front) {  
        /// <summary>滤色</summary>  
  
        return {  
            red: 255 - (255 - front.red) * (255 - background.red) / 255,  
            green: 255 - (255 - front.green) * (255 - background.green) / 255,  
            blue: 255 - (255 - front.blue) * (255 - background.blue) / 255,  
            alpha: 255 - (255 - front.alpha) * (255 - background.alpha) / 255  
        };  
    };  

pixProcesser.colorDodge= function (background, front) {  
        /// <summary>颜色减淡</summary>  
  
        return {  
            red: background.red + front.red * background.red / (255 - front.red),  
            green: background.green + front.green * background.green / (255 - front.green),  
            blue: background.blue + front.blue * background.blue / (255 - front.blue),  
            alpha: background.alpha + front.alpha * background.alpha / (255 - front.alpha)  
        };  
    };  

pixProcesser.linearDodge= function (background, front) {  
        /// <summary>线性减淡</summary>  
  
        return {  
            red: Math.min(background.red + front.red, 255),  
            green: Math.min(background.green + front.green, 255),  
            blue: Math.min(background.blue + front.blue, 255),  
            alpha: Math.min(background.alpha + front.alpha, 255)  
        };  
    };  

pixProcesser.lighterColor= function (background, front) {  
        /// <summary>浅色</summary>  
  
        if ((background.red + background.green + background.blue + background.alpha) > (front.red + front.green + front.blue + front.alpha)) {  
            return background;  
        } else {  
            return front;  
        }  
    };  

pixProcesser.overlay= function (background, front) {  
        /// <summary>叠加</summary>  
  
        return {  
            red: 255 - (255 - front.red) * (255 - background.red) / 128,  
            green: 255 - (255 - front.green) * (255 - background.green) / 128,  
            blue: 255 - (255 - front.blue) * (255 - background.blue) / 128,  
            alpha: 255 - (255 - front.alpha) * (255 - background.alpha) / 128  
        };  
    };  

pixProcesser.softLight= function (background, front) {  
        /// <summary>柔光</summary>  
  
        return {  
            red: background.red + (2 * front.red - 255) * (Math.sqrt(background.red / 255) * 255 - background.red) / 255,  
            green: background.green + (2 * front.green - 255) * (Math.sqrt(background.green / 255) * 255 - background.green) / 255,  
            blue: background.blue + (2 * front.blue - 255) * (Math.sqrt(background.blue / 255) * 255 - background.blue) / 255,  
            alpha: background.alpha + (2 * front.alpha - 255) * (Math.sqrt(background.alpha / 255) * 255 - background.alpha) / 255  
        };  
    };  

pixProcesser.hardLight= function (background, front) {  
        /// <summary>强光</summary>  
  
        return {  
            red: front.red > 128 ? 255 - (255 - front.red) * (255 - background.red) / 128 : front.red * background.red / 128,  
            green: front.green > 128 ? 255 - (255 - front.green) * (255 - background.green) / 128 : front.green * background.green / 128,  
            blue: front.blue > 128 ? 255 - (255 - front.blue) * (255 - background.blue) / 128 : front.blue * background.blue / 128,  
            alpha: front.alpha > 128 ? 255 - (255 - front.alpha) * (255 - background.alpha) / 128 : front.alpha * background.alpha / 128  
        };  
    };  

pixProcesser.vividLight= function (background, front) {  
        /// <summary>亮光</summary>  
  
        return {  
            red: front.red <= 128 ? 255 - (255 - background.red) / (2 * front.red) * 255 : background.red / (2 * (255 - front.red)) * 255,  
            green: front.green <= 128 ? 255 - (255 - background.green) / (2 * front.green) * 255 : background.green / (2 * (255 - front.green)) * 255,  
            blue: front.blue <= 128 ? 255 - (255 - background.blue) / (2 * front.blue) * 255 : background.blue / (2 * (255 - front.blue)) * 255,  
            alpha: front.alpha <= 128 ? 255 - (255 - background.alpha) / (2 * front.alpha) * 255 : background.alpha / (2 * (255 - front.alpha)) * 255  
        };  
    };  

pixProcesser.linearLight= function (background, front) {  
        /// <summary>线性光</summary>  
  
        return {  
            red: Math.min(2 * front.red + background.red - 255, 255),  
            green: Math.min(2 * front.green + background.green - 255, 255),  
            blue: Math.min(2 * front.blue + background.blue - 255, 255),  
            alpha: Math.min(2 * front.alpha + background.alpha - 255, 255)  
        };  
    };  

pixProcesser.pinLight= function (background, front) {  
        /// <summary>点光</summary>  
  
        if (typeof pixProcesser.pinLightProcess == "undefined") {  
            pixProcesser.pinLightProcess = function (sourceColor, blendColor) {  
                return blendColor <= 128 ? Math.min(sourceColor, 2 * blendColor) : Math.max(sourceColor, 2 * blendColor - 255);  
            };  
        }  
  
        return {  
            red: pixProcesser.pinLightProcess(background.red, front.red),  
            green: pixProcesser.pinLightProcess(background.green, front.green),  
            blue: pixProcesser.pinLightProcess(background.blue, front.blue),  
            alpha: pixProcesser.pinLightProcess(background.alpha, front.alpha)  
        };  
    };  

pixProcesser.hardMix= function (background, front) {  
        /// <summary>实色混合</summary>  
  
        return {  
            red: (background.red + front.red) < 255 ? 0 : 255,  
            green: (background.green + front.green) < 255 ? 0 : 255,  
            blue: (background.blue + front.blue) < 255 ? 0 : 255,  
            alpha: (background.alpha + front.alpha) < 255 ? 0 : 255  
        };  
    };  

pixProcesser.difference= function (background, front) {  
        /// <summary>差值</summary>  
  
        return {  
            red: Math.abs(front.red - background.red),  
            green: Math.abs(front.green - background.green),  
            blue: Math.abs(front.blue - background.blue),  
            alpha: Math.abs(front.alpha - background.alpha),  
        };  
    };  

pixProcesser.exclusion= function (background, front) {  
        /// <summary>排除</summary>  
  
        return {  
            red: (front.red + background.red) - front.red * background.red / 128,  
            green: (front.green + background.green) - front.green * background.green / 128,  
            blue: (front.blue + background.blue) - front.blue * background.blue / 128,  
            alpha: (front.alpha + background.alpha) - front.alpha * background.alpha / 128  
        };  
    };  

pixProcesser.subtract= function (background, front) {  
        /// <summary>减去</summary>  
  
        return {  
            red: Math.max(0, background.red - front.red),  
            green: Math.max(0, background.green - front.green),  
            blue: Math.max(0, background.blue - front.blue),  
            alpha: Math.max(0, background.alpha - front.alpha)  
        };  
    };  

pixProcesser.divide= function (background, front) {
    /// <summary>划分</summary>  
  
        return {
            red: (background.red / front.red) * 255,  
            green: (background.green / front.green) * 255,  
            blue: (background.blue / front.blue) * 255,  
            alpha: (background.alpha / front.alpha) * 255,  
        };  
    };          

// 指定要使用的处理器，这里暂时不指定
//var processor = "normal";

var selectElement = document.getElementById('processSelect');
var processor = selectElement.value;
// 所有的处理器都在这个对象下
var pixProcesser = {};

var imgBackground = new Image();
var imgFront = new Image();
imgBackground.onload = imgFront.onload = function () {
    this.loaded = true;
    if (imgBackground.loaded && imgFront.loaded) {
        process();
    }
};
imgBackground.src = "img/background.jpg";
imgFront.src = "img/front.png";
// imgBackground.src = "img/1.jpg";
// imgFront.src = "img/1.jpg";
// imgBackground.src = "img/red.svg";
// imgFront.src = "img/blue.svg";

var canvas = document.createElement("canvas");
canvas.width = 610;
canvas.height = 502;
var context = canvas.getContext("2d");


function process() {
    // 计算前景图片相对背景图片的中心位置
    var centerX = (imgBackground.width - imgFront.width) / 2;
    var centerY = (imgBackground.height - imgFront.height) / 2;

    // 绘制背景图
    context.drawImage(imgBackground, 0, 0);
    // 通过getImageData函数获取背景图片中，前景图片所应该在的区域的像素数据
    var backgroundData = context.getImageData(centerX, centerY, imgFront.width, imgFront.height);
    // 缓存ImageData中的data数组，这才是我们要操作的东西
    var backgroundPixs = backgroundData.data;

    // 清空一次画布
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制前景图
    context.drawImage(imgFront, centerX, centerY);
    // 不解释
    var frontData = context.getImageData(centerX, centerY, imgFront.width, imgFront.height);
    // 不解释
    var frontPixs = frontData.data;

    // 再次绘制背景图
    context.drawImage(imgBackground, 0, 0);
    // 再次绘制蝴蝶图（反正这句话也没什么卵用，忘了当时为啥要写这句话了）
    context.drawImage(imgFront, centerX, centerY);

    // 若没有定义处理器则不进行处理
    if (typeof processor != "undefined") {
        var newPix;
        for (var i = 0; i < backgroundPixs.length; i += 4) {
            // 跳过全透明像素
            if (frontPixs[i + 3] === 0) continue;

            // 传入两个图像对应的像素进行处理
            newPix = pixProcesser[processor](
                { 
                    red: backgroundPixs[i], 
                    green: backgroundPixs[i + 1], 
                    blue: backgroundPixs[i + 2], 
                    alpha: backgroundPixs[i + 3]
                },
                { 
                    red: frontPixs[i], 
                    green: frontPixs[i + 1], 
                    blue: frontPixs[i + 2], 
                    alpha: frontPixs[i + 3]
                }
            );

            if (newPix) {
                // 将处理好的像素赋值给背景图ImageData（实际上你传给前景图也没问题，只是下面putImageData的时候需要指向前景图罢了）
                backgroundPixs[i] = newPix.red;
                backgroundPixs[i + 1] = newPix.green;
                backgroundPixs[i + 2] = newPix.blue;
            }
        }

        // 好的，将处理结果交给浏览器
        context.putImageData(backgroundData, centerX, centerY);
    }
    if (document.body) {
        document.getElementById("canvas").appendChild(canvas);
    } else {
        window.addEventListener("load", function () {
            document.getElementById("canvas").appendChild(canvas);
        }, false);
    }
}

function doProcess(){
	        processor = selectElement.value;
	        process();
	        console.log(this.value);
	    }

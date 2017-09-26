// 展开更多产品
function displayMoreProduct() {
        document.getElementById("hidemp").style.cssText = "display:none";
        document.getElementById("moreproduct").style.cssText = "display:block";
}
//隐藏更多产品
function hideMoreProduct() {

    document.getElementById("moreproduct").style.cssText = "display:none";
    document.getElementById("hidemp").style.cssText = "display:inline-block";
}
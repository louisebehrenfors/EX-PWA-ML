import EXIF from "exif-js";

export const checkOrientation = (file, canvas) => {
  //checks EXIF orientation data of jpg files and changes it to the correct one
  //console.log("file = " + file);
  //console.log("canvas = " + canvas);
  var ctx = canvas.getContext("2d");
  var img = new Image();
  canvas.style.display = "inline";
  canvas.style.margin = "0";
  canvas.style.width = "80%";

  img.onload = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.5;
    var scale = Math.min(canvas.width / img.width, canvas.height / img.height);

    var x = canvas.width / 2 - (img.width / 2) * scale;
    var y = canvas.height / 2 - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  EXIF.getData(file, function () {
    var orientation = EXIF.getTag(this, "Orientation");
    if (orientation !== 1) {
      switch (orientation) {
        case 2:
          /* flip vertically */ ctx.transform(-1, 0, 0, 1, canvas.width, 0);
          break;
        case 3:
          /* rotate 180 degrees */ ctx.transform(-1,0,0,-1,canvas.width,canvas.height);
          break;
        case 4:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;
        case 5:
          ctx.transform(0, 1, -1, 0, canvas.height, 0);
          break;
        case 6:
          /* rotate 90 degrees*/ ctx.transform(0, 1, -1, 0, canvas.height, 0);
          break;
        case 7:
          ctx.transform(0, -1, -1, 0, canvas.height, canvas.width);
          break;
        case 8:
          ctx.transform(0, -1, 1, 0, 0, canvas.width);
          break;
        default:
          break;
      }
    }
  });
  URL.revokeObjectURL(img.src);
  img.src = URL.createObjectURL(file);
};

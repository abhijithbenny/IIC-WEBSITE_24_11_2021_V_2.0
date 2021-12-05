var a = $(".a .item");
a.css({ filter: "none" });

var carousel = $(".carousel"),
  items = $(".item"),
  currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

var isDragging = false;
var initialMousePos = { x: -1, y: -1 };
var finalMousePos = { x: -1, y: -1 };

$(".item")
  .mousedown(function () {
    isDragging = false;
    initialMousePos.x = event.pageX;
    initialMousePos.y = event.pageY;
    console.log("initial: ", initialMousePos.x, initialMousePos.y);
  })
  .mousemove(function () {
    isDragging = true;
  })
  .mouseup(function () {
    finalMousePos.x = event.pageX;
    finalMousePos.y = event.pageY;
    console.log(
      "final: ",
      finalMousePos.x,
      finalMousePos.y,
      "isdrag",
      isDragging
    );
    var wasDragging = isDragging;
    isDragging = false;
    if (wasDragging) {
      if (finalMousePos.y > initialMousePos.y) {
        rotate({ data: { d: "n" } });
      } else if (finalMousePos.y < initialMousePos.y) {
        rotate({ data: { d: "p" } });
      }
    }
  });

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  console.log(currdeg);
  carousel.css({
    "-webkit-transform": "rotateX(" + currdeg + "deg)",
    "-moz-transform": "rotateX(" + currdeg + "deg)",
    "-o-transform": "rotateX(" + currdeg + "deg)",
    transform: "rotateX(" + currdeg + "deg)",
  });
  items.css({
    "-webkit-transform": "rotateX(" + -currdeg + "deg)",
    "-moz-transform": "rotateX(" + -currdeg + "deg)",
    "-o-transform": "rotateX(" + -currdeg + "deg)",
    transform: "rotateX(" + -currdeg + "deg)",
  });
  if (currdeg % 360 === 0) {
    let rem_item = $(".item");
    rem_item.css({ filter: "blur(4px)", "-webkit-filter": "blur(4px)" });
    var a = $(".a .item");
    a.css({ filter: "none" });
  } else if ((currdeg + 60) % 360 === 0) {
    let rem_item = $(".item");
    rem_item.css({ filter: "blur(4px)", "-webkit-filter": "blur(4px)" });
    let b = $(".b .item");
    b.css({ filter: "none" });
  } else if ((currdeg + 120) % 360 === 0) {
    let rem_item = $(".item");
    rem_item.css({ filter: "blur(4px)", "-webkit-filter": "blur(4px)" });
    let c = $(".c .item");
    c.css({ filter: "none" });
  } else if ((currdeg + 180) % 360 === 0) {
    let rem_item = $(".item");
    rem_item.css({ filter: "blur(4px)", "-webkit-filter": "blur(4px)" });
    let d = $(".d .item");
    d.css({ filter: "none" });
  } else if ((currdeg + 240) % 360 === 0) {
    let rem_item = $(".item");
    rem_item.css({ filter: "blur(4px)", "-webkit-filter": "blur(4px)" });
    let e = $(".e .item");
    e.css({ filter: "none" });
  } else if ((currdeg + 300) % 360 === 0) {
    let rem_item = $(".item");
    rem_item.css({ filter: "blur(4px)", "-webkit-filter": "blur(4px)" });
    let f = $(".f .item");
    f.css({ filter: "none" });
  }
}

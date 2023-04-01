import * as MODEL from "./model.js";

let test = "test";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID == "" || pageID == "works") {
    MODEL.changePage(pageID, initWorkListeners);

    $(".active-nav").removeClass("active-nav");
    $("#worksNav").addClass("active-nav");

    $("#socials").removeClass("row");
    $("#socials").addClass("column");
  } else {
    MODEL.changePage(pageID);

    $(".active-nav").removeClass("active-nav");
    $("#" + pageID + "Nav").addClass("active-nav");

    $("#socials").removeClass("column");
    $("#socials").addClass("row");
  }
}

function initListeners() {
  $(window).on("hashchange", () => {
    route();
  });
  route();

  $("#detail button").on("click", () => {
    closeDetail();
  });
}

function initWorkListeners() {
  console.log("init work");

  // $("#work0")
  console.log($(".work-content").data());
  $(".work-content").each(function () {
    $(this).on("click", () => {
      showDetail($(this).data("id"));
    });
  });
}

function showDetail(id) {
  MODEL.changeDetail(id);
  console.log("showDetail", id);
  $("#detail").css("display", "block");
}

function closeDetail() {
  $("#detail").css("display", "none");
}

$(document).ready(function () {
  initListeners();
});

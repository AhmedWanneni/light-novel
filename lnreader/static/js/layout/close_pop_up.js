// ============= Close Notification =========================
$(document).bind('click', function(e) {
  if(!$(e.target).is(".notifications>*")&& !$(e.target).is(".content-notification")
    && !$(e.target).is(".notification-btn")
    && !$(e.target).is(".notification-btn>svg")
    && !$(e.target).is(".notification-btn>svg>path")
    && !$(e.target).is(".close-notification-btn")
    && !$(e.target).is(".close-notification-btn>*")
    
    && !$(e.target).is(".title-notification")
    && !$(e.target).is(".notifications>ul>li>img")
    && !$(e.target).is(".notifications>ul>li")
     && !$(e.target).is(".notifications>ul")
    && !$(e.target).is(".notifications")) {
   		$(".notifications").css("display","none");}
});


// ============= close Profile settings =======================

$(document).bind('click', function(e) {
  if(!$(e.target).is(".profile-settings>*") && !$(e.target).is(".profile-settings")
   && !$(e.target).is(".person")

   ) {
   		$(".profile-settings").css("display","none");}
});

// ============= close content settings =======================

$(document).bind('click', function(e) {
  if(!$(e.target).is(".settings>*") && !$(e.target).is(".settings")
   && !$(e.target).is("#content-settings-btn")
   && !$(e.target).is("#content-settings-btn>svg")
   && !$(e.target).is("#content-settings-btn>svg>path")
   && !$(e.target).is(".settings>table")
   && !$(e.target).is(".settings>table>tbody")
   && !$(e.target).is(".settings>table>tbody>tr")
   && !$(e.target).is(".settings>table>tbody>tr>td")
   && !$(e.target).is(".settings>table>tbody>tr>td>span")
   && !$(e.target).is(".settings>table>tbody>tr>td>label")
   && !$(e.target).is(".settings>table>tbody>tr>td>input")
   && !$(e.target).is(".settings>div>select")
   && !$(e.target).is(".settings>div>label")
    && !$(e.target).is(".settings>div>select>option")
     && !$(e.target).is(".settings>div>button")
   ) {
   		$(".settings").css("display","none");}
});

// ============= close report =======================

$(document).bind('click', function(e) {
  if(!$(e.target).is(".report-btn") && !$(e.target).is(".report")
   && !$(e.target).is(".report>*")) {
   		$(".report").css("display","none");}
});

// ============ close settings focus ===================

$(document).bind('click', function(e) {
  if(!$(e.target).is(".setting-focus-btn") && !$(e.target).is(".setting-focus")
   && !$(e.target).is(".setting-focus>*")
  && !$(e.target).is(".setting-focus-btn>svg>path")
   && !$(e.target).is(".setting-focus-btn>svg")
   && !$(e.target).is(".setting-focus>ul>li>label")
   && !$(e.target).is(".setting-focus>ul>li>input")
   && !$(e.target).is(".setting-focus>ul")
   && !$(e.target).is(".setting-focus>ul>li")
   && !$(e.target).is(".setting-focus>ul>li>select")
   && !$(e.target).is(".setting-focus>ul>li>select>option")
   && !$(e.target).is(".setting-focus>button")
   ) {
   		$(".setting-focus").css("display","none");}
});


// ============ close report focus ===================

$(document).bind('click', function(e) {
  if(!$(e.target).is(".report-focus-btn") && !$(e.target).is(".report-focus")
   && !$(e.target).is(".report-focus>*")
   && !$(e.target).is(".report-focus-btn>svg")
   && !$(e.target).is(".report-focus-btn>svg>path")
   ) {
   		$(".report-focus").css("display","none");}
});


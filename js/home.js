
$(document).ready(function(){

	$("input").on("click", function(){

		//if (".product") {
			$(".kitchen, .table, .dressingRoom").removeClass("displayYes displayNone").addClass("displayNone"); 
			var val = $(this).val();
			console.log("val es: "+val)
			
			if (val == "KITCHEN") {
				$(".kitchen").removeClass("displayNone").addClass("displayYes"); 
			}else if (val == "TABLE") {
				$(".table").removeClass("displayNone").addClass("displayYes"); 
			}else if (val == "DRESSINGROOM") {
				$(".dressingRoom").removeClass("displayNone").addClass("displayYes"); 
			}

			
		//}
		
		//console.log("Me estoy moviendo...");
			
	})
})

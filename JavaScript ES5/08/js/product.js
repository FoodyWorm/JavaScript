		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");
		var openView = document.querySelector("#view");
		var detail = document.querySelector("#detail");
		
		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		openView.addEventListener("click", function() { 	
				if(detail.style.display == "none") {
					detail.style.display = "block";
					openView.textContent = "상세 설명 보기";

				}
				else {
					detail.style.display = "none";
					openView.textContent = "상세 설명 닫기";

				}
		});



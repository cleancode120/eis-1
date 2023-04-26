/**
 * 공통함수
 */
$(document).ready(function(){
	//commaN 클라스 html 콤마찍기
	for (i=0; i<$(".commaN").length; i++){
		$(".commaN").eq(i).text(commaNum($(".commaN").eq(i).html()));
	}

	upDownloadAppend();

	//첨부 파일 선택시 이름 목록 나열
	$(document).on('change', '#excelFile', function(e){
		excelFileUpload();
	});

	//달력에 년월일 변경 가능하도록 재설정.
	$('.datepicker').datepicker({
		"dateFormat": "yymmdd",
		"prevText":'<i class="fa fa-chevron-left"></i>',
		"nextText":'<i class="fa fa-chevron-right"></i>',
		"changeYear": true,
		"changeMonth": true
	});

	//숫자만 입력
	$(".onlyNum").keyup(function(){$(this).val( $(this).val().replace(/[^0-9]/g,"") );} );

});

//현재 날짜 세팅
function setNowDate(){
	var Now = new Date();
	var NowTime = Now.getFullYear();
	var month = String(Number(Now.getMonth()) + 1);
	var day = 	String(Now.getDate());

	NowTime += (month.length < 2 ? '0' + month : month);
	NowTime += (day.length < 2 ? '0' + day : day);

	$('.setDefaultDate').val(NowTime);
}

//sort 아이콘 추가
var unsortTag = '<i class="fa fa-sort sortIcon" data-sorttype="" aria-hidden="true">';
var ascTag = '<i class="fa fa-sort-numeric-asc sortIcon" data-sorttype="asc" aria-hidden="true"></i>';
var descTag = '<i class="fa fa-sort-numeric-desc sortIcon" data-sorttype="desc" style="display:none" aria-hidden="true"></i>';

function boardSortableInit(){
	//sortable 클래스를 부여한 요소에 toggle 기능 추가
	$('.sortable').on('click', function(e){
		toggleBoardSort('searchForm', this);
	});

	//sortable 클래스를 부여한 요소에 기본 sort 아이콘 추가.
	$('.sortable').append(unsortTag);

	//페이지 로딩 시 sort 설정 값이 있는 경우, sort 값 세팅
	var sortName = $('#sortName').val();
	var sortType = $('#sortType').val();

	if(sortName != '' && sortType != ''){
		var $e = $('.sortable[data-sortname='+sortName+']');

		//기본 아이콘 제거 및 sort 아이콘 추가
		$e.find('i').remove();
		$e.append(ascTag+descTag);

		if(sortType == 'desc'){
			//정렬방식이 desc면 toggle 이벤트 발생시킴
			$e.find('i').toggle();
		}
	}
}

//게시판 컬럼 오름차, 내림차 정렬
function toggleBoardSort(frmId, target){
	var $frm = $('form[name='+frmId+']');
	var $i = $(target).find('i');

	//i 태그 개수로 최초클릭인지 이미 sort 사용했는지 구분.
	//최초 클릭 = 1(기본 아이콘), 이미 사용 = 2(활성, 비활성 아이콘)
	if($i.length == 1){
		//최초 클릭인 경우

		//주변 sortable 요소에 기본 아이콘 추가
		$(target).siblings('.sortable').append(unsortTag);

		//기본 아이콘 제거
		$i.remove();

		//sort 아이콘 추가
		$(target).append(ascTag+descTag);

	}else{
		//이미 sort 사용한 경우
		$i.toggle();
	}

	//대상 컬럼
	var sortName = $(target).data('sortname');
	//toggle 활성화되어있는 sort 방식 값
	var sortType = $(target).find('i:visible').data('sorttype');

	//검색 파라미터 세팅
	$frm.find('#sortName').val(sortName);
	$frm.find('#sortType').val(sortType);
	$frm.find('#currentPageNo').val(1);

	//setTimeout을 사용하지 않으면 submit이 위의 파라미터 세팅 코드보다 먼저 실행된다.
	setTimeout(function(){
		$frm.submit();
	}, 0);
}

//게시판 페이지 이동
function movePage(frmId, pageNo){
	var $frm = $('form[name='+frmId+']');
	$frm.find('#currentPageNo').val(pageNo);
	$frm.target = frmId;
	$frm.submit();
}


//게시판 상세조회 이동
function moveDtlPage(frmId, actionUrl, contentId){
	var $frm = $('#'+frmId);

	$frm.attr('action', actionUrl);
	$frm.find("#contentId").val(contentId);
	//console.log($frm);
	$frm.submit();
}

//게시판 페이지 이동 (ajax 방식으로 할때)
function movePageForAjax(frmId, pageNo, ajaxfn){
	var $frm = $('form[name='+frmId+']');

	$frm.find('input[name=currentPageNo]').val(pageNo);
	eval(ajaxfn+'()');

}


/*
 * 모달 pager
 * 파라미터 :
 * jsonPagerMap -> pager 정보가 담긴 map, $pagerDiv -> LIST를 추가할 div,  ajaxfn -> ajax 실행할 function , form -> form 이름
 * [boolean]isDataExist - > true = 이미 등록된 데이터가 있는 경우(조회/수정),  false = 최초 등록인 경우(등록).
 */
function initPagerInModal(jsonPagerMap, $pagerDiv, ajaxfn, $tModal , form){
	//이전 데이터 제거
	$pagerDiv.empty();

	//새로운 데이터 추가

	var htmlText = '';
	// 페이지 리스트의 첫 페이지 번호가 1이 아닐때만 처음 버튼을 생성한다.
	if(jsonPagerMap.firstPageNoOnPageList != 1){
		htmlText += '<button type="button" class="btn btn-default" onClick="movePageForAjax(\''+form+'\',1 ,\''+ajaxfn+'\')">처음</button>';
	}
	// 페이지 리스트의 첫 페이지 번호가 1이 아닐때만 이전 버튼을 생성한다.
	if(jsonPagerMap.firstPageNoOnPageList != 1){
		htmlText += '<button type="button" class="btn btn-default" onClick="movePageForAjax(\''+ form + '\', ' + jsonPagerMap.prevPageNoOnPageList + ', \''+ ajaxfn + '\')">이전</button>';
	}

	//페이지 첫번째 번호
	var firstPageNoOnPageList = jsonPagerMap.firstPageNoOnPageList;
	//페이지 마지막 번호
	var lastPageNoOnPageList = jsonPagerMap.lastPageNoOnPageList;

	//페이지 번호들 생성
	for(var i = firstPageNoOnPageList; i <= lastPageNoOnPageList; i++){
		var styleText = "";
		if(jsonPagerMap.currentPageNo == i){
			//클릭된 번호에 style 속성 주기
			styleText = 'style="background-color: #ccc;"';
		}
		htmlText += '<button type="button" class="btn btn-default"' + styleText + 'onClick="movePageForAjax(\'' + form + '\', '+ i +', \''+ ajaxfn + '\')">'+i+'</button>';

	}

	// 마지막 페이지 번호가 총 페이지 개수 보다 작을 경우만 다음 버튼을 생성 한다.
	if(jsonPagerMap.lastPageNoOnPageList < jsonPagerMap.totalPageCount){
		htmlText += '<button type="button" class="btn btn-default" onClick="movePageForAjax(\''+ form +'\', ' + jsonPagerMap.nextPageNoOnPageList + ',\'' + ajaxfn + '\')">다음</button>';
	}
	// 마지막 페이지 번호가 총 페이지 개수 보다 작을 경우만 맨끝 버튼을 생성 한다.
	if(jsonPagerMap.lastPageNoOnPageList < jsonPagerMap.totalPageCount){
		htmlText += '<button type="button" class="btn btn-default" onClick="movePageForAjax(\''+ form +'\', ' + jsonPagerMap.totalPageCount + ', \''+ ajaxfn + '\')">맨끝</button>';
	}

	//div에 목록 정보들 추가
	$pagerDiv.append(htmlText);

	//모달창이 안띄어져있을 경우만 show
	if($tModal.css("display") == "none"){
		$tModal.modal('show');
	}

}


/*
 * AJAX
 */
function fnCallAjax(callType, url, returnDataType, paramData, callBackFn, boolShowLayer){
	if(boolShowLayer){
		$(".overlay").show();
	}

	$.ajax({
		url : url,
		type : callType,
		dataType: returnDataType,
		data : paramData,
		success: function(data){
			//console.log(">> in success");
		},
		error: function(xhr,status,error){
			//console.log(">> in error");
		},
		complete: function(data){
			//console.log(">> in complete");
			//console.log(data);
			callBackFn(data);

			if(boolShowLayer){
				$(".overlay").hide();
			}
		}
	});
}

/*
 * 첨부 파일 관련 기능 설정
 * removeFileBtn 클래스 클릭 시 삭제 기능 호출
 * 사진 등록 기능은 각 컨트롤러 프로세스 처리부분에서 진행.
 */
function fileAttachInit(boolPhoto, boolDoc, boolModal){

	//input type="file"을 생성
	setFileElement(boolPhoto, boolDoc, boolModal);

	//파일 삭제 기능 설정
	$('.removeFileBtn').on('click', function(e){
		e.preventDefault();
		deleteFile(this);
	});
}

/*
 * 파일 첨부 영역 생성.
 * 지정된 클래스에 html 요소 추가.
 * boolPhoto 사진 첨부 = div .div_file_p
 * boolDoc 문서 첨부 = div .div_file_d
 * boolModal 모달 문서 첨부 = div .modal_div_file_d
 */
function setFileElement(boolPhoto, boolDoc, boolModal){
	//html 요소 생성

	if(boolPhoto){
		$photoDiv = $('.div_file_p'); //사진
		var photoHtml = '<input type="file" class="form-control" id="photoFile" name="photoFile" accept="image/*"/>';
		$photoDiv.append(photoHtml);
	}

	if(boolDoc){
		$docDiv = $('.div_file_d'); //문서
		var docHtml = '<input type="file" class="form-control" id="docFile" name="docFile" multiple="multiple" style="display: none;">';
		docHtml += '<input type="button" value="파일 선택" onclick="$(\'#docFile\').click()" />';
		docHtml += '<ul id="ul_docFile"></ul>';
		$docDiv.append(docHtml);
	}

	if(boolModal){
		$modalDocDiv = $('.modal_div_file_d'); //문서
		var modalHtml = '<input type="file" class="form-control" id="docFile" name="docFile" multiple="multiple" style="display: none;">';
		modalHtml += '<input type="button" class="staticData" value="파일 선택" onclick="$(\'#docFile\').click()" />';
		modalHtml += '<ul id="ul_docFile"></ul>';
		$modalDocDiv.append(modalHtml);
	}
}

/*
 * 첨부 파일 삭제
 * button에 설정된 data 요소 값을 추출해 파라미터 세팅
 */
function deleteFile(obj){

	if(confirm('확인 클릭 시 선택한 파일이 즉시 삭제됩니다. 삭제하시겠습니까?')){
		$obj = $(obj);
		$obj.closest('.fileTarget').addClass('removeTarget');

		var param = {'idx': $obj.data('idx'), 'fileIdx': $obj.data('fileidx'), "fileType": $obj.data('filetype')};
		fnCallAjax('POST', $obj.data('url'), 'json', param, deleteFile_callback, true);
	}
}

//콜백 - 첨부 파일 삭제
function deleteFile_callback(data){
	var json = data.responseJSON;

	if(json.rstFlag){
		alert('삭제 완료');

		//사진 삭제인 경우 이미지도 삭제
		if($('.removeTarget').prop('tagName') == 'SPAN'){
			$('#photoImg').attr('src', '');
		}

		$('.removeTarget').remove();

	}else{
		alert('삭제 중 오류가 발생하였습니다.\r페이지 새로고침(F5) 후 다시 시도해주세요.');
		$('.removeTarget').removeClass('removeTarget');
	}
}

function fileDownload(fileIdx){

	var param = {'idx': fileIdx};
	//fnCallAjax('POST', '/file/download.ajax', 'json', param, fileDownload_callback, true);

	$.ajax({
	     url : '/file/download.ajax',
	     type : 'post',
	     data : param,
	     success: function(data){
	    	  //console.log(">> in success");
			},
		 error: function(xhr,status,error){
			//console.log(">> in error");
		 }
	 });

}

//nonSubmit 클래스인 button태그가 submit 안되게 하는 기능
function setBtn_noSubmit(){
	$('.nonSubmit').on('click',function(event){
		event.preventDefault();
	});
}

//파일 삭제 기능 설정
function setBtn_removeFile(){
	$('.removeFileBtn').on('click', function(e){
		e.preventDefault();
		deleteFile(this);
	});
}

function cl(arg){
	//console.log(arg);
}

//엑셀 업로드 다운로드 태그 추가
function upDownloadAppend(){
	$otherfunctionLine = $('#otherfunctionLine');

	var upStr = '';
	$excelUp = $otherfunctionLine.find('#excelUp');
	upStr += ' <button class="btn btn-warning nonSubmit" style="margin-right: 10px;" onclick="$(\'#excelFile\').click()">엑셀 업로드</button> ';
	$excelUp.append(upStr);

	var downStr = '';
	$excelDown = $otherfunctionLine.find('#excelDown');
	downStr += ' <button class="btn btn-warning nonSubmit" style="margin-right: 10px;" onclick="saveExcel()">엑셀 다운로드</button> ';
	$excelDown.append(downStr);


}

//차기 교정일 (도입일자+검교정권장주기)
function getCorrectDate(){
	var introDate = $('#introDate').val(); //도입일자
	var calibationCycle = $('#calibationCycle').val(); //권교정권장 주기
	var calibationCycleUnit = $('#calibationCycleUnit').val(); //권교정권장 주기 단위

	//결과 date 객체
	var resultDate ="";

	if(introDate == ''){
		alert('도입일자를 입력해 주세요.');
	}else if(calibationCycle < 1){
		alert('검교정권장주기의 값은 1이상 이어야 합니다.');
	}else{

		//도입날짜를 월,별,일 배열로 나눈다.
		var arrIntroDate = introDate.split('/');

		//해당 도입날짜 새로운 date 객체 생성
		var chgIntroDate = moment(arrIntroDate[0]+'-'+arrIntroDate[1]+'-'+arrIntroDate[2]);

		switch (calibationCycleUnit) {
			case 'Y':
				chgIntroDate.add(calibationCycle, 'y');
				break;
			case 'M':
				chgIntroDate.add(calibationCycle, 'M');
				break;
			case 'D':
				chgIntroDate.add(calibationCycle, 'd');
				break;
			default:
				break;
		}

		resultDate = chgIntroDate.format('YYYY/MM/DD');
		//차기교정일 값 넣기
		$('#correctDate').val(String(resultDate)+"");

		//d-day
		var diff = dateDiff(chgIntroDate.format('YYYY-MM-DD'), new Date());
		//console.log(diff);
		$('#correctDateDday').text(diff);

	}

}

//두개의 날짜를 비교하여 차이를 알려준다.
function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());

    var diff = diffDate_2.getTime() - diffDate_1.getTime();
    diff = Math.ceil(diff / (1000 * 3600 * 24));

    return diff;
}

//잔여기간
function getCorrectDday(){

	var correctDate = $('#correctDate').val();
	var arrCorrectDate = correctDate.split('/');
	var chgCorrectDate = moment(arrCorrectDate[0]+'-'+arrCorrectDate[1]+'-'+arrCorrectDate[2]);
	var diff = dateDiff(chgCorrectDate.format('YYYY-MM-DD'), new Date());
	$('#correctDateDday').text(diff);
	if(isNaN(diff)){
		$('#correctDateDday').text("");
	}
}

/*
 * 년도 선택만 가능하도록 Datepicker 설정
 */
function initYearpicker(){
	//달력에 년월일 변경 가능하도록 재설정.
	$('.yearpicker').datepicker({
		"dateFormat": "yy",
		"yearRange": '2015:2025',
		"prevText":'',
		"nextText":'',
		"changeYear": true
	});

	$(".yearpicker").focus(function () {
        $(".ui-datepicker-month").remove();
        $(".ui-datepicker-calendar").remove();
        $(".ui-datepicker-prev, .ui-datepicker-next").remove();
    });
}


//금액 콤마 찍기
function commaNum(num){
	var len, point, str;
	num = num + "";
	point = num.length % 3
	len = num.length;

	str = num.substring(0, point);
	while (point < len){
		if (str != "") str += ",";
		str += num.substring(point, point + 3);
		point += 3;
	}
	return str;
}







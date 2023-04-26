/**
 * test.js
 */
$(document).ready(function(){

	alert(123);
	//sortable 기능
	boardSortableInit();

	//체크박스전체선택클릭시
	$('#checkAll').click(function(){
		if($('#checkAll').prop("checked")){
			$("input[name=checkbox]").prop('checked', true);
		}else{
			$("input[name=checkbox]").prop('checked', false);
		}

	});

});


function searchItem(){
	var $form = $('#searchForm');
	$form.attr('action','/test/testList');
	$form.submit();

}

function testDetail(idx){
	alert("idx:"+ idx);

}

function ajax_testAjax(idx, _this){
	//fnCallAjax("POST", "/equipment/procEqpmntManage.ajax", "json", param, procEqpmntManage_callback, true);
	if($(_this).html() != "-"){
		$(_this).html("-");
		return;
	}

	var param = {"idx": idx};
	console.log("_this:" + _this);

	$.ajax({
		url : "/test/ajax_testAjax.ajax",
		type : "POST",
		dataType: "json",
		data : param,
		success: function(data){
			//console.log(">> in success");
		},
		error: function(xhr,status,error){
			//console.log(">> in error");
		},
		complete: function(data){
			//console.log(">> in complete");
			ajax_testAjax_callback(data, _this);

		}
	});
}


function ajax_testAjax_callback(data, _this){
	var json = data.responseJSON;
	if(json.rstFlag){
		//alert('삭제 완료');
		console.log(json.testVO.pwCode);
		console.log("----------------");
		console.log(_this);

		$(_this).html(json.testVO.pwCode);


	}else{
		alert('오류가 발생하였습니다.\r페이지 새로고침(F5) 후 다시 시도해주세요.');
	}

	//location.href = '/equipment/eqpmntList';

}



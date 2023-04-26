package com.kun.eis.common.vo;

import java.util.ArrayList;

public class DefaultVO {

	private int idx; //번호

	private int end; //검색할 마지막 번호

	private int start; //검색할 시작 번호

	private int rnum; //검색되었을때의 몇번째 번호인가 확인하는 번호

	private int currentPageNo; //현재 페이지 No

	private int totalRecordCount; //전체 게시물 건 수

	private int totalPageCount; //총 페이지의 갯수

	private int recordCountPerPage; //페이지당 게시되는 게시물 건 수

	private int pageSize; //페이지 리스트에 게시되는 페이지 건수

	private String sortName; //정렬 대상 컬럼

	private String sortType; //정렬 방식

	private String procFlag; //add/mod/del 구분값

	private String regDate; //등록일

	private String modDate; //수정일

	private String useYn; //삭제여부

	private String delDate; //삭제된 날짜

	private String adminYn; //관리자여부

	private ArrayList<String> targetList;

	private ArrayList<Integer> targetIntegerList;


	public ArrayList<Integer> getTargetIntegerList() {
		return targetIntegerList;
	}

	public void setTargetIntegerList(ArrayList<Integer> targetIntegerList) {
		this.targetIntegerList = targetIntegerList;
	}

	public ArrayList<String> getTargetList() {
		return targetList;
	}

	public void setTargetList(ArrayList<String> targetList) {
		this.targetList = targetList;
	}

	public String getDelDate() {
		return delDate;
	}

	public void setDelDate(String delDate) {
		this.delDate = delDate;
	}

	public String getUseYn() {
		return useYn;
	}

	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}

	public String getAdminYn() {
		return adminYn;
	}

	public void setAdminYn(String adminYn) {
		this.adminYn = adminYn;
	}

	public String getModDate() {
		return modDate;
	}

	public void setModDate(String modDate) {
		this.modDate = modDate;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	public String getProcFlag() {
		return procFlag;
	}

	public void setProcFlag(String procFlag) {
		this.procFlag = procFlag;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getRnum() {
		return rnum;
	}

	public void setRnum(int rnum) {
		this.rnum = rnum;
	}

	public int getCurrentPageNo() {
		return currentPageNo;
	}

	public void setCurrentPageNo(int currentPageNo) {
		this.currentPageNo = currentPageNo;
	}

	public int getTotalRecordCount() {
		return totalRecordCount;
	}

	public void setTotalRecordCount(int totalRecordCount) {
		this.totalRecordCount = totalRecordCount;
	}

	public int getTotalPageCount() {
		return totalPageCount;
	}

	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = totalPageCount;
	}

	public int getRecordCountPerPage() {
		return recordCountPerPage;
	}

	public void setRecordCountPerPage(int recordCountPerPage) {
		this.recordCountPerPage = recordCountPerPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public String getSortName() {
		return sortName;
	}

	public void setSortName(String sortName) {
		this.sortName = sortName;
	}

	public String getSortType() {
		return sortType;
	}

	public void setSortType(String sortType) {
		this.sortType = sortType;
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

}

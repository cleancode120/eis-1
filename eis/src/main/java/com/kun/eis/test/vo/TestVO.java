package com.kun.eis.test.vo;

import com.kun.eis.common.vo.DefaultVO;

public class TestVO extends DefaultVO{
	
	private String nm;	//이름
	
	private String gender; //성별
	
	private String homeAddr; //주소
	
	private String pwCode;  //패스워드코드
	
	
	public String getPwCode() {
		return pwCode;
	}

	public void setPwCode(String pwCode) {
		this.pwCode = pwCode;
	}

	public String getHomeAddr() {
		return homeAddr;
	}

	public void setHomeAddr(String homeAddr) {
		this.homeAddr = homeAddr;
	}

	public String getNm() {
		return nm;
	}

	public void setNm(String nm) {
		this.nm = nm;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
}

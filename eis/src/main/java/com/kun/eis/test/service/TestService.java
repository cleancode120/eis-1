package com.kun.eis.test.service;

import java.util.List;

import com.kun.eis.test.vo.TestVO;

public interface TestService {
	
	/**
	 * 테스트 항목 리스트
	 * @param vo
	 * @return List
	 * @throws Exception
	 */
	public List<TestVO> testList(TestVO vo) throws Exception;

	public TestVO selectPwCode(TestVO vo) throws Exception;
}
package com.kun.eis.test.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kun.eis.test.vo.TestVO;

	
@Service("testService")
public class TestServiceImpl implements TestService {

	@Autowired
	private TestMapper testMapper;

	@Override
	public List<TestVO> testList(TestVO vo) throws Exception {
		return testMapper.selectEqpmntList(vo);
	}

	@Override
	public TestVO selectPwCode(TestVO vo) throws Exception {
		return testMapper.selectPwCode(vo);
	}

	
}
package com.kun.eis.test.service;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.kun.eis.test.vo.TestVO;



@Mapper
public interface TestMapper {

	public List<TestVO> selectEqpmntList(TestVO vo);

	public TestVO selectPwCode(TestVO vo);
	
}

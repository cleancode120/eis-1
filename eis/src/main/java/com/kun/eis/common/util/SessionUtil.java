package com.kun.eis.common.util;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class SessionUtil extends HandlerInterceptorAdapter{
	private static final Logger logger = LoggerFactory.getLogger(SessionUtil.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		try {
			if(request.getSession().getAttribute("userInfo") == null){
			logger.debug("===== 로그인정보 없음 =====");

			response.setCharacterEncoding("UTF-8");
			response.setContentType("text/html; charset=UTF-8");

			PrintWriter printWriter = response.getWriter();

			//세션 제거
			request.getSession().removeAttribute("userInfo");
			request.getSession().removeAttribute("userFlag");
			request.getSession().removeAttribute("userInfoUserId");

			//팝업창인 경우(오프라인 예약등록 화면), 팝업창을 닫고 부모창의 url 이동.
			printWriter.println("<html><head><script>");
			printWriter.println("(function(){alert('로그인이 필요한 서비스입니다.\\r로그인 후 이용해주세요.'); location.href='/login/loginView';}());");
			printWriter.println("</script></head><body></body></html>");
			printWriter.flush();
			printWriter.close();

			return false; }

		} catch (Exception e) {
			e.printStackTrace();
		}

		logger.debug("===== 로그인정보 존재 =====");
		return true;
	}

}

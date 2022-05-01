package com.group.user.service;

import java.util.List;
import java.util.Map;

import com.group.user.vo.UserVO;

public interface UserService {
	
	List<UserVO> userVoSelectList(String userId);
	List<String> authoritySelectList(String userId);
	List<Map<String, Object>> selectAuthLevel1MenuList(String userId);
	List<Map<String, Object>> selectAuthLevel2MenuList(String userId);
	void userInfoInsert(Map<String, Object> params);
	
}

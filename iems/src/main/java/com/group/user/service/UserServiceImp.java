package com.group.user.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group.user.dao.UserDAO;
import com.group.user.vo.UserVO;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	private UserDAO userDAO;

	@Override
	public List<UserVO> userVoSelectList(String userId) {
		return userDAO.userVoSelectList(userId);
	}

	@Override
	public List<String> authoritySelectList(String userId) {
		return userDAO.authoritySelectList(userId);
	}

	@Override
	public List<Map<String, Object>> selectAuthLevel1MenuList(String userId) {
		return userDAO.selectAuthLevel1MenuList(userId);
	}

	@Override
	public List<Map<String, Object>> selectAuthLevel2MenuList(String userId) {
		return userDAO.selectAuthLevel2MenuList(userId);
	}

	@Override
	public void userInfoInsert(Map<String, Object> params) {
		userDAO.userInfoInsert(params);
	}

}

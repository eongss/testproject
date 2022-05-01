package com.group.user.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.group.user.vo.UserVO;

@Mapper
public interface UserDAO {

	public List<UserVO> userVoSelectList(String userId);

	public List<String> authoritySelectList(String userId);

	public List<Map<String, Object>> selectAuthLevel1MenuList(String userId);

	public List<Map<String, Object>> selectAuthLevel2MenuList(String userId);

	public void userInfoInsert(Map<String, Object> params);
	
	@Select("SELECT * FROM user_info WHERE id = #{userId}")
	UserVO selectUserById(String userId);

}

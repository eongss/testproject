package com.group.user.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserVO {
	
	private int pmk;
	private String id;
	private String password;
	private String name;
	private String creation_date;

}

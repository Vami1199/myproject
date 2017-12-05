package com.xj.common;

import java.util.UUID;

public class UUIDUtils {
	public static String returnUUID(){
		String str = UUID.randomUUID().toString();
		String regex = "-";
		String[] split = str.split(regex);
		String r = "";
		for (String string : split) {
			r += string;
		}
		return r;
	}
}

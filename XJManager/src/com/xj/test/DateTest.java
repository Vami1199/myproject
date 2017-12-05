package com.xj.test;

import java.text.ParseException;
import java.util.Date;

import com.xj.common.DateUtils;

public class DateTest {
	public static void main(String[] args) throws ParseException {
		String str ="17年11月01日";
		Date stringToDate = DateUtils.StringToDate(str);
		System.out.println(stringToDate);
	}
}

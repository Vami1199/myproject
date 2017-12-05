package com.xj.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 日期 时间的一些工具类
 * @author Administrator
 *
 */
public class DateUtils {
	public static String DateToString(Date date) throws ParseException{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String string = sdf.format(date);
		return string;
	}
	public static Date StringToDate(String str) throws ParseException{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
		Date date = sdf.parse(str);
		return date;
	}
}

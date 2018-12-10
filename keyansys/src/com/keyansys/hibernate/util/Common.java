package com.keyansys.hibernate.util;

import java.util.Random;

public class Common
{
	public static String getImageFileName()
	{
		String s = "";
		Random random = new Random();
		for (int i = 0; i < 10; i++)
		{
			int n = random.nextInt(36);
			if (n >= 0 && n <= 9)
			{
				s += String.valueOf(n);
			}
			else
			{
				n = n - 10;
				s += (char) (97 + n);
			}
		}

		return s;
	}
}

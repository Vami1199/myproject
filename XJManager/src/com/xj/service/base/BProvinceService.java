package com.xj.service.base;

import java.util.List;

import com.xj.domain.base.BProvince;
import com.xj.domain.base.BProvinceQuery;

public interface BProvinceService {

	List<BProvince> findAll(BProvinceQuery provinceQuery);

}

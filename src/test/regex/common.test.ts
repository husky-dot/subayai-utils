import { describe, expect, it } from 'vitest';
import {
  isIdCard,
  isPostCode,
  isEmail,
  isTelNumber,
  isUrl,
  isHexColor,
  isDomainUrl,
  isLoosePwd,
  isSimplePwd,
  isStrictPwd,
} from '../../../index';

describe('random', () => {
  describe('测试 isIdCard 函数', () => {
    it('是否为一代身份证号', () => {
      const isFirst = isIdCard('350681910922103', 1);
      expect(isFirst).toBe(true);
      const isNotFirst = isIdCard('3506819109221037', 1);
      expect(isNotFirst).toBe(false);
    });
    it('是否为二代身份证号', () => {
      const isSecond = isIdCard('350681199809221037', 2);
      expect(isSecond).toBe(true);
      const isNotSecond = isIdCard('35068191092210371', 2);
      expect(isNotSecond).toBe(false);
    });
    it('同事匹配15位和18位', () => {
      const isFirst = isIdCard('350681910922103');
      expect(isFirst).toBe(true);
      const isSecond = isIdCard('350681199809221037');
      expect(isSecond).toBe(true);
    });
  });

  describe('测试 isPostCode 函数', () => {
    it('是否是大陆邮政编码', () => {
      const code = isPostCode('615599');
      expect(code).toBe(true);
      const nodeCode = isPostCode('0066');
      expect(nodeCode).toBe(false);
    });
  });

  describe('邮箱正则测试', () => {
    it('常规邮箱格式校验', () => {
      expect(isEmail('14e4e.com')).toBeFalsy();

      expect(isEmail('14e4e@com')).toBeFalsy();

      expect(isEmail('18888.com')).toBeFalsy();

      expect(isEmail('zhangsan张三@qq.cn.com')).toBeFalsy();

      expect(isEmail('zhangsan@qq.com')).toBeTruthy();

      expect(isEmail('zhangsang_455hgfjgj@163.com')).toBeTruthy();

      expect(isEmail('zhangs_76an@yang.com')).toBeTruthy();

      expect(isEmail('888zhangsan123@yang.com')).toBeTruthy();

      expect(isEmail('zhangsan_123@yang.com')).toBeTruthy();

      expect(isEmail('zhangsan-123@yang.com')).toBeTruthy();

      expect(isEmail('zhangsan@qq.cn.com')).toBeTruthy();
    });

    it('常规邮箱格式校验(包含中文)', () => {
      expect(isEmail('zhangsan张三@qq.com', true)).toBeTruthy();

      expect(isEmail('zhangsan张三@qq.cn.com', true)).toBeTruthy();

      expect(isEmail('zhangsan_张三@qq.com', true)).toBeTruthy();

      expect(isEmail('zhangsan_张三@qq.cn.com', true)).toBeTruthy();
    });
  });

  describe('测试 isTelNumber 函数', () => {
    it('是否是手机号', () => {
      const isTel = isTelNumber('15345004432');
      expect(isTel).toBe(true);
      const isNotTel = isTelNumber('15345002244322');
      expect(isNotTel).toBe(false);
      const isString = isTelNumber('abdc');
      expect(isString).toBe(false);
    });
  });

  describe('测试 isUrl 函数', () => {
    it('校验是否是 URL', () => {
      expect(isUrl('https://www.baidu.com/')).toBeTruthy();
      expect(isUrl('http://www.baidu.com/')).toBeTruthy();
      expect(isUrl('aaa')).toBeFalsy();
    });
  });
});

describe('颜色正则测试', () => {
  it('十六进制颜色', () => {
    expect(isHexColor('#ff')).toBeFalsy();

    expect(isHexColor('@ff12bg')).toBeFalsy();

    expect(isHexColor('#fff')).toBeTruthy();

    expect(isHexColor('#123')).toBeTruthy();

    expect(isHexColor('#ffffff')).toBeTruthy();

    expect(isHexColor('#FFFFFF')).toBeTruthy();

    expect(isHexColor('#FFFFbb')).toBeTruthy();

    expect(isHexColor('#FFFbb1')).toBeTruthy();
  });
});

describe('域名校验正则测试', () => {
  it('域名合法性测试', () => {
    expect(isDomainUrl('hvhv')).toBeFalsy();

    expect(isDomainUrl('!aas')).toBeFalsy();

    expect(isDomainUrl('http://www.baidu.com')).toBeFalsy();

    expect(isDomainUrl('https://www.baidu.com')).toBeFalsy();

    expect(isDomainUrl('a.com')).toBeTruthy();

    expect(isDomainUrl('www.baidu.com.cn')).toBeTruthy();

    expect(isDomainUrl('www.baidu99.com')).toBeTruthy();

    expect(isDomainUrl('www.baidu.com')).toBeTruthy();

    expect(isDomainUrl('a.com.cn')).toBeTruthy();
  });
});

describe('弱密码正则测试', () => {
  it('密码强度测试', () => {
    expect(isLoosePwd('123456', [6, 6])).toBeTruthy();
    expect(isLoosePwd('123456')).toBeTruthy();

    expect(isLoosePwd('12aaAB', [6, 6])).toBeTruthy();

    expect(isLoosePwd('7ggHJJH_FHF_', [6, 20])).toBeTruthy();

    expect(isLoosePwd('haha049432.', [6, 20])).toBeFalsy();
  });
});

describe('简单密码正则测试', () => {
  it('密码强度测试', () => {
    expect(isSimplePwd('12345!@')).toBeFalsy();

    expect(isSimplePwd('123xzfhgf')).toBeTruthy();
    expect(isSimplePwd('123ABCD')).toBeTruthy();

    expect(isSimplePwd('123456', [6, 6])).toBeFalsy();

    expect(isSimplePwd('7ggHJJH_FHF@~####', [12, 20])).toBeTruthy();
  });
});

describe('强密码正则测试', () => {
  it('密码长度测试', () => {
    expect(isStrictPwd('x123X@')).toBeFalsy();

    expect(isStrictPwd('x123X@x123X@x123X@x123X@x123X@x123X@x123X@')).toBeFalsy();

    expect(isStrictPwd('123@a!A', [7, 20])).toBeTruthy();
  });

  it('密码强度测试', () => {
    expect(isStrictPwd('190808098456')).toBeFalsy();

    expect(isStrictPwd('123jhjhx')).toBeFalsy();

    expect(isStrictPwd('123vhvhx!@')).toBeFalsy();

    expect(isStrictPwd('123x!Z@12')).toBeTruthy();
  });
});

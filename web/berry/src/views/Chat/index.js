import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API } from 'utils/api';
import { showInfo } from '../../utils/common';

export default function Chat() {
  const siteInfo = useSelector((state) => state.siteInfo);

  useEffect(() => {
    const handleDirectCopy = async () => {
      try {
        const res = await API.get(`/api/token/?p=0`);
        const { success, data } = res.data;

        if (success && data.length > 0) {
          const firstToken = data[0];
          const serverAddress = siteInfo?.server_address || window.location.host;
          const key = firstToken.key;

          let url = siteInfo?.chat_link || 'https://panel.chatapi.org/';
          url += `#/?settings={"key":"sk-${key}","url":"${serverAddress}"}`;

          window.location.href = url;
        } else {
          showInfo('没有可用的 token。请创建一个新的 token 后再试。');
        }
      } catch (error) {
        showInfo('获取 token 时出错。请稍后再试。');
      }
    };

    handleDirectCopy();
  }, [siteInfo]);

  // 返回 null，因为我们不渲染任何内容
  return null;
}
